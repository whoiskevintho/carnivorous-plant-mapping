// Define colors for each species
const SPECIES_COLORS = {
    flava: '#FFD700',  // Gold
    rubra: '#DC143C',  // Crimson
  };
  
  // Organized layer configuration with hierarchy
  export const layerGroups = [
    {
      id: 'sarracenia-flava',
      name: 'Sarracenia flava',
      color: SPECIES_COLORS.flava,
      visible: true,
      children: [
        {
          id: 'sarracenia-flava-var-flava',
          name: 'var. flava',
          visible: true,
          type: 'fill',
          dataUrl: '/data/Sarracenia_flava.geojson', // or import directly
          paint: {
            'fill-color': SPECIES_COLORS.flava,
            'fill-opacity': 0.6,
            'fill-outline-color': '#000'
          }
        },
        {
          id: 'sarracenia-flava-var-rugelii',
          name: 'var. rugelii',
          visible: true,
          type: 'fill',
          dataUrl: '/data/Sarracenia_flava_var_rugelii.geojson',
          paint: {
            'fill-color': SPECIES_COLORS.flava,
            'fill-opacity': 0.6,
            'fill-outline-color': '#000'
          }
        },
        {
          id: 'sarracenia-flava-var-rubricorpora',
          name: 'var. rubricorpora',
          visible: true,
          type: 'fill',
          dataUrl: '/data/Sarracenia_flava_var_rubricorpora.geojson',
          paint: {
            'fill-color': SPECIES_COLORS.flava,
            'fill-opacity': 0.6,
            'fill-outline-color': '#000'
          }
        }
      ]
    },
    {
      id: 'sarracenia-rubra',
      name: 'Sarracenia rubra',
      color: SPECIES_COLORS.rubra,
      visible: true,
      children: [
        {
          id: 'sarracenia-rubra-var-gulfensis',
          name: 'var. gulfensis',
          visible: true,
          type: 'fill',
          dataUrl: '/data/Sarracenia_rubra_subsp_gulfensis.geojson',
          paint: {
            'fill-color': SPECIES_COLORS.rubra,
            'fill-opacity': 0.6,
            'fill-outline-color': '#000'
          }
        },
        {
          id: 'sarracenia-rubra-var-viatorum',
          name: 'var. viatorum',
          visible: true,
          type: 'fill',
          dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
          paint: {
            'fill-color': SPECIES_COLORS.rubra,
            'fill-opacity': 0.6,
            'fill-outline-color': '#000'
          }
        }
      ]
    }
  ];
  
  // Flatten the hierarchy to get all individual layers
  export const getAllLayers = () => {
    return layerGroups.flatMap(group => group.children);
  };