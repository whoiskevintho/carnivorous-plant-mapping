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

export const createPresencePaint = (opacity = 0.6) => ({
  'fill-color': [
    'match',
    ['get', 's_presence'],
    'extant', '#2ECC71',      // Green for extant
    'extirpated', '#E63946',  // Red for extirpated
    'unknown', '#00B4D8',     // Blue for unknown
    '#999999'                 // Gray fallback
  ],
  'fill-opacity': opacity,
  'fill-outline-color': '#000'
});

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
  opacity = 0.6,
  filter = null  // Optional: { field: 'unique_id', values: [1, 2, 3] } or { field: 'species_id', value: 'var-alata' }
}) => ({
  id,
  name,
  commonName,
  visible,
  type: 'fill',
  dataUrl,
  color,  // Store base color for easy access
  paint: paintType === 'heatmap' 
    ? createHeatmapPaint(color, 3, opacity) 
    : createStandardPaint(color, opacity),
  info,
  filter
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
  sources = [],
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
  children,
  sources
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

// Helper to create distribution source
export const createDistributionSource = ({
  id,
  name,
  year,
  dataUrl,
  citation,
  type = 'fill',
  paintType = 'standard',
  opacity = 0.4
}) => ({
  id,
  name,
  year,
  dataUrl,
  citation,
  type,
  paintType,
  opacity
});
