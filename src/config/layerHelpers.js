import { generateShades } from '../utils/colorUtils';

// Standard paint configurations
export const createStandardPaint = (color, opacity = 0.6) => ({
  'fill-color': color,
  'fill-opacity': opacity,
  'fill-outline-color': '#000'
});

export const createHeatmapPaint = (baseColor, numShades = 3, opacity = 0.6) => {
  const shades = generateShades(baseColor, numShades, 'lighter');
  return {
    'fill-color': [
      'match',
      ['get', 'ID'],
      ...shades.flatMap((shade, index) => [index + 1, shade]),
      baseColor // Default fallback color
    ],
    'fill-opacity': opacity,
    'fill-outline-color': '#000'
  };
};

// Factory function to create a standard variety layer
export const createVarietyLayer = ({
  id,
  name,
  commonName,
  dataUrl,
  color,
  info,
  visible = false,
  paintType = 'standard',
  opacity = 0.6
}) => ({
  id,
  name,
  commonName,
  visible,
  type: 'fill',
  dataUrl,
  paint: paintType === 'heatmap' 
    ? createHeatmapPaint(color, 3, opacity) 
    : createStandardPaint(color, opacity),
  info
});

// Factory function to create species group
export const createSpeciesGroup = ({
  id,
  name,
  commonName,
  color,
  dataUrl,
  info,
  children,
  visible = true,
  opacity = 0.4
}) => ({
  id,
  name,
  commonName,
  color,
  visible,
  type: 'fill',
  dataUrl,
  paint: createStandardPaint(color, opacity),
  info,
  children
});

// Helper to create info object
export const createInfo = ({
  imageUrl,
  blurhash = 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
  photographer,
  sourceUrl,
  distribution,
  habitat,
  conservationStatus,
  source
}) => {
  const info = {
    imageUrl,
    blurhash,
    photographer,
    sourceUrl,
    distribution,
    habitat,
    conservationStatus
  };
  
  // Only add source if provided
  if (source) {
    info.source = source;
  }
  
  return info;
};

