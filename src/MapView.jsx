import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import LayerPanel from "./components/LayerPanel";
import { layerGroups } from "./config/layerConfig";
import { useMapLayers } from "./hooks/useMapLayers";

export default function MapView() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const { 
    layers, 
    groups, 
    loadLayer, 
    toggleLayer, 
    toggleGroup,
    selectedSubspecies,
    toggleSubspeciesSelection,
    activeSource,
    handleSourceChange
  } = useMapLayers(map, layerGroups);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/landscape-v4/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`,
      center: [-81.5, 37], // Adjust to your region
      zoom: 5,
    });

    map.current.on('load', () => {
      // Add state/province boundaries as a base layer
      map.current.addSource('state-boundaries', {
        type: 'geojson',
        data: '/data/States_outline.geojson'
      });

      map.current.addLayer({
        id: 'state-boundaries-line',
        type: 'line',
        source: 'state-boundaries',
        paint: {
          'line-color': '#000000',
          'line-width': 1,
          'line-opacity': 0.3
        }
      });

      setMapLoaded(true);
    });
  }, []);

  // Load all layers when map is ready
  useEffect(() => {
    if (!mapLoaded) return;
    
    layers.forEach(layer => {
      loadLayer(layer);
    });
  }, [mapLoaded]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div
        ref={mapContainer}
        style={{
          width: "100%",
          height: "100vh",
        }}
      />
      
      <LayerPanel
        layerGroups={layerGroups}
        layers={layers}
        groups={groups}
        toggleLayer={toggleLayer}
        toggleGroup={toggleGroup}
        selectedSubspecies={selectedSubspecies}
        onSubspeciesSelect={toggleSubspeciesSelection}
        activeSource={activeSource}
        onSourceChange={handleSourceChange}
      />
    </div>
  );
}