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
  
  const { layers, groups, loadLayer, toggleLayer, toggleGroup } = useMapLayers(map, layerGroups);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/landscape-v4/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`,
      center: [-86.5, 35], // Adjust to your region
      zoom: 5,
    });

    map.current.on('load', () => {
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
      />
    </div>
  );
}