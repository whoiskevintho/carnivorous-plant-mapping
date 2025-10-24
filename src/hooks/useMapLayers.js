import { useState, useEffect, useRef } from 'react';
import { getAllLayers } from '../config/layerConfig';
import maplibregl from 'maplibre-gl';
import { generateShades } from '../utils/colorUtils';
import { createPresencePaint } from '../config/layerHelpers';

export const useMapLayers = (map, layerGroups) => {
  const [layers, setLayers] = useState(() => getAllLayers());
  const [groups, setGroups] = useState(() =>
    layerGroups.map(group => ({ id: group.id, visible: group.visible }))
  );
  const [selectedSubspecies, setSelectedSubspecies] = useState([]);
  const [activeSource, setActiveSource] = useState(() =>
    layerGroups.reduce((acc, group) => {
      if (group.sources && group.sources.length > 0) {
        acc[group.id] = group.sources[0].id;
      }
      return acc;
    }, {})
  );
  
  // Track popup for cleanup
  const clickPopupRef = useRef(null);
  
  // Helper to get label layer ID
  const getLabelLayerId = (layerId) => `${layerId}-label`;

  // Load GeoJSON data and add to map
  const loadLayer = async (layer) => {
    if (!map.current || !layer.dataUrl) return;
    
    // Skip layers with filters - these are subspecies layers controlled by chip selection
    if (layer.filter) return;

    try {
      // Fetch GeoJSON if it's a URL
      const response = await fetch(layer.dataUrl);
      const data = await response.json();

      // Add source if it doesn't exist
      if (!map.current.getSource(layer.id)) {
        map.current.addSource(layer.id, {
          type: 'geojson',
          data: data
        });

        // Add layer
        map.current.addLayer({
          id: layer.id,
          type: layer.type,
          source: layer.id,
          paint: layer.paint,
          layout: {
            visibility: layer.visible ? 'visible' : 'none'
          }
        });
      }
    } catch (error) {
      console.error(`Error loading layer ${layer.id}:`, error);
    }
  };

  // Toggle individual layer (skips filtered subspecies layers - those use chip selection)
  const toggleLayer = (layerId) => {
    if (!map.current) return;

    setLayers(prevLayers =>
      prevLayers.map(layer => {
        if (layer.id === layerId && !layer.filter) {
          const newVisibility = !layer.visible;
          
          if (map.current.getLayer(layerId)) {
            map.current.setLayoutProperty(
              layerId,
              'visibility',
              newVisibility ? 'visible' : 'none'
            );
          }
          
          return { ...layer, visible: newVisibility };
        }
        return layer;
      })
    );
  };

  // Toggle all layers in a group (excludes subspecies layers with filters - those are chip-controlled)
  const toggleGroup = (groupId) => {
    if (!map.current) return;

    const group = layerGroups.find(g => g.id === groupId);
    if (!group) return;

    const newVisibility = !groups.find(g => g.id === groupId)?.visible;

    setGroups(prevGroups =>
      prevGroups.map(g =>
        g.id === groupId ? { ...g, visible: newVisibility } : g
      )
    );

    setLayers(prevLayers =>
      prevLayers.map(layer => {
        const belongsToGroup = group.children.some(child => child.id === layer.id);
        // Skip layers with filters - they're controlled by chip selection only
        if (belongsToGroup && !layer.filter) {
          if (map.current.getLayer(layer.id)) {
            map.current.setLayoutProperty(
              layer.id,
              'visibility',
              newVisibility ? 'visible' : 'none'
            );
          }
          return { ...layer, visible: newVisibility };
        }
        return layer;
      })
    );
  };

  // Toggle subspecies selection
  const toggleSubspeciesSelection = (subspeciesId) => {
    setSelectedSubspecies(prev => {
      const isSelected = prev.includes(subspeciesId);
      if (isSelected) {
        // Deselect - remove layer
        removeSubspeciesLayer(subspeciesId);
        const remaining = prev.filter(id => id !== subspeciesId);
        // Focus on remaining selected subspecies
        if (remaining.length > 0) {
          focusCameraOnSubspecies(remaining);
        }
        return remaining;
      } else {
        // Select - add layer and focus camera
        const newSelection = [...prev, subspeciesId];
        addSubspeciesLayer(subspeciesId);
        focusCameraOnSubspecies(newSelection);
        return newSelection;
      }
    });
  };

  // Helper to filter GeoJSON features based on layer filter config
  const filterFeatures = (data, filter) => {
    if (!filter) return data;

    const filteredFeatures = data.features.filter(feature => {
      const props = feature.properties;
      
      if (filter.values && Array.isArray(filter.values)) {
        // Array of values check: filter: { field: 'unique_id', values: [1, 2, 3, 45] }
        return filter.values.includes(props[filter.field]);
      } else if (filter.contains) {
        // Array contains check: filter: { field: 'species', contains: 'var-alata' }
        const fieldValue = props[filter.field];
        return Array.isArray(fieldValue) && fieldValue.includes(filter.contains);
      } else if (filter.value !== undefined) {
        // Exact value check: filter: { field: 'species_id', value: 'var-alata' }
        return props[filter.field] === filter.value;
      }
      return false;
    });

    return {
      ...data,
      features: filteredFeatures
    };
  };

  // Add subspecies layer (only shows when selected)
  const addSubspeciesLayer = async (subspeciesId) => {
    if (!map.current) return;

    const layer = layers.find(l => l.id === subspeciesId);
    if (!layer || !layer.dataUrl) return;
    
    try {
      // If layer exists, show it and move to top
      if (map.current.getLayer(subspeciesId)) {
        map.current.setLayoutProperty(subspeciesId, 'visibility', 'visible');
        // Move to top of layer stack (most recently selected on top)
        map.current.moveLayer(subspeciesId);
        
        // Also show and move the label layer if it exists
        const labelLayerId = getLabelLayerId(subspeciesId);
        if (map.current.getLayer(labelLayerId)) {
          map.current.setLayoutProperty(labelLayerId, 'visibility', 'visible');
          map.current.moveLayer(labelLayerId);
        }
        return;
      }

      // Ensure source exists
      if (!map.current.getSource(subspeciesId)) {
        const response = await fetch(layer.dataUrl);
        let data = await response.json();
        
        if (layer.filter) {
          data = filterFeatures(data, layer.filter);
        }
        
        map.current.addSource(subspeciesId, {
          type: 'geojson',
          data: data
        });
      }

      // Determine geometry type
      const sourceData = map.current.getSource(subspeciesId)._data;
      const isPoint = sourceData?.features[0]?.geometry.type === 'Point';
      const color = layer.color || '#fff';

      // Add layer
      const layerConfig = isPoint ? {
        id: subspeciesId,
        type: 'circle',
        source: subspeciesId,
        paint: {
          'circle-radius': 6,
          'circle-color': color,
          'circle-opacity': 0.8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff',
          'circle-stroke-opacity': 1
        }
      } : {
        id: subspeciesId,
        type: 'fill',
        source: subspeciesId,
        paint: {
          'fill-color': color,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        }
      };

      // Add layer - will be at top of stack by default
      map.current.addLayer(layerConfig);
      
      // Add interactive features for point layers
      if (isPoint) {
        // Add text label layer for point names
        map.current.addLayer({
          id: getLabelLayerId(subspeciesId),
          type: 'symbol',
          source: subspeciesId,
          layout: {
            'text-field': ['get', 'name'],
            'text-font': ['Open Sans Regular'],
            'text-size': 12,
            'text-offset': [0, -1.5],
            'text-anchor': 'bottom'
          },
          paint: {
            'text-color': '#000000',
            'text-halo-color': '#FFFFFF',
            'text-halo-width': 2,
            'text-halo-blur': 1
          }
        });
        
        addPointInteractions(subspeciesId);
      }
    } catch (error) {
      // Silently handle if layer/source already exists, otherwise log
      if (!error.message?.includes('already exists')) {
        console.error(`Error adding subspecies layer for ${subspeciesId}:`, error);
      }
    }
  };

  // Add hover and click interactions for point layers
  const addPointInteractions = (layerId) => {
    if (!map.current) return;

    // Change cursor to pointer on hover
    map.current.on('mouseenter', layerId, () => {
      map.current.getCanvas().style.cursor = 'pointer';
    });

    map.current.on('mouseleave', layerId, () => {
      map.current.getCanvas().style.cursor = '';
    });

    // Show persistent popup with link on click
    map.current.on('click', layerId, (e) => {
      if (e.features.length > 0) {
        const feature = e.features[0];
        const name = feature.properties.name;
        const link = feature.properties.link;
        
        // Remove existing click popup
        if (clickPopupRef.current) {
          clickPopupRef.current.remove();
        }
        
        // Build popup HTML
        const popupHTML = `
          <div class="popup-container">
            <div class="popup-title ${link ? 'popup-title-with-link' : ''}">${name}</div>
            ${link ? `
              <div class="popup-divider"></div>
              <a href="${link}" target="_blank" rel="noopener noreferrer" class="popup-link">
                Visit Website
                <svg class="popup-icon" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
              </a>` : ''}
          </div>`;
        
        // Create persistent popup
        clickPopupRef.current = new maplibregl.Popup({
          closeButton: true,
          closeOnClick: false,
          className: 'location-popup'
        })
          .setLngLat(e.lngLat)
          .setHTML(popupHTML)
          .addTo(map.current);
      }
    });
  };

  // Remove subspecies layer
  const removeSubspeciesLayer = (subspeciesId) => {
    if (!map.current) return;

    // Clean up any open popups
    if (clickPopupRef.current) {
      clickPopupRef.current.remove();
      clickPopupRef.current = null;
    }

    // Instead of removing, just hide it for better performance
    if (map.current.getLayer(subspeciesId)) {
      map.current.setLayoutProperty(subspeciesId, 'visibility', 'none');
    }
    
    // Also hide the label layer if it exists
    const labelLayerId = getLabelLayerId(subspeciesId);
    if (map.current.getLayer(labelLayerId)) {
      map.current.setLayoutProperty(labelLayerId, 'visibility', 'none');
    }
    
    // Keep both source and layers for quick re-selection
  };

  // Focus camera on selected subspecies
  const focusCameraOnSubspecies = async (subspeciesIds) => {
    if (!map.current || subspeciesIds.length === 0) return;

    try {
      const bounds = new maplibregl.LngLatBounds();
      
      for (const subspeciesId of subspeciesIds) {
        const layer = layers.find(l => l.id === subspeciesId);
        if (!layer || !layer.dataUrl) continue;

        const response = await fetch(layer.dataUrl);
        let data = await response.json();
        
        // Apply filter if specified
        if (layer.filter) {
          data = filterFeatures(data, layer.filter);
        }

        // Extend bounds with all features
        data.features.forEach(feature => {
          if (feature.geometry.type === 'Point') {
            bounds.extend(feature.geometry.coordinates);
          } else if (feature.geometry.type === 'Polygon') {
            feature.geometry.coordinates[0].forEach(coord => {
              bounds.extend(coord);
            });
          } else if (feature.geometry.type === 'MultiPolygon') {
            feature.geometry.coordinates.forEach(polygon => {
              polygon[0].forEach(coord => {
                bounds.extend(coord);
              });
            });
          }
        });
      }

      if (!bounds.isEmpty()) {
        map.current.fitBounds(bounds, {
          padding: { top: 100, bottom: 100, left: 100, right: 400 }, // Extra padding on right for LayerPanel
          duration: 1500,
          maxZoom: 10
        });
      }
    } catch (error) {
      console.error('Error focusing camera:', error);
    }
  };

  // Handle source change
  const handleSourceChange = (groupId, sourceId) => {
    setActiveSource(prev => ({
      ...prev,
      [groupId]: sourceId
    }));

    // Update the map layer to use the new source
    const group = layerGroups.find(g => g.id === groupId);
    const source = group?.sources?.find(s => s.id === sourceId);
    
    if (source && map.current) {
      // Remove old layer
      if (map.current.getLayer(groupId)) {
        map.current.removeLayer(groupId);
      }
      if (map.current.getSource(groupId)) {
        map.current.removeSource(groupId);
      }

      // Load new source
      loadSourceLayer(groupId, source, group.color);
    }
  };

  // Load a source layer
  const loadSourceLayer = async (groupId, source, color) => {
    if (!map.current || !source.dataUrl) return;

    try {
      const response = await fetch(source.dataUrl);
      const data = await response.json();

      map.current.addSource(groupId, {
        type: 'geojson',
        data: data
      });

      let paint;
      if (source.paintType === 'heatmap') {
        const shades = generateShades(color, 3, 'lighter');
        paint = {
          'fill-color': [
            'match',
            ['get', 'ID'],
            ...shades.flatMap((shade, index) => [index + 1, shade]),
            color
          ],
          'fill-opacity': source.opacity || 0.6,
          'fill-outline-color': '#000'
        };
      } else if (source.paintType === 'presence') {
        paint = createPresencePaint(source.opacity || 0.6);
      } else {
        paint = {
          'fill-color': color,
          'fill-opacity': source.opacity || 0.4,
          'fill-outline-color': '#000'
        };
      }

      map.current.addLayer({
        id: groupId,
        type: source.type,
        source: groupId,
        paint: paint,
        layout: {
          visibility: 'visible'
        }
      });
    } catch (error) {
      console.error(`Error loading source layer ${groupId}:`, error);
    }
  };

  return {
    layers,
    groups,
    loadLayer,
    toggleLayer,
    toggleGroup,
    selectedSubspecies,
    toggleSubspeciesSelection,
    activeSource,
    handleSourceChange
  };
};