// Helper function to generate progressive shades from a base color
export const generateShades = (baseColor, numShades, direction = 'darker') => {
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Convert RGB to hex
  const rgbToHex = (r, g, b) => {
    return '#' + [r, g, b].map(x => {
      const hex = Math.round(Math.max(0, Math.min(255, x))).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };

  const rgb = hexToRgb(baseColor);
  const shades = [];
  
  for (let i = 0; i < numShades; i++) {
    let shade;
    if (direction === 'lighter') {
      // Mix with white to create lighter shades
      // i=0 is lightest (70% white), i=numShades-1 is darkest (base color)
      const whiteMix = 0.7 - ((i / (numShades - 1)) * 0.7);
      shade = rgbToHex(
        rgb.r + (255 - rgb.r) * whiteMix,
        rgb.g + (255 - rgb.g) * whiteMix,
        rgb.b + (255 - rgb.b) * whiteMix
      );
    } else {
      // Darken the color
      const factor = 1 - ((i / (numShades - 1)) * 0.6);
      shade = rgbToHex(
        rgb.r * factor,
        rgb.g * factor,
        rgb.b * factor
      );
    }
    shades.push(shade);
  }
  
  return shades;
};

