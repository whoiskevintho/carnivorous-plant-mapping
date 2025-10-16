import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function MapView() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`,
      center: [-74.5, 40], // longitude, latitude
      zoom: 9,
    });

    new maplibregl.Marker().setLngLat([-74.5, 40]).addTo(map.current);
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100%",
        height: "100vh",
      }}
    />
  );
}
