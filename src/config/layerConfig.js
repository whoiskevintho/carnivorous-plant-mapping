// Define colors for each species
const SPECIES_COLORS = {
  alata: '#00FF00',
  flava: '#FFD700',
  leucophylla: '#FF00FF',
  minor: '#0000FF',
  oreophila: '#00DFDD',
  psittacina: '#92854F',
  purpurea: "#800080",
  rubra: '#DC143C',
};

// Organized layer configuration with hierarchy
export const layerGroups = [
  {
    id: 'sarracenia-alata',
    name: 'Sarracenia alata',
    commonName: 'Pale Pitcher Plant',
    color: SPECIES_COLORS.alata,
    visible: true,
    // Add layer properties for the species itself
    type: 'fill',
    dataUrl: '/data/Sarracenia_alata.geojson', // All S. rubra combined
    paint: {
      'fill-color': SPECIES_COLORS.alata,
      'fill-opacity': 0.4,
      'fill-outline-color': '#000'
    },
    info: {
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2343.jpeg',
      blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
      photographer: '2009 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287585&one=T',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    },
    children: [
      {
        id: 'sarracenia-alata-var-alata',
        name: 'S. alata var. alata',
        commonName: 'Pale Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_rubra_subsp_gulfensis.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2304.jpeg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287546&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-rubra-var-atrorubra',
        name: 'S.alata var. atrorubra',
        commonName: 'looking for common name',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://www.sarracenia.com/photos/sarracenia/sarraalata016.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://www.sarracenia.com/faq/faq5524.html',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-alata-var-cuprea',
        name: 'S.alata var. cuprea',
        commonName: "Sarracenia alata 'copper top'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: '/images/3127_McPherson_alata_cuprea.jpeg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2011 McPherson',
          sourceUrl: 'https://www.aipcnet.it/wp-content/uploads/2020/12/New_species_2011.pdf',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-alata-var-nigropurpurea',
        name: 'S.alata var. nigropurpurea',
        commonName: "Sarracenia alata 'black'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://files.ekmcdn.com/hampshirecarni/images/sa007-sarracenia-alata-purple-tube-3209-p.jpeg?v=A0A524E4-EFA4-4219-B0A8-B7DAE5F14939',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: 'need to source this',
          sourceUrl: 'https://www.hantsflytrap.com/sa007-sarracenia-alata-purple-tube-3209-p.asp',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-alata-var-ornata',
        name: 'S.alata var. ornata',
        commonName: "Sarracenia alata 'heavy veined'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0406/1349.jpeg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2006 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=187387&one=T',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-alata-var-rubrioperculata',
        name: 'S.alata var. rubrioperculata',
        commonName: "Sarracenia alata 'cut throat'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2320.jpeg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287562&one=T',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-alata-f-viridescens',
        name: 'S.alata var. viridescens',
        commonName: "Sarracenia alata 'antho-free'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: '/images/McPherson_alata_f_viridescens.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2004 McPherson',
          sourceUrl: 'https://cpn.carnivorousplants.org/articles/CPNv33n3p76.pdf',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        }
      },
    ]
  },
  {
    id: 'sarracenia-flava',
    name: 'Sarracenia flava',
    commonName: 'Yellow Pitcher Plant',
    color: SPECIES_COLORS.flava,
    visible: true,
    // Add layer properties for the species itself
    type: 'fill',
    dataUrl: '/data/Sarracenia_flava.geojson', // All S. flava combined
    paint: {
      'fill-color': SPECIES_COLORS.flava,
      'fill-opacity': 0.4,
      'fill-outline-color': '#000'
    },
    info: {
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3070.jpeg',
      blurhash: 'LMIq@5s,$~nl~8RnRmf*IvR+kBW;',
      photographer: '2016 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750789&one=T',
      distribution: 'Found in the coastal plains of the southeastern United States, from Virginia south to Florida and west to Alabama. Primarily inhabits wet pine savannas and bogs.',
      habitat: 'Wet pine savannas, bogs',
      conservationStatus: 'Vulnerable'
    },
    children: [
      {
        id: 'sarracenia-flava-var-flava',
        name: 'S.flava var. flava',
        commonName: "Sarracenia flava 'typical'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_flava.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.flava,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sarracenia_flava_-_Sardis_Lake%2C_Mississippi.jpg/800px-Sarracenia_flava_-_Sardis_Lake%2C_Mississippi.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          distribution: 'The typical variety, widely distributed across the southeastern coastal plain. Most common in North Carolina, South Carolina, Georgia, and northern Florida.',
          habitat: 'Pine flatwoods, wet savannas',
          conservationStatus: 'Vulnerable'
        }
      },
      {
        id: 'sarracenia-flava-var-atropurpurea',
        name: 'S. flava var. atropurpurea',
        commonName: "Sarracenia flava 'all red'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_flava_var_atropurpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.flava,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://live.staticflickr.com/65535/50098846638_ceaa7169b6_3k.jpg',
          blurhash: 'LHI}zAJ%pVRl?:RBR-Rnk*ocoJXQ', // Replace with actual image
          photographer: '2020 Alan Cressler',
          sourceUrl: 'https://www.flickr.com/photos/alan_cressler/50098846638/in/photostream/',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-flava-var-cuprea',
        name: 'S. flava var. cuprea',
        commonName: "Sarracenia flava 'copper top'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_flava_var_atropurpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.flava,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3127.jpeg',
          blurhash: 'LAFOSLJA5qXO}nNxJ8$$5W9weo=c',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750845&one=T',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-flava-var-maxima',
        name: 'S. flava var. maxima',
        commonName: "Sarracenia flava 'all green'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_flava_var_atropurpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.flava,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3061.jpeg',
          blurhash: 'LAFOSLJA5qXO}nNxJ8$$5W9weo=c',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750780&one=T',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-flava-var-ornata',
        name: 'S. flava var. ornata',
        commonName: "Sarracenia flava 'heavy veined'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_flava_var_atropurpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.flava,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3141.jpeg',
          blurhash: 'LQJ@Waxs-,kU~6xFxpR+R.ocsoWD',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750859&one=T',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-flava-var-rubricorpora',
        name: 'S. flava var. rubricorpora',
        commonName: 'Red-Throat Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_flava_var_rubricorpora.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.flava,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1319.jpeg',
          blurhash: 'LFD+SJ%LS0Sc_4xbNGIWcaxuNGRj',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323952&one=T',
          distribution: 'Found primarily in the Florida Panhandle and southern Georgia. Distinguished by its red throat coloration.',
          habitat: 'Wet pine savannas, seepage bogs',
          conservationStatus: 'Vulnerable'
        }
      },
      {
        id: 'sarracenia-flava-var-rugelii',
        name: 'S. flava var. rugelii',
        commonName: "Rugel's Pitcher Plant",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_flava_var_rugelii.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.flava,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1329.jpeg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F', // Replace with actual image
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323962&one=T',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        }
      },
      {
        id: 'sarracenia-flava-f-viridescens',
        name: 'S. flava f. viridescens',
        commonName: "Sarracenia flava 'anthocyanin-free'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_flava_var_rugelii.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.flava,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: '/images/McPherson_flava_f_viridescens.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F', // Replace with actual image
          photographer: '2011 McPherson',
          sourceUrl: 'https://www.aipcnet.it/wp-content/uploads/2020/12/New_species_2011.pdf',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        }
      },

    ]
  },
  {
    id: 'sarracenia-leucophylla',
    name: 'Sarracenia leucophylla',
    commonName: 'White Pitcher Plant',
    color: SPECIES_COLORS.leucophylla,
    visible: true,
    // Add layer properties for the species itself
    type: 'fill',
    dataUrl: '/data/Sarracenia_leucophylla.geojson', // All S. rubra combined
    paint: {
      'fill-color': SPECIES_COLORS.leucophylla,
      'fill-opacity': 0.4,
      'fill-outline-color': '#000'
    },
    info: {
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1342.jpeg',
      blurhash: 'L8HnfqD+ORIn}[xZ-.jE01x@MyRk',
      photographer: '2010 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323975&one=T',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    },
    children: [
      {
        id: 'sarracenia-leucophylla-var-leucophylla',
        name: 'S. leucophylla var. leucophylla',
        commonName: 'White Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_leucophylla.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1349.jpeg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2010 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323982&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-leucophylla-var-alba',
        name: 'S. leucophylla var. alba',
        commonName: "'White-topped' Pitcher Plant",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_leucophylla.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_06200.jpg',
          blurhash: 'LpGu%XkDM_of%%WYWAogXVWXt7og',
          photographer: '2019 Alan Cressler',
          sourceUrl: 'https://www.flickr.com/photos/alan_cressler/48810990807/',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-leucophylla-f-viridescens',
        name: 'S. leucophylla f. viridescens',
        commonName: "Sarracenia leucophylla Green",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_leucophylla.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://live.staticflickr.com/65535/53609355769_f71a8622bb_5k.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2023 Mike Wang',
          sourceUrl: 'https://sarracenia.proboards.com/thread/5981/leucophylla-viridescens-baldwin-al',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      }
    ]
  },
  {
    id: 'sarracenia-minor',
    name: 'Sarracenia minor',
    commonName: 'Hooded Pitcher Plant',
    color: SPECIES_COLORS.minor,
    visible: true,
    // Add layer properties for the species itself
    type: 'fill',
    dataUrl: '/data/Sarracenia_minor.geojson', // All S. rubra combined
    paint: {
      'fill-color': SPECIES_COLORS.minor,
      'fill-opacity': 0.4,
      'fill-outline-color': '#000'
    },
    info: {
      imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/sw/sw_07350.jpg',
      blurhash: 'L8HnfqD+ORIn}[xZ-.jE01x@MyRk',
      photographer: '2014 Alan Cressler',
      sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia+minor&limit=1&offset=0&taxonid=4613',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    },
    children: [
      {
        id: 'sarracenia-minor-var-minor',
        name: 'S. minor var. minor',
        commonName: 'Hooded Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_minor.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.minor,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3055.jpeg',
          blurhash: 'LaF#=[xFX5jb~SRmNaWE-VRlRloM',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750774&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-minor-var-minor-f-viridescens',
        name: 'S. minor var. minor f. viridescens',
        commonName: "Sarracenia minor antho-free",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_minor.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://farm4.staticflickr.com/3807/8918168677_a2f602f1dd_b.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2013 The Pitcher Plant Project',
          sourceUrl: 'https://thepitcherplantproject.com/archive/2013/06/sarracenia-minor-anthocyanin-free/',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-minor-var-okefenokeensis',
        name: 'S. minor var. okefenokeensis',
        commonName: "Hooded Pitcher Plant",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_minor.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.minor,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://live.staticflickr.com/2260/2433216132_370d70b2bf_3k.jpg',
          blurhash: 'L9CPX.NN5a??x{tk.6aSA3%L%eIw',
          photographer: '2008 Alan Cressler',
          sourceUrl: 'https://www.flickr.com/photos/alan_cressler/2433216132/',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      }
    ]
  },
  {
    id: 'sarracenia-oreophila',
    name: 'Sarracenia oreophila',
    commonName: 'Green Pitcher Plant',
    color: SPECIES_COLORS.oreophila,
    visible: true,
    // Add layer properties for the species itself
    type: 'fill',
    dataUrl: '/data/Sarracenia_oreophila.geojson', // All S. rubra combined
    paint: {
      'fill-color': SPECIES_COLORS.oreophila,
      'fill-opacity': 0.4,
      'fill-outline-color': '#000'
    },
    info: {
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2515.jpeg',
      blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
      photographer: '2009 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287779&one=T',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    },
    children: [
      {
        id: 'sarracenia-oreophila-var-oreophila',
        name: 'S. oreophila var. oreophila',
        commonName: 'Green Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_oreophila.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.oreophila,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2537.jpeg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287757&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-oreophila-var-ornata',
        name: 'S. oreophila var. ornata',
        commonName: 'Green Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_oreophila.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.oreophila,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://c1.staticflickr.com/1/970/41994212812_2cbfb099f9_b.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: 'needs attribution',
          sourceUrl: 'https://cpphotofinder.com/sarracenia-oreophila-var-ornata-5134.html',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      }
    ]
  },
  {
    id: 'sarracenia-psittacina',
    name: 'Sarracenia psittacina',
    commonName: 'Parrot Pitcher Plant',
    color: SPECIES_COLORS.psittacina,
    visible: true,
    // Add layer properties for the species itself
    type: 'fill',
    dataUrl: '/data/Sarracenia_psittacina.geojson', // All S. rubra combined
    paint: {
      'fill-color': SPECIES_COLORS.psittacina,
      'fill-opacity': 0.4,
      'fill-outline-color': '#000'
    },
    info: {
      imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/userimg/userimg_263222.jpg',
      blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
      photographer: 'Scott Ward',
      sourceUrl: 'https://fsus.ncbg.unc.edu/cust/2024/main.php?pg=show-taxon.php&plantname=sarracenia+psitt',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    },
    children: [
      {
        id: 'sarracenia-psittacina-var-psittacina',
        name: 'S. psittacina var. psittacina',
        commonName: 'Parrot Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_psittacina.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.psittacina,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1275.jpeg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2010 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323908&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-psittacina-var-psittacina-f-viridescens',
        name: 'S. psittacina var. psittacina f. viridescens',
        commonName: 'Parrot Pitcher Plant antho-free',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_psittacina.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.psittacina,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_09583.jpg',
          blurhash: 'LCCYp-9cEgbY~SIrV@t6B6nl$gW-',
          photographer: 'needs attribution',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon-detail.php&taxonid=65715',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-psittacina-var-okefenokeensis',
        name: 'S. psittacina var. okefenokeensis',
        commonName: 'Parrot Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_psittacina.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.psittacina,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_09583.jpg',
          blurhash: 'LCCYp-9cEgbY~SIrV@t6B6nl$gW-',
          photographer: 'needs attribution',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon-detail.php&taxonid=65715',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-psittacina-var-okefenokeensis-f-luteoviridis',
        name: 'S. psittacina var. okefenokeensis f. luteoviridis',
        commonName: 'Parrot Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_psittacina.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.psittacina,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_09583.jpg',
          blurhash: 'LCCYp-9cEgbY~SIrV@t6B6nl$gW-',
          photographer: 'needs attribution',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon-detail.php&taxonid=65715',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      }
    ]
  },
  {
    id: 'sarracenia-purpurea',
    name: 'Sarracenia purpurea',
    commonName: 'Purple Pitcher Plant',
    color: SPECIES_COLORS.purpurea,
    visible: true,
    // Add layer properties for the species itself
    type: 'fill',
    dataUrl: '/data/Sarracenia_purpurea.geojson', // All S. rubra combined
    paint: {
      'fill-color': SPECIES_COLORS.purpurea,
      'fill-opacity': 0.4,
      'fill-outline-color': '#000'
    },
    info: {
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/6666_6666/0514/0166.jpeg',
      blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
      photographer: '2014 California Academy of Sciences',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=604074&one=T',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    },
    children: [
      {
        id: 'sarracenia-pupurea-ssp-pupurea',
        name: 'S. pupurea ssp. pupurea',
        commonName: 'Purple Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.purpurea,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2697.jpeg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287958&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        },
      },
      {
        id: 'sarracenia-pupurea-ssp-pupurea-f-heterophylla',
        name: 'S. pupurea ssp. pupurea f. heterophylla',
        commonName: "Purple Pitcher Plant 'Antho-free'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.purpurea,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://farm8.staticflickr.com/7404/9442429926_b1235a7664.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2013 Mike Wang',
          sourceUrl: 'https://sarracenia.proboards.com/thread/826/purpurea-ssp-venosa-var-pallidiflora',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        },
      },
      {
        id: 'sarracenia-pupurea-ssp-venosa-var-venosa',
        name: 'S. pupurea ssp. venosa var. venosa',
        commonName: 'Purple Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.purpurea,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_04648.jpg',
          blurhash: 'LAEfDV?FR.xF}s9^SwnQX+OTwNaM',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/cust/2024/main.php?pg=show-taxon.php&&plantname=sarracenia+purpurea&limit=1&offset=2&taxonid=4619',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        },
      },
      {
        id: 'sarracenia-pupurea-ssp-venosa-var-venosa-f-pallidiflora',
        name: 'S. pupurea ssp. venosa var. venosa f. pallidiflora',
        commonName: "Sarracenia Purpurea ssp. Venosa 'Antho-free'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.purpurea,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://www.sarracenia.com/photos/sarracenia/sarrapurp2003.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2018 Barry Rice',
          sourceUrl: 'https://www.sarracenia.com/faq/faq5538.html',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        },
      },
      {
        id: 'sarracenia-pupurea-ssp-venosa-var-burkii',
        name: 'S. pupurea ssp. venosa var. burkii',
        commonName: "Burk's Pitcher Plant",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.purpurea,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/userimg/userimg_301712.jpg',
          blurhash: 'L8GR|WvB03~kJ|rvnSIXAV%K,IR:',
          photographer: 'Kyle Filicky',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&plantname=sarracenia+rosea',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        },
      },
      {
        id: 'sarracenia-pupurea-ssp-venosa-var-burkii-f-luteola',
        name: 'S. pupurea ssp. venosa var. burkii f. luteola',
        commonName: "Burk's Pitcher Plant 'Antho-free'",
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.purpurea,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://www.sarracenia.com/photos/sarracenia/sarrarose2001.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
          photographer: '2018 Barry Rice',
          sourceUrl: 'https://www.sarracenia.com/faq/faq5542.html',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        },
      },
      {
        id: 'sarracenia-pupurea-ssp-venosa-var-montana',
        name: 'S. pupurea ssp. venosa var. montana',
        commonName: 'Mountain Purple Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.purpurea,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_07864.jpg',
          blurhash: 'L6EfDWOoKv=M.Ns;pU$RAHt5~8M|',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/show-taxon-detail.php?taxonid=4617',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        },
      }
    ]
  },
  {
    id: 'sarracenia-rubra',
    name: 'Sarracenia rubra',
    commonName: 'Sweet Pitcher Plant',
    color: SPECIES_COLORS.rubra,
    visible: true,
    // Add layer properties for the species itself
    type: 'fill',
    dataUrl: '/data/Sarracenia_rubra_viatorum.geojson', // All S. rubra combined
    paint: {
      'fill-color': SPECIES_COLORS.rubra,
      'fill-opacity': 0.4,
      'fill-outline-color': '#000'
    },
    info: {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sarracenia_rubra_subsp._jonesii.jpg/800px-Sarracenia_rubra_subsp._jonesii.jpg',
      blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    },
    children: [
      {
        id: 'sarracenia-rubra-var-gulfensis',
        name: 'S. rubra var. gulfensis',
        commonName: 'Gulf Coast Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_rubra_subsp_gulfensis.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://example.com/gulfensis.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F', // Replace with actual image
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        }
      },
      {
        id: 'sarracenia-rubra-var-viatorum',
        name: 'S.rubra var. viatorum',
        commonName: 'Roadside Pitcher Plant',
        visible: false,
        type: 'fill',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        paint: {
          'fill-color': SPECIES_COLORS.rubra,
          'fill-opacity': 0.6,
          'fill-outline-color': '#000'
        },
        info: {
          imageUrl: 'https://example.com/viatorum.jpg',
          blurhash: 'L2D,0l~m0ntT}dM+~S9502MP$%%F', // Replace with actual image
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        }
      }
    ]
  }
];

// Flatten to get ALL layers (including parent species)
export const getAllLayers = () => {
  const allLayers = [];

  layerGroups.forEach(group => {
    // Add parent species layer if it has layer properties
    if (group.type && group.dataUrl) {
      allLayers.push({
        id: group.id,
        name: group.name,
        commonName: group.commonName,
        visible: group.visible,
        type: group.type,
        dataUrl: group.dataUrl,
        paint: group.paint,
        info: group.info
      });
    }

    // Add all child layers
    allLayers.push(...group.children);
  });

  return allLayers;
};