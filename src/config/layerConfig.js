import { createSpeciesGroup, createVarietyLayer, createInfo } from './layerHelpers';

// Define colors for each species
const SPECIES_COLORS = {
  red: '#E63946',
  lightblue: '#00B4D8',
  yellow: '#F1C40F',
  purple: '#8E44AD',
  pink: '#FF6F91',
  orange: '#F39C12',
  green: "#2ECC71",
  darkblue: '#3F51B5',
};

// Default source citation
const DEFAULT_SOURCE = "McPherson, S., & Schnell, D. E. (2011). Sarraceniaceae of North America. Redfern Natural History Productions. ISBN 978-0-9558918-6-1.";

// Organized layer configuration with hierarchy
export const layerGroups = [
  // SARRACENIA ALATA
  createSpeciesGroup({
    id: 'sarracenia-alata',
    name: 'Sarracenia alata',
    commonName: 'Pale Pitcher Plant',
    color: SPECIES_COLORS.red,
    dataUrl: '/data/Sarracenia_alata.geojson',
    info: createInfo({
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2343.jpeg',
      photographer: '2009 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287585&one=T',
      distribution: `Sarracenia alata exhibits a two-zoned distribution. The eastern range extends from western Alabama, across coastal Mississippi, and into the far eastern parishes of Louisiana. The western range occurs in western Louisiana and extends into the Big Thicket region of eastern Texas, where populations are scattered and less common. A 225 km gap in central Louisiana separates these eastern and western populations, creating reproductive isolation between the two zones.

      In the western part of the range, certain populations produce smaller, stout, and densely pubescent pitchers, commonly known in cultivation as "stocky" or "short" forms. It is uncertain whether these plants represent environmental adaptations (ecophenes) or a stable morphological variant. Additionally, some western populations, particularly in Angelina, Newton, and Jasper counties (Texas) and Natchitoches and Beauregard Parishes (Louisiana), exhibit faint areoles (light patches) near the tops of their pitchers, a feature less typical of the species elsewhere.`,
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered',
      source: DEFAULT_SOURCE
    }),
    children: [
      createVarietyLayer({
        id: 'sarracenia-alata-var-alata',
        name: 'S. alata var. alata',
        commonName: 'Pale Pitcher Plant',
        dataUrl: '/data/Sarracenia_alata_heatmap.geojson',
        color: SPECIES_COLORS.lightblue,
        paintType: 'heatmap',
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2304.jpeg',
          blurhash: 'LMIq@5s,$~nl~8RnRmf*IvR+kBW;',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287546&one=T',
          distribution: `Sarracenia alata var. alata is the predominant form of the species across its range and remains common even in disturbed habitats, including highway ditches along Interstate 10 where water accumulates.
          <br/>
          <br/>
          Although the species has been lost from many historical sites due to habitat destruction, large, healthy populations persist in several protected areas where prescribed burning maintains suitable conditions. These include the De Soto National Forest and Sandhill Crane National Wildlife Refuge in Mississippi, as well as the Big Thicket region of Texas. Because of these strongholds, the overall outlook for the species' survival in the wild remains relatively positive.`,
          habitat: 'Seepage bogs, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-var-atrorubra',
        name: 'S.alata var. atrorubra',
        commonName: 'looking for common name',
        dataUrl: '/data/Sarracenia_alata_atrorubra_heatmap.geojson',
        color: SPECIES_COLORS.yellow,
        paintType: 'heatmap',
        info: createInfo({
          imageUrl: 'https://www.sarracenia.com/photos/sarracenia/sarraalata016.jpg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://www.sarracenia.com/faq/faq5524.html',
          distribution: "Sarracenia atrorubra populations are widespread but localized in Mississippi and eastern Louisiana. Their presence in the western part of the species' range remains uncertain. Stable, extensive populations continue to thrive in well-protected sites such as the De Soto National Forest and the Sandhill Crane National Wildlife Refuge in Mississippi.",
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-var-cuprea',
        name: 'S.alata var. cuprea',
        commonName: "Sarracenia alata 'copper top'",
        dataUrl: '/data/Sarracenia_alata_atrorubra_heatmap.geojson',
        color: SPECIES_COLORS.purple,
        info: createInfo({
          imageUrl: '/images/3127_McPherson_alata_cuprea.jpeg',
          photographer: '2011 McPherson',
          sourceUrl: 'https://www.aipcnet.it/wp-content/uploads/2020/12/New_species_2011.pdf',
          distribution: `Sarracenia alata var. cuprea occurs in scattered, localized populations in Mississippi and eastern Louisiana, where it is considered extremely rare. In these regions, it often grows alongside S. alata var. ornata and the two hybridize frequently. It may also hybridize with var. atrorubra and var. nigropurpurea.
          <br />
          <br />
          Several populations of S. alata var. cuprea are found within protected and actively managed habitats, including the De Soto National Forest and the Sandhill Crane National Wildlife Refuge in Mississippi, where prescribed fire regimes help maintain suitable bog conditions.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-var-nigropurpurea',
        name: 'S.alata var. nigropurpurea',
        commonName: "Sarracenia alata 'black'",
        dataUrl: '/data/Sarracenia_alata_atrorubra_heatmap.geojson',
        color: SPECIES_COLORS.pink,
        info: createInfo({
          imageUrl: 'https://files.ekmcdn.com/hampshirecarni/images/sa007-sarracenia-alata-purple-tube-3209-p.jpeg?v=A0A524E4-EFA4-4219-B0A8-B7DAE5F14939',
          photographer: 'need to source this',
          sourceUrl: 'https://www.hantsflytrap.com/sa007-sarracenia-alata-purple-tube-3209-p.asp',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-var-ornata',
        name: 'S.alata var. ornata',
        commonName: "Sarracenia alata 'heavy veined'",
        dataUrl: '/data/Sarracenia_alata_atrorubra_heatmap.geojson',
        color: SPECIES_COLORS.orange,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0406/1349.jpeg',
          photographer: '2006 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=187387&one=T',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-var-rubrioperculata',
        name: 'S.alata var. rubrioperculata',
        commonName: "Sarracenia alata 'cut throat'",
        dataUrl: '/data/Sarracenia_alata_atrorubra_heatmap.geojson',
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2320.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287562&one=T',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-f-viridescens',
        name: 'S.alata var. viridescens',
        commonName: "Sarracenia alata 'antho-free'",
        dataUrl: '/data/Sarracenia_alata_atrorubra_heatmap.geojson',
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: '/images/McPherson_alata_f_viridescens.jpg',
          photographer: '2004 McPherson',
          sourceUrl: 'https://cpn.carnivorousplants.org/articles/CPNv33n3p76.pdf',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        })
      })
    ]
  }),

  // SARRACENIA FLAVA
  createSpeciesGroup({
    id: 'sarracenia-flava',
    name: 'Sarracenia flava',
    commonName: 'Yellow Pitcher Plant',
    color: SPECIES_COLORS.lightblue,
    dataUrl: '/data/Sarracenia_flava.geojson',
    info: createInfo({
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3070.jpeg',
      blurhash: 'LMIq@5s,$~nl~8RnRmf*IvR+kBW;',
      photographer: '2016 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750789&one=T',
      distribution: 'Found in the coastal plains of the southeastern United States, from Virginia south to Florida and west to Alabama. Primarily inhabits wet pine savannas and bogs.',
      habitat: 'Wet pine savannas, bogs',
      conservationStatus: 'Vulnerable'
    }),
    children: [
      createVarietyLayer({
        id: 'sarracenia-flava-var-flava',
        name: 'S.flava var. flava',
        commonName: "Sarracenia flava 'typical'",
        dataUrl: '/data/Sarracenia_flava.geojson',
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sarracenia_flava_-_Sardis_Lake%2C_Mississippi.jpg/800px-Sarracenia_flava_-_Sardis_Lake%2C_Mississippi.jpg',
          photographer: '',
          sourceUrl: '',
          distribution: 'The typical variety, widely distributed across the southeastern coastal plain. Most common in North Carolina, South Carolina, Georgia, and northern Florida.',
          habitat: 'Pine flatwoods, wet savannas',
          conservationStatus: 'Vulnerable'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-atropurpurea',
        name: 'S. flava var. atropurpurea',
        commonName: "Sarracenia flava 'all red'",
        dataUrl: '/data/Sarracenia_flava_var_atropurpurea.geojson',
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://live.staticflickr.com/65535/50098846638_ceaa7169b6_3k.jpg',
          blurhash: 'LHI}zAJ%pVRl?:RBR-Rnk*ocoJXQ',
          photographer: '2020 Alan Cressler',
          sourceUrl: 'https://www.flickr.com/photos/alan_cressler/50098846638/in/photostream/',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-cuprea',
        name: 'S. flava var. cuprea',
        commonName: "Sarracenia flava 'copper top'",
        dataUrl: '/data/Sarracenia_flava_var_atropurpurea.geojson',
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3127.jpeg',
          blurhash: 'LAFOSLJA5qXO}nNxJ8$$5W9weo=c',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750845&one=T',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-maxima',
        name: 'S. flava var. maxima',
        commonName: "Sarracenia flava 'all green'",
        dataUrl: '/data/Sarracenia_flava_var_atropurpurea.geojson',
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3061.jpeg',
          blurhash: 'LAFOSLJA5qXO}nNxJ8$$5W9weo=c',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750780&one=T',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-ornata',
        name: 'S. flava var. ornata',
        commonName: "Sarracenia flava 'heavy veined'",
        dataUrl: '/data/Sarracenia_flava_var_atropurpurea.geojson',
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3141.jpeg',
          blurhash: 'LQJ@Waxs-,kU~6xFxpR+R.ocsoWD',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750859&one=T',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-rubricorpora',
        name: 'S. flava var. rubricorpora',
        commonName: 'Red-Throat Pitcher Plant',
        dataUrl: '/data/Sarracenia_flava_var_rubricorpora.geojson',
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1319.jpeg',
          blurhash: 'LFD+SJ%LS0Sc_4xbNGIWcaxuNGRj',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323952&one=T',
          distribution: 'Found primarily in the Florida Panhandle and southern Georgia. Distinguished by its red throat coloration.',
          habitat: 'Wet pine savannas, seepage bogs',
          conservationStatus: 'Vulnerable'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-rugelii',
        name: 'S. flava var. rugelii',
        commonName: "Rugel's Pitcher Plant",
        dataUrl: '/data/Sarracenia_flava_var_rugelii.geojson',
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1329.jpeg',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323962&one=T',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-f-viridescens',
        name: 'S. flava f. viridescens',
        commonName: "Sarracenia flava 'anthocyanin-free'",
        dataUrl: '/data/Sarracenia_flava_var_rugelii.geojson',
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: '/images/McPherson_flava_f_viridescens.jpg',
          photographer: '2011 McPherson',
          sourceUrl: 'https://www.aipcnet.it/wp-content/uploads/2020/12/New_species_2011.pdf',
          distribution: 'Endemic to a limited area in the Florida Panhandle and adjacent areas of southern Alabama and Georgia. Named after Ferdinand Rugel who collected specimens in the 1840s.',
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered'
        })
      })
    ]
  }),

  // SARRACENIA LEUCOPHYLLA
  createSpeciesGroup({
    id: 'sarracenia-leucophylla',
    name: 'Sarracenia leucophylla',
    commonName: 'White Pitcher Plant',
    color: SPECIES_COLORS.yellow,
    dataUrl: '/data/Sarracenia_leucophylla.geojson',
    info: createInfo({
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1342.jpeg',
      blurhash: 'L8HnfqD+ORIn}[xZ-.jE01x@MyRk',
      photographer: '2010 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323975&one=T',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    }),
    children: [
      createVarietyLayer({
        id: 'sarracenia-leucophylla-var-leucophylla',
        name: 'S. leucophylla var. leucophylla',
        commonName: 'White Pitcher Plant',
        dataUrl: '/data/Sarracenia_leucophylla.geojson',
        color: SPECIES_COLORS.yellow,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1349.jpeg',
          photographer: '2010 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323982&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-leucophylla-var-alba',
        name: 'S. leucophylla var. alba',
        commonName: "'White-topped' Pitcher Plant",
        dataUrl: '/data/Sarracenia_leucophylla.geojson',
        color: SPECIES_COLORS.yellow,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_06200.jpg',
          blurhash: 'LpGu%XkDM_of%%WYWAogXVWXt7og',
          photographer: '2019 Alan Cressler',
          sourceUrl: 'https://www.flickr.com/photos/alan_cressler/48810990807/',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-leucophylla-f-viridescens',
        name: 'S. leucophylla f. viridescens',
        commonName: "Sarracenia leucophylla Green",
        dataUrl: '/data/Sarracenia_leucophylla.geojson',
        color: SPECIES_COLORS.yellow,
        info: createInfo({
          imageUrl: 'https://live.staticflickr.com/65535/53609355769_f71a8622bb_5k.jpg',
          photographer: '2023 Mike Wang',
          sourceUrl: 'https://sarracenia.proboards.com/thread/5981/leucophylla-viridescens-baldwin-al',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      })
    ]
  }),

  // SARRACENIA MINOR
  createSpeciesGroup({
    id: 'sarracenia-minor',
    name: 'Sarracenia minor',
    commonName: 'Hooded Pitcher Plant',
    color: SPECIES_COLORS.purple,
    dataUrl: '/data/Sarracenia_minor.geojson',
    info: createInfo({
      imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/sw/sw_07350.jpg',
      blurhash: 'L8HnfqD+ORIn}[xZ-.jE01x@MyRk',
      photographer: '2014 Alan Cressler',
      sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia+minor&limit=1&offset=0&taxonid=4613',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    }),
    children: [
      createVarietyLayer({
        id: 'sarracenia-minor-var-minor',
        name: 'S. minor var. minor',
        commonName: 'Hooded Pitcher Plant',
        dataUrl: '/data/Sarracenia_minor.geojson',
        color: SPECIES_COLORS.purple,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3055.jpeg',
          blurhash: 'LaF#=[xFX5jb~SRmNaWE-VRlRloM',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750774&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-minor-var-minor-f-viridescens',
        name: 'S. minor var. minor f. viridescens',
        commonName: "Sarracenia minor antho-free",
        dataUrl: '/data/Sarracenia_minor.geojson',
        color: SPECIES_COLORS.purple,
        info: createInfo({
          imageUrl: 'https://farm4.staticflickr.com/3807/8918168677_a2f602f1dd_b.jpg',
          photographer: '2013 The Pitcher Plant Project',
          sourceUrl: 'https://thepitcherplantproject.com/archive/2013/06/sarracenia-minor-anthocyanin-free/',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-minor-var-okefenokeensis',
        name: 'S. minor var. okefenokeensis',
        commonName: "Hooded Pitcher Plant",
        dataUrl: '/data/Sarracenia_minor.geojson',
        color: SPECIES_COLORS.purple,
        info: createInfo({
          imageUrl: 'https://live.staticflickr.com/2260/2433216132_370d70b2bf_3k.jpg',
          blurhash: 'L9CPX.NN5a??x{tk.6aSA3%L%eIw',
          photographer: '2008 Alan Cressler',
          sourceUrl: 'https://www.flickr.com/photos/alan_cressler/2433216132/',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      })
    ]
  }),

  // SARRACENIA OREOPHILA
  createSpeciesGroup({
    id: 'sarracenia-oreophila',
    name: 'Sarracenia oreophila',
    commonName: 'Green Pitcher Plant',
    color: SPECIES_COLORS.pink,
    dataUrl: '/data/Sarracenia_oreophila.geojson',
    info: createInfo({
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2515.jpeg',
      photographer: '2009 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287779&one=T',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    }),
    children: [
      createVarietyLayer({
        id: 'sarracenia-oreophila-var-oreophila',
        name: 'S. oreophila var. oreophila',
        commonName: 'Green Pitcher Plant',
        dataUrl: '/data/Sarracenia_oreophila.geojson',
        color: SPECIES_COLORS.pink,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2537.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287757&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-oreophila-var-ornata',
        name: 'S. oreophila var. ornata',
        commonName: 'Green Pitcher Plant',
        dataUrl: '/data/Sarracenia_oreophila.geojson',
        color: SPECIES_COLORS.pink,
        info: createInfo({
          imageUrl: 'https://c1.staticflickr.com/1/970/41994212812_2cbfb099f9_b.jpg',
          photographer: 'needs attribution',
          sourceUrl: 'https://cpphotofinder.com/sarracenia-oreophila-var-ornata-5134.html',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      })
    ]
  }),

  // SARRACENIA PSITTACINA
  createSpeciesGroup({
    id: 'sarracenia-psittacina',
    name: 'Sarracenia psittacina',
    commonName: 'Parrot Pitcher Plant',
    color: SPECIES_COLORS.orange,
    dataUrl: '/data/Sarracenia_psittacina.geojson',
    info: createInfo({
      imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/userimg/userimg_263222.jpg',
      photographer: 'Scott Ward',
      sourceUrl: 'https://fsus.ncbg.unc.edu/cust/2024/main.php?pg=show-taxon.php&plantname=sarracenia+psitt',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    }),
    children: [
      createVarietyLayer({
        id: 'sarracenia-psittacina-var-psittacina',
        name: 'S. psittacina var. psittacina',
        commonName: 'Parrot Pitcher Plant',
        dataUrl: '/data/Sarracenia_psittacina.geojson',
        color: SPECIES_COLORS.orange,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1275.jpeg',
          photographer: '2010 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323908&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-psittacina-var-psittacina-f-viridescens',
        name: 'S. psittacina var. psittacina f. viridescens',
        commonName: 'Parrot Pitcher Plant antho-free',
        dataUrl: '/data/Sarracenia_psittacina.geojson',
        color: SPECIES_COLORS.orange,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_09583.jpg',
          blurhash: 'LCCYp-9cEgbY~SIrV@t6B6nl$gW-',
          photographer: 'needs attribution',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon-detail.php&taxonid=65715',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-psittacina-var-okefenokeensis',
        name: 'S. psittacina var. okefenokeensis',
        commonName: 'Parrot Pitcher Plant',
        dataUrl: '/data/Sarracenia_psittacina.geojson',
        color: SPECIES_COLORS.orange,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_09583.jpg',
          blurhash: 'LCCYp-9cEgbY~SIrV@t6B6nl$gW-',
          photographer: 'needs attribution',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon-detail.php&taxonid=65715',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-psittacina-var-okefenokeensis-f-luteoviridis',
        name: 'S. psittacina var. okefenokeensis f. luteoviridis',
        commonName: 'Parrot Pitcher Plant',
        dataUrl: '/data/Sarracenia_psittacina.geojson',
        color: SPECIES_COLORS.orange,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_09583.jpg',
          blurhash: 'LCCYp-9cEgbY~SIrV@t6B6nl$gW-',
          photographer: 'needs attribution',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon-detail.php&taxonid=65715',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      })
    ]
  }),

  // SARRACENIA PURPUREA
  createSpeciesGroup({
    id: 'sarracenia-purpurea',
    name: 'Sarracenia purpurea',
    commonName: 'Purple Pitcher Plant',
    color: SPECIES_COLORS.green,
    dataUrl: '/data/Sarracenia_purpurea.geojson',
    info: createInfo({
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/6666_6666/0514/0166.jpeg',
      photographer: '2014 California Academy of Sciences',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=604074&one=T',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    }),
    children: [
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-pupurea',
        name: 'S. pupurea ssp. pupurea',
        commonName: 'Purple Pitcher Plant',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2697.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287958&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-pupurea-f-heterophylla',
        name: 'S. pupurea ssp. pupurea f. heterophylla',
        commonName: "Purple Pitcher Plant 'Antho-free'",
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://farm8.staticflickr.com/7404/9442429926_b1235a7664.jpg',
          photographer: '2013 Mike Wang',
          sourceUrl: 'https://sarracenia.proboards.com/thread/826/purpurea-ssp-venosa-var-pallidiflora',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-venosa',
        name: 'S. pupurea ssp. venosa var. venosa',
        commonName: 'Purple Pitcher Plant',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_04648.jpg',
          blurhash: 'LAEfDV?FR.xF}s9^SwnQX+OTwNaM',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/cust/2024/main.php?pg=show-taxon.php&&plantname=sarracenia+purpurea&limit=1&offset=2&taxonid=4619',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-venosa-f-pallidiflora',
        name: 'S. pupurea ssp. venosa var. venosa f. pallidiflora',
        commonName: "Sarracenia Purpurea ssp. Venosa 'Antho-free'",
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://www.sarracenia.com/photos/sarracenia/sarrapurp2003.jpg',
          photographer: '2018 Barry Rice',
          sourceUrl: 'https://www.sarracenia.com/faq/faq5538.html',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-burkii',
        name: 'S. pupurea ssp. venosa var. burkii',
        commonName: "Burk's Pitcher Plant",
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/userimg/userimg_301712.jpg',
          blurhash: 'L8GR|WvB03~kJ|rvnSIXAV%K,IR:',
          photographer: 'Kyle Filicky',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&plantname=sarracenia+rosea',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-burkii-f-luteola',
        name: 'S. pupurea ssp. venosa var. burkii f. luteola',
        commonName: "Burk's Pitcher Plant 'Antho-free'",
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://www.sarracenia.com/photos/sarracenia/sarrarose2001.jpg',
          photographer: '2018 Barry Rice',
          sourceUrl: 'https://www.sarracenia.com/faq/faq5542.html',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-montana',
        name: 'S. pupurea ssp. venosa var. montana',
        commonName: 'Mountain Purple Pitcher Plant',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_07864.jpg',
          blurhash: 'L6EfDWOoKv=M.Ns;pU$RAHt5~8M|',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/show-taxon-detail.php?taxonid=4617',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      })
    ]
  }),

  // SARRACENIA RUBRA
  createSpeciesGroup({
    id: 'sarracenia-rubra',
    name: 'Sarracenia rubra',
    commonName: 'Sweet Pitcher Plant',
    color: SPECIES_COLORS.darkblue,
    dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
    info: createInfo({
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2576.jpeg',
      photographer: '2009 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287818&one=T',
      distribution: 'Native to the southeastern United States. Found in scattered populations from North Carolina to the Florida Panhandle and Mississippi. Prefers acidic, nutrient-poor wetlands.',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    }),
    children: [
      createVarietyLayer({
        id: 'sarracenia-rubra-var-rubra',
        name: 'S.rubra var. rubra',
        commonName: 'Sweet Pitcher Plant',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2576.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287818&one=T',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-alabamensis',
        name: 'S. rubra ssp. alabamensis',
        commonName: 'Alabama Pitcher Plant',
        dataUrl: '/data/Sarracenia_rubra_subsp_gulfensis.geojson',
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_03759.jpg',
          blurhash: 'L2E{8Ukz0q}Y01AH0,MN0p?C^@G8',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia&limit=1&offset=1&taxonid=4607',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-gulfensis',
        name: 'S. rubra ssp. gulfensis',
        commonName: 'Gulf Coast Pitcher Plant',
        dataUrl: '/data/Sarracenia_rubra_subsp_gulfensis.geojson',
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2573.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287815&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-gulfensis-f-luteoviridis',
        name: 'S. rubra ssp. gulfensis f. luteoviridis',
        commonName: 'Gulf Coast Pitcher Plant',
        dataUrl: '/data/Sarracenia_rubra_subsp_gulfensis.geojson',
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2573.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287815&one=T',
          distribution: 'Limited to coastal areas of Alabama, Mississippi, and the western Florida Panhandle. One of the rarest Sarracenia varieties.',
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-jonesii',
        name: 'S.rubra ssp. jonesii',
        commonName: 'Mountain Sweer Pitcher Plant',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_05565.jpg',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia&limit=1&offset=5&taxonid=4611',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-jonesii-f-viridescens',
        name: 'S.rubra ssp. jonesii f. viridescens',
        commonName: "Mountain Sweer Pitcher Plant 'Antho-free'",
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_05565.jpg',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia&limit=1&offset=5&taxonid=4611',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-wherryi',
        name: 'S.rubra ssp. wherryi',
        commonName: "not sure what to call this",
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_07077.jpg',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia&limit=1&offset=2&taxonid=4608',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-var-viatorum',
        name: 'S.rubra var. viatorum',
        commonName: 'Roadside Pitcher Plant',
        dataUrl: '/data/Sarracenia_rubra_viatorum.geojson',
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2571.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287813&one=T',
          distribution: 'Endemic to a small area in southern Mississippi and Louisiana. Discovered relatively recently and remains poorly studied.',
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered'
        })
      })
    ]
  })
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
