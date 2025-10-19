import { useState, useEffect } from 'react';
import { getAllLayers } from '../config/layerConfig';

export const useMapLayers = (map, layerGroups) => {
  const [layers, setLayers] = useState(() => getAllLayers());
  const [groups, setGroups] = useState(() =>
    layerGroups.map(group => ({ id: group.id, visible: group.visible }))
  );

  // Load GeoJSON data and add to map
  const loadLayer = async (layer) => {
    if (!map.current || !layer.dataUrl) return;

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

  // Toggle individual layer
  const toggleLayer = (layerId) => {
    if (!map.current) return;

    setLayers(prevLayers =>
      prevLayers.map(layer => {
        if (layer.id === layerId) {
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

  // Toggle all layers in a group
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
        if (belongsToGroup) {
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

  return {
    layers,
    groups,
    loadLayer,
    toggleLayer,
    toggleGroup
  };
};