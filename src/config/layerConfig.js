import { createSpeciesGroup, createVarietyLayer, createInfo, createDistributionSource } from './layerHelpers';

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
  deepteal: '#00695C',
  magenta: '#E040FB'
};

// Default source citation
const DEFAULT_SOURCE = "McPherson, S., & Schnell, D. E. (2011). Sarraceniaceae of North America. Redfern Natural History Productions. ISBN 978-0-9558918-6-1.";

const SARRACENIA_VIEWING_LOCATIONS = "/data/Sarracenia_viewing_locations.geojson";

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
    sources: [
      createDistributionSource({
        id: 'sarracenia-alata-source-general',
        name: 'general',
        year: '',
        dataUrl: '/data/Sarracenia_alata.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'standard'
      }),
      createDistributionSource({
        id: 'sarracenia-alata-source-mcpherson',
        name: 'McPherson & Schnell',
        year: '2011',
        dataUrl: '/data/S_alata_distribution_McPhersonSchnell2011.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'presence'
      }),
      createDistributionSource({
        id: 'sarracenia-alata-source-heatmap',
        name: 'GBIF Heatmap',
        year: '2024',
        dataUrl: '/data/Sarracenia_alata_heatmap.geojson',
        citation: 'Aggregated occurrence data from field surveys',
        type: 'fill',
        paintType: 'heatmap'
      })
    ],
    children: [
      createVarietyLayer({
        id: 'sarracenia-alata-var-alata',
        name: 'S. alata var. alata',
        commonName: 'Pale Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.lightblue,
        filter: { field: 'unique_id', values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
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
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.yellow,
        filter: { field: 'unique_id', values: [0, 1, 2, 3, 4, 5] },
        paintType: 'heatmap',
        info: createInfo({
          imageUrl: 'https://www.sarracenia.com/photos/sarracenia/sarraalata016.jpg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://www.sarracenia.com/faq/faq5524.html',
          distribution: `Sarracenia alata var. atrorubra populations are widespread but localized in Mississippi and eastern Louisiana. Their presence in the western part of the species' range remains uncertain.
          This variety often grows with and hybridizes with S. alata var. ornata and var. nigropurpurea. 
          Stable, extensive populations continue to thrive in well-protected sites such as the De Soto National Forest and the Sandhill Crane National Wildlife Refuge in Mississippi.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-var-cuprea',
        name: 'S.alata var. cuprea',
        commonName: "Sarracenia alata 'copper top'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.purple,
        filter: { field: 'unique_id', values: [0, 1, 2, 3, 4, 5] },
        info: createInfo({
          imageUrl: '/images/3127_McPherson_alata_cuprea.jpeg',
          photographer: '2011 McPherson',
          sourceUrl: 'https://www.aipcnet.it/wp-content/uploads/2020/12/New_species_2011.pdf',
          distribution: `Sarracenia alata var. cuprea is extremely rare, found only in scattered spots across Mississippi and eastern Louisiana. Their presence in the western part of the species' range remains uncertain. 
          It often grows with S. alata var. ornata and sometimes hybridizes with var. atrorubra and var. nigropurpurea. 
          Stable populations survive in protected areas like De Soto National Forest and the Sandhill Crane National Wildlife Refuge, where prescribed burns help maintain its bog habitat.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-var-nigropurpurea',
        name: 'S.alata var. nigropurpurea',
        commonName: "Sarracenia alata 'black'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.pink,
        filter: { field: 'unique_id', values: [0, 1, 2, 3, 4, 5] },
        info: createInfo({
          imageUrl: 'https://files.ekmcdn.com/hampshirecarni/images/sa007-sarracenia-alata-purple-tube-3209-p.jpeg?v=A0A524E4-EFA4-4219-B0A8-B7DAE5F14939',
          photographer: 'need to source this',
          sourceUrl: 'https://www.hantsflytrap.com/sa007-sarracenia-alata-purple-tube-3209-p.asp',
          distribution: `Small, scattered populations of Sarracenia alata var. nigropurpurea occur in Mississippi and eastern Louisiana, where the plant is rare overall. 
          Their presence in the western part of the species' range remains uncertain. This variety often grows with and hybridizes with S. alata var. ornata and var. atrorubra. 
          Stable populations persist in protected areas like De Soto National Forest and the Sandhill Crane National Wildlife Refuge in Mississippi, where habitat is maintained with regular prescribed burns.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-var-ornata',
        name: 'S.alata var. ornata',
        commonName: "Sarracenia alata 'heavy veined'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.orange,
        filter: { field: 'unique_id', values: [0, 1, 2, 3, 4, 5] },
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0406/1349.jpeg',
          photographer: '2006 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=187387&one=T',
          distribution: `Small, scattered populations of Sarracenia alata var. ornata occur in Mississippi and eastern Louisiana, where the plant is rare overall. 
          Their presence in the western part of the species' range remains uncertain. This variety often grows with and hybridizes with all other infraspecific taxa of S. alata, except S alata f. viridescens. 
          Stable populations persist in protected areas like De Soto National Forest and the Sandhill Crane National Wildlife Refuge in Mississippi, where habitat is maintained with regular prescribed burns.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-var-rubrioperculata',
        name: 'S.alata var. rubrioperculata',
        commonName: "Sarracenia alata 'cut throat'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.green,
        filter: { field: 'unique_id', values: [0, 1, 2, 3, 4, 5] },
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2320.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287562&one=T',
          distribution: `Small, scattered populations of Sarracenia alata var. rubrioperculata occur in Mississippi and eastern Louisiana, where the plant is rare overall. 
          Their presence in the western part of the species' range remains uncertain. This variety often grows with and hybridizes with all other infraspecific taxa of S. alata, except S alata f. viridescens. 
          Stable populations persist in protected areas like De Soto National Forest and the Sandhill Crane National Wildlife Refuge in Mississippi, where habitat is maintained with regular prescribed burns.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-alata-f-viridescens',
        name: 'S.alata var. viridescens',
        commonName: "Sarracenia alata 'antho-free'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.darkblue,
        filter: { field: 'unique_id', values: [] },
        info: createInfo({
          imageUrl: '/images/McPherson_alata_f_viridescens.jpg',
          photographer: '2004 McPherson',
          sourceUrl: 'https://cpn.carnivorousplants.org/articles/CPNv33n3p76.pdf',
          distribution: `Sarracenia alata f. viridescens is an exceptionally rare form, known from only a few small, isolated populations, notably in Alabama.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
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
      imageUrl: 'https://inaturalist-open-data.s3.amazonaws.com/photos/140692324/original.jpg',
      blurhash: 'LMIq@5s,$~nl~8RnRmf*IvR+kBW;',
      photographer: '2021 iNaturalist user tysmith',
      sourceUrl: 'https://www.inaturalist.org/photos/140692324',
      distribution: `Sarracenia flava grows in wet, nutrient-poor habitats such as pine savannas, open bogs, meadows, and along the edges of acidic ponds and streams. 
      Its range overlaps with nearly every other Sarracenia species except S. oreophila and S. alata, and it often hybridizes with most within its range—though not with S. psittacina, likely due to differences in flowering time. 
      The species’ distribution forms an arc from southeastern Virginia across the Atlantic and Gulf coastal plains through the Carolinas, Georgia, western Florida, and southeastern Alabama. 
      Once found in isolated inland populations on the Piedmont of North Carolina and in northern Florida, most of those have now disappeared.`,
      habitat: 'Wet pine savannas, bogs',
      conservationStatus: 'Vulnerable',
      source: DEFAULT_SOURCE
    }),
    sources: [
      createDistributionSource({
        id: 'sarracenia-flava-source-general',
        name: 'general',
        year: '',
        dataUrl: '/data/Sarracenia_flava.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'standard'
      }),
      createDistributionSource({
        id: 'sarracenia-alata-source-mcpherson',
        name: 'McPherson & Schnell',
        year: '2011',
        dataUrl: '/data/S_flava_distribution_McPhersonSchnell2011.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'presence'
      }),
      createDistributionSource({
        id: 'sarracenia-alata-source-heatmap',
        name: 'GBIF Heatmap',
        year: '2024',
        dataUrl: '/data/Sarracenia_flava_heatmap.geojson',
        citation: 'Aggregated occurrence data from field surveys',
        type: 'fill',
        paintType: 'heatmap'
      })
    ],
    children: [
      createVarietyLayer({
        id: 'sarracenia-flava-var-flava',
        name: 'S.flava var. flava',
        commonName: "Sarracenia flava 'typical'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.yellow,
        filter: { field: 'id', values: [35, 38, 46, 47, 48, 49, 50, 51, 52, 53] },
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3070.jpeg',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750789&one=T',
          distribution: `Sarracenia flava var. flava is the predominant variety in the species’ type region. 
          Its leaves are typically yellowish-green to bright buttery yellow in full sun. It differs from var. rugelii by the pattern of reddish-purple coloration on the underside of the lid and inside the pitcher opening, 
          where var. rugelii instead shows a solid patch of pigment without venation.
          <br />
          <br />
          This variety is most common in the northern part of the species’ range, particularly along the Atlantic coastal plain of the Carolinas, and is rare or possibly absent from the Gulf Coast. 
          It often grows alongside var. maxima, with hybrids between the two showing reduced pigmentation. 
          Strongholds include the Green Swamp in North Carolina, as well as several protected sites like Croatan National Forest, Cartwheel Bay Preserve, Francis Marion National Forest, 
          Lewis Ocean Bay Heritage Preserve, Santee Coastal Preserve, and wetlands managed by Meadowview Biological Station in Virginia.`,
          habitat: 'Pine flatwoods, wet savannas',
          conservationStatus: 'Vulnerable',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-atropurpurea',
        name: 'S. flava var. atropurpurea',
        commonName: "Sarracenia flava 'all red'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.purple,
        filter: { field: 'id', values: [38, 37, 30, 15, 55, 16] },
        info: createInfo({
          imageUrl: 'https://live.staticflickr.com/65535/50098846638_ceaa7169b6_3k.jpg',
          blurhash: 'LHI}zAJ%pVRl?:RBR-Rnk*ocoJXQ',
          photographer: '2020 Alan Cressler',
          sourceUrl: 'https://www.flickr.com/photos/alan_cressler/50098846638/in/photostream/',
          distribution: `Sarracenia flava var. atropurpurea occurs throughout the range of S. flava but is usually found in small, localized populations. 
          It is most commonly encountered in such isolated groups and is also known from the Florida Panhandle, though it remains rare there overall. 
          Infraspecific hybrids involving S. flava var. atropurpurea are rarely observed across the Atlantic Coastal Plain, but in northern Florida, 
          this variety may grow sympatrically with S. flava var. rubricorpora, S. flava var. rugelii, and S. flava var. ornata, where introgression is often evident.
          <br />
          <br />
          Populations of Sarracenia flava var. atropurpurea are protected in several well-managed reserves, including the Green Swamp Nature Preserve and Maple Hill Preserve in North Carolina, 
          the Lewis Ocean Bay Heritage Preserve in South Carolina, and the Apalachicola National Forest, Blackwater River State Forest, and Conecuh National Forest in Florida.`,
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-cuprea',
        name: 'S. flava var. cuprea',
        commonName: "Sarracenia flava 'copper top'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.pink,
        filter: { field: 'id', values: [38, 36, 47, 37, 49] },
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3127.jpeg',
          blurhash: 'LAFOSLJA5qXO}nNxJ8$$5W9weo=c',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750845&one=T',
          distribution: `Sarracenia flava var. cuprea occurs predominantly within the Atlantic Coastal Plain, particularly in the Carolinas. 
          Despite widespread habitat destruction throughout its range, S. flava var. cuprea remains a prominent component of S. flava populations in many localized areas. 
          Records indicate that this variety was either absent from the Gulf Coast or extremely rare there, and it no longer occurs in that portion of the species’ range. 
          Infraspecific hybrids involving S. flava var. cuprea, S. flava var. flava, and S. flava var. maxima are frequently observed in areas where these forms grow in close proximity. 
          Populations of Sarracenia flava var. cuprea are protected within several reserves, including the Green Swamp Nature Preserve in North Carolina, and in South Carolina at Cartwheel Bay Preserve, 
          Francis Marion National Forest, Lewis Ocean Bay Heritage Preserve, and Santee Coastal Preserve.`,
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-maxima',
        name: 'S. flava var. maxima',
        commonName: "Sarracenia flava 'all green'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.orange,
        filter: { field: 'id', values: [33, 38, 36, 47, 37, 49] },
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3061.jpeg',
          blurhash: 'LAFOSLJA5qXO}nNxJ8$$5W9weo=c',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750780&one=T',
          distribution: `Sarracenia flava var. maxima has historically occurred in small, localized populations throughout the range of the species. 
          This variety is most common in the northern part of the species’ range, particularly along the Atlantic coastal plain of the Carolinas, and is rare or possibly absent from the Gulf Coast. 
          The Green Swamp Nature Preserve in North Carolina is a stronghold for this variety, with additional populations in the Cartwheel Bay Preserve, the Croatan National Forest, the Francis Marion National Forest, 
          and the Lewis Ocean Bay Heritage Preserve. It often grows alongside S. flava var. flava and S. flava var. cuprea, and infraspecific hybrids with these varieties may occur, typically identifiable by their reduced red foliar pigmentation.`,
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-ornata',
        name: 'S. flava var. ornata',
        commonName: "Sarracenia flava 'heavy veined'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.green,
        filter: { field: 'id', values: [38, 46, 30, 15, 55] },
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3141.jpeg',
          blurhash: 'LQJ@Waxs-,kU~6xFxpR+R.ocsoWD',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750859&one=T',
          distribution: `Sarracenia flava var. ornata occurs sporadically in small populations across the Coastal Plain of the Carolinas and along parts of the Gulf Coast. 
          It is protected in several well-managed sites, including the Green Swamp Nature Preserve and Croatan National Forest in North Carolina, as well as the Apalachicola National Forest, 
          Blackwater River State Forest, and Conecuh National Forest in Florida.`,
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-rubricorpora',
        name: 'S. flava var. rubricorpora',
        commonName: 'Red-Throat Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.darkblue,
        filter: { field: 'id', values: [57, 55, 30] },
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1319.jpeg',
          blurhash: 'LFD+SJ%LS0Sc_4xbNGIWcaxuNGRj',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323952&one=T',
          distribution: `Sarracenia flava var. rubricorpora often grows in large mixed stands alongside S. flava var. atropurpurea, S. flava var. ornata, and S. flava var. rugelii, 
          and infraspecific hybrids among these varieties are frequently observed. Protected populations are found within the Apalachicola National Forest in Florida, 
          though these continue to face threats from poaching and seed collection. Smaller populations also occur in the Conecuh National Forest and on Eglin Air Force Base, 
          but due to the plant’s high horticultural value and demand, all known sites require careful monitoring to ensure their long-term survival.`,
          habitat: 'Wet pine savannas, seepage bogs',
          conservationStatus: 'Vulnerable',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-var-rugelii',
        name: 'S. flava var. rugelii',
        commonName: "Rugel's Pitcher Plant",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.magenta,
        filter: { field: 'id', values: [30, 15, 55, 17, 57, 14, 26, 33, 16, 13, 23] },
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1329.jpeg',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323962&one=T',
          distribution: `Sarracenia flava var. rugelii is the predominant variety of S. flava along the Gulf Coast portion of the species’ range. 
          It occurs in southern Georgia and historically extended as far north as Summerville, South Carolina, where it was replaced farther up the Atlantic Coastal Plain by S. flava var. flava. 
          This variety has not been recorded from North Carolina or Virginia. Sarracenia flava var. rugelii often grows sympatrically with S. flava var. atropurpurea and S. flava var. rubricorpora, 
          and while infraspecific hybrids among these forms can occur, they are encountered only occasionally. Although the vast stands described by early naturalists have largely disappeared, 
          smaller populations remain fairly widespread. Well-managed examples are protected in areas such as Eglin Air Force Base and the 
          Apalachicola National Forest in Florida. At present, S. flava var. rugelii appears relatively secure in the wild.`,
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-flava-f-viridescens',
        name: 'S. flava f. viridescens',
        commonName: "Sarracenia flava 'anthocyanin-free'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        color: SPECIES_COLORS.red,
        info: createInfo({
          imageUrl: '/images/McPherson_flava_f_viridescens.jpg',
          photographer: '2011 McPherson',
          sourceUrl: 'https://www.aipcnet.it/wp-content/uploads/2020/12/New_species_2011.pdf',
          distribution: `It remains uncertain whether naturally occurring populations of this rare form still persist in the wild, 
          but if they do, they would require close monitoring due to the serious risk of poaching driven by their high horticultural value. 
          It is also possible that some wild populations have gone unrecognized, as the coloration of this form can closely resemble that of 
          S. flava var. maxima, making identification difficult without careful observation.`,
          habitat: 'Seepage slopes, wet pine savannas',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
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
      distribution: `Sarracenia leucophylla historically ranged from the extreme southwestern corner of Georgia across the Florida Panhandle and southern Alabama, 
      extending just into Mississippi. A few outlying populations were once known from several counties in southwestern Georgia, though nearly all of these have been lost, 
      and only a single stand is known to remain. Roughly ten populations survive in Mississippi, with fewer than one hundred sites documented across Alabama and Florida. 
      Today, few large stands persist, and most existing populations are small, fragmented, and confined to remnant wet areas such as roadside ditches and other low-lying ground where water still collects.
      <br />
      <br />
      The long-term survival of these small, isolated populations is uncertain, as many appear to be in gradual decline—likely due in part to falling water tables caused by land drainage and habitat alteration. 
      Close monitoring of this species’ status is essential. However, conservation initiatives, such as those at the Splinter Hill Bog and Weeks Bay Pitcher Plant Preserves in Alabama, 
      demonstrate that with active management and habitat restoration, S. leucophylla populations can rebound very well.`,
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered'
    }),
    sources: [
      createDistributionSource({
        id: 'sarracenia-leucophylla-source-general',
        name: 'general',
        year: '',
        dataUrl: '/data/Sarracenia_leucophylla.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'standard'
      }),
      createDistributionSource({
        id: 'sarracenia-alata-source-mcpherson',
        name: 'McPherson & Schnell',
        year: '2011',
        dataUrl: '/data/S_leucophylla_distribution_McPhersonSchnell2011.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'presence'
      }),
      createDistributionSource({
        id: 'sarracenia-alata-source-heatmap',
        name: 'GBIF Heatmap',
        year: '2024',
        dataUrl: '/data/Sarracenia_leucophylla_heatmap.geojson',
        citation: 'Aggregated occurrence data from field surveys',
        type: 'fill',
        paintType: 'heatmap'
      })
    ],
    children: [
      createVarietyLayer({
        id: 'sarracenia-leucophylla-var-leucophylla',
        name: 'S. leucophylla var. leucophylla',
        commonName: 'White Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [15, 16, 23, 24, 25, 28, 29, 34, 13] },
        color: SPECIES_COLORS.purple,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1349.jpeg',
          photographer: '2010 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323982&one=T',
          distribution: `Sarracenia leucophylla var. leucophylla exhibits a extensive range of variation in both color intensity and vein patterning. 
          Across this spectrum are forms with dense, dark purple venation enclosing small patches of white areolation only a few millimeters wide, as well 
          as others showing broader, more widely spaced pink veins that frame larger areoles up to a centimeter across. As with all white-topped Sarracenia, 
          the extent of areolation varies greatly, ranging from being restricted to the uppermost portion of the pitcher in some plants to covering as much as a quarter of the leaf surface in others, 
          though usually less. Because no clear dividing line exists between these extremes, it is most accurate to treat S. leucophylla var. leucophylla as a single, 
          highly variable taxon encompassing a broad and continuous spectrum of coloration and patterning.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-leucophylla-var-alba',
        name: 'S. leucophylla var. alba',
        commonName: "'White-topped' Pitcher Plant",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [24, 25, 34] },
        color: SPECIES_COLORS.pink,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_06200.jpg',
          blurhash: 'LpGu%XkDM_of%%WYWAogXVWXt7og',
          photographer: '2019 Alan Cressler',
          sourceUrl: 'https://www.flickr.com/photos/alan_cressler/48810990807/',
          distribution: `Sarracenia leucophylla var. alba occurs sporadically within stands of S. leucophylla, typically representing only a small fraction of the plants present at any given site. 
          All confirmed records of this variety come from southern Alabama, where it is considered endemic. 
          Historically, the largest populations were found in the now extirpated Hurricane Creek Bog in Baldwin County. 
          Today, S. leucophylla var. alba persists in at least two well-managed protected preserves.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-leucophylla-f-viridescens',
        name: 'S. leucophylla f. viridescens',
        commonName: "Sarracenia leucophylla Green",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [24, 25, 34] },
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://live.staticflickr.com/65535/53609355769_f71a8622bb_5k.jpg',
          photographer: '2023 Mike Wang',
          sourceUrl: 'https://sarracenia.proboards.com/thread/5981/leucophylla-viridescens-baldwin-al',
          distribution: `A single flowering specimen of this taxon was first discovered in Alabama by Bill Scholl, followed by two additional plants found nearby by John Hummer and Carl Mazur. 
          Self- and cross-pollination of these individuals produced anthocyanin-free offspring, which have since become relatively well established in cultivation among horticulturists in both 
          North America and Europe. Subsequent discoveries of this exceptionally rare form indicate that its natural range is limited to southern Alabama.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
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
      imageUrl: 'https://live.staticflickr.com/7179/13836069233_24dbf051e6_3k.jpg',
      blurhash: 'L8HnfqD+ORIn}[xZ-.jE01x@MyRk',
      photographer: '2014 Mary Keim',
      sourceUrl: 'https://www.flickr.com/photos/38514062@N03/13836069233/',
      distribution: 'Description needed',
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered',
      source: DEFAULT_SOURCE
    }),
    sources: [
      createDistributionSource({
        id: 'sarracenia-minor-source-general',
        name: 'general',
        year: '',
        dataUrl: '/data/Sarracenia_minor.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'standard'
      }),
      createDistributionSource({
        id: 'sarracenia-minor-source-mcpherson',
        name: 'McPherson & Schnell',
        year: '2011',
        dataUrl: '/data/S_minor_distribution_McPhersonSchnell2011.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'presence'
      }),
      createDistributionSource({
        id: 'sarracenia-minor-source-heatmap',
        name: 'GBIF Heatmap',
        year: '2024',
        dataUrl: '/data/Sarracenia_minor_heatmap.geojson',
        citation: 'Aggregated occurrence data from field surveys',
        type: 'fill',
        paintType: 'heatmap'
      })
    ],
    children: [
      createVarietyLayer({
        id: 'sarracenia-minor-var-minor',
        name: 'S. minor var. minor',
        commonName: 'Hooded Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [58, 17, 47, 27, 49, 59, 60, 61, 62, 63, 30] },
        color: SPECIES_COLORS.orange,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/1116/3055.jpeg',
          blurhash: 'LaF#=[xFX5jb~SRmNaWE-VRlRloM',
          photographer: '2016 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=750774&one=T',
          distribution: `Sarracenia minor var. minor is the predominant form of this species across its range, with the exception of a few isolated populations in and around the Okefenokee Swamp. 
          Infraspecific hybrids involving S. minor var. minor, S. minor f. viridescens, or S. minor var. okefenokeensis have not been recorded. In southeastern North Carolina, S. minor var. minor has been nearly extirpated, 
          though farther south it can still be found in small stands, particularly in open savanna habitats and wet pine flatwoods.
          <br />
          <br />
          A few remnant, multi-hectare populations survive in South Carolina, southern Georgia, and peninsular Florida, but these continue to decline due to habitat destruction and falling water tables. 
          Some populations are protected in well-managed reserves like the the Doerun Pitcher Plant Preserve in Georgia and the Francis Marion National Forest in South Carolina. The majority of remaining populations 
          occur on private land, where they remain highly vulnerable to disturbance and loss.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-minor-var-minor-f-viridescens',
        name: 'S. minor var. minor f. viridescens',
        commonName: "Sarracenia minor antho-free",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [17] },
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://farm4.staticflickr.com/3807/8918168677_a2f602f1dd_b.jpg',
          photographer: '2013 The Pitcher Plant Project',
          sourceUrl: 'https://thepitcherplantproject.com/archive/2013/06/sarracenia-minor-anthocyanin-free/',
          distribution: `Sarracenia minor f. viridescens was first discovered by Jim Bockowski, accompanied by Bill Scholl, in a burned longleaf pine hillside seepage bog in Worth County, Georgia. 
          Several additional plants have since been found in the same region, and offspring from these individuals are now well represented in cultivated collections across North America and Europe. 
          Most cultivated strains of S. minor var. minor f. viridescens are small and slow-growing. To produce more vigorous plants, horticulturists have crossed this form with S. minor var. okefenokeensis. 
          The resulting infraspecific hybrids grow taller and faster than pure f. viridescens plants and typically exhibit little or no anthocyanin, appearing entirely green. 
          These hybrid plants have become more common in cultivation than true f. viridescens, and many specimens labeled as such are actually derived from this artificial cross. 
          An anthocyanin-free variant of S. minor var. okefenokeensis has not yet been recorded.
          <br />
          <br />
          It remains unclear whether naturally occurring populations of f. viridescens still persist in the wild, but if any do, they would require careful protection due to the ongoing risk of poaching driven by horticultural demand for this exceptionally rare plant.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-minor-var-okefenokeensis',
        name: 'S. minor var. okefenokeensis',
        commonName: "Hooded Pitcher Plant",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [32, 33] },
        color: SPECIES_COLORS.red,
        info: createInfo({
          imageUrl: 'https://live.staticflickr.com/2260/2433216132_370d70b2bf_3k.jpg',
          blurhash: 'L9CPX.NN5a??x{tk.6aSA3%L%eIw',
          photographer: '2008 Alan Cressler',
          sourceUrl: 'https://www.flickr.com/photos/alan_cressler/2433216132/',
          distribution: `Sarracenia minor var. okefenokeensis is primarily restricted to the Okefenokee National Wildlife Refuge and its surrounding areas, extending a few kilometers beyond the refuge to the north and east. 
          Sarracenia minor var. minor is absent or extremely rare within Okefenokee, likely due to its lower tolerance for very wet habitat. As a result, the ranges of the two varieties meet with minimal overlap. 
          Historically, var. okefenokeensis was also found in South Carolina but has since been extirpated. Today, it continues to occur around Kings Bay, Georgia, and may extend slightly into northern Florida. 
          The largest and most stable populations exist within the Okefenokee Refuge.`,
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
      distribution: `Sarracenia oreophila has historically been discovered in small, isolated populations, indicating that its range was once more extensive. Today, the species is primarily confined to northeastern Alabama. 
      It once occurred farther south, but those populations have since been extirptaed. Small, managed sites also exist in Georgia and North Carolina, maintained by The Nature Conservancy. 
      Largers populations remain in northern Alabama, mostly within the Coosa Valley and Sand Mountain regions. Due to its extremely limited range and the continuing decline of wild populations, 
      Sarracenia oreophila is considered critically endangered and at risk of extinction.`,
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered',
      source: DEFAULT_SOURCE
    }),
    sources: [
      createDistributionSource({
        id: 'sarracenia-oreophila-source-general',
        name: 'general',
        year: '',
        dataUrl: '/data/Sarracenia_oreophila.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'standard'
      }),
      createDistributionSource({
        id: 'sarracenia-oreophila-source-mcpherson',
        name: 'McPherson & Schnell',
        year: '2011',
        dataUrl: '/data/S_oreophila_distribution_McPhersonSchnell2011.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'presence'
      }),
      createDistributionSource({
        id: 'sarracenia-oreophila-source-heatmap',
        name: 'GBIF Heatmap',
        year: '2024',
        dataUrl: '/data/Sarracenia_oreophila_heatmap.geojson',
        citation: 'Aggregated occurrence data from field surveys',
        type: 'fill',
        paintType: 'heatmap'
      })
    ],
    children: [
      createVarietyLayer({
        id: 'sarracenia-oreophila-var-oreophila',
        name: 'S. oreophila var. oreophila',
        commonName: 'Green Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [64] },
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2537.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287757&one=T',
          distribution: `Sarracenia oreophila var. oreophila is the main variety found in the species’ type region. It can be distinguished from var. ornata by its less pronounced veining on the exterior of the pitcher and the upper surface of the lid. 
          No known populations of S. oreophila lack red venation or pigmentation entirely. This species is considered the most endangered of all Sarracenia, with the survival of many remaining wild populations still uncertain due to ongoing poaching. 
          Habitat loss is not currently a major threat, as all known sites are managed and protected under federal, state, or nonprofit stewardship. All of the privately owned sites follow conservation plans agreed upon with environmental organizations. 
          Despite these protections, illegal collection remains a serious issue, and removing S. oreophila plants from the wild violates U.S. law and can result in severe penalties.`,
          habitat: 'Sandy pockets along streams, flat-wood sites',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-oreophila-var-ornata',
        name: 'S. oreophila var. ornata',
        commonName: 'Green Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [64] },
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://c1.staticflickr.com/1/970/41994212812_2cbfb099f9_b.jpg',
          photographer: 'needs attribution',
          sourceUrl: 'https://cpphotofinder.com/sarracenia-oreophila-var-ornata-5134.html',
          distribution: `Sarracenia oreophila var. ornata was once found in scattered populations across much of the species’ natural range, especially on Sand Mountain and along Little River Canyon in northeastern Alabama. 
          Most of these populations have been extirpated, resulting in the loss of much of this variety’s genetic diversity. 
          Today it is exctremely rare in the wild, with the last known remnant stands confined to a single remote streamside bog within Little River Canyon National Preserve, Alabama. 
          It remains uncertain whether these remaining plants exist in sufficient numbers to sustain a viable population over the long term.`,
          habitat: 'Sandy pockets along streams, flat-wood sites',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
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
      imageUrl: 'https://inaturalist-open-data.s3.amazonaws.com/photos/521412100/original.jpg',
      photographer: 'iNaturlist user triiothyrocide',
      sourceUrl: 'https://www.inaturalist.org/observations/289877706',
      distribution: `The range of Sarracenia psittacina extends from a single county in South Carolina, through southern Georgia and northeastern Florida, across the Florida Panhandle and lower Alabama and Mississippi, 
      and just into two parishes in Louisiana. Although the number of known sites has declined, populations of this species remain extant throughout much of its original range. This persistence is partly due to the species’ 
      greater tolerance of disturbances that severely impact other Sarracenia species, for example - periodic roadside mowing. Sarracenia psittacina inhabits wet savannas, open wet longleaf pine forests, hillside seeps, sphagnum bogs, 
      and the margins of acidic ponds, swamps, and streams. It also occurs on hummocks within shallow acidic pools, in water-filled swales, and along artificial drainage ditches. The species shows a marked preference for saturated or flooded environments.`,
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered',
      source: DEFAULT_SOURCE
    }),
    sources: [
      createDistributionSource({
        id: 'sarracenia-psittacina-source-general',
        name: 'general',
        year: '',
        dataUrl: '/data/Sarracenia_psittacina.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'standard'
      }),
      createDistributionSource({
        id: 'sarracenia-psittacina-source-mcpherson',
        name: 'McPherson & Schnell',
        year: '2011',
        dataUrl: '/data/S_psittacina_distribution_McPhersonSchnell2011.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'presence'
      }),
      createDistributionSource({
        id: 'sarracenia-psittacina-source-heatmap',
        name: 'GBIF Heatmap',
        year: '2024',
        dataUrl: '/data/Sarracenia_psittacina_heatmap.geojson',
        citation: 'Aggregated occurrence data from field surveys',
        type: 'fill',
        paintType: 'heatmap'
      })
    ],
    children: [
      createVarietyLayer({
        id: 'sarracenia-psittacina-var-psittacina',
        name: 'S. psittacina var. psittacina',
        commonName: 'Parrot Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [0, 1, 2, 3, 4, 12, 13, 14, 15, 16, 17 ,18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 34, 39, 40, 67, 68, 69, 70, 96] },
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0610/1275.jpeg',
          photographer: '2010 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=323908&one=T',
          distribution: `Sarracenia psittacina var. psittacina is the dominant form of this species throughout its range, apart from a few isolated pockets, like the Okefenokee Swamp. 
          Its overall outlook in the wild remains relatively positive, even though much of its natural habitat has been lost. 
          Sarracenia psittacina var. psittacina continues to persist across remnants of southern wetlands and often grows opportunistically in areas where water tends to flood. 
          It is frequently observed in roadside drainage ditches and, along with Sarracenia purpurea subsp. venosa var. burkii, commonly appears along major highways that cross its natural range. 
          Populations of this taxon also occur in several well-managed protected areas, including De Soto National Forest in Mississippi, Eglin Air Force Base and Apalachicola National Forest in Florida, and the Okefenokee National Wildlife Refuge in Georgia.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-psittacina-var-psittacina-f-viridescens',
        name: 'S. psittacina var. psittacina f. viridescens',
        commonName: 'Parrot Pitcher Plant antho-free',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [19, 30] },
        color: SPECIES_COLORS.red,
        info: createInfo({
          imageUrl: 'https://www.hccarnivorousplants.co.uk/cdn/shop/products/C9BDCC03-E042-4E19-B790-C68343040468_940x.jpg?v=1690625688',
          blurhash: 'LCCYp-9cEgbY~SIrV@t6B6nl$gW-',
          photographer: 'Hewitt-Cooper Carnivorous Plants',
          sourceUrl: 'https://www.hccarnivorousplants.co.uk/products/sarracenia-psittacina-f-viridescens-wewahatchicka-fl?srsltid=AfmBOooAD0m1MDac6NswnX9JmQt_mn1bopWnjnrzik5Q5SbvQz6pZ1pM',
          distribution: `Specimens of this form have been documented historically in Florida and Alabama, particularly in northern Florida within swamp habitats across the Apalachicola National 
          Forest and at former sites along the Yellow River, where it is now extirpated. Remaining populations are small and scattered, and due to their rarity and high horticultural demand, 
          these stands must be closely monitored to protect them from poaching and further decline.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-psittacina-var-okefenokeensis',
        name: 'S. psittacina var. okefenokeensis',
        commonName: 'Parrot Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [32, 33] },
        color: SPECIES_COLORS.yellow,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_09583.jpg',
          blurhash: 'LCCYp-9cEgbY~SIrV@t6B6nl$gW-',
          photographer: '2010 Scott Ward',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon-detail.php&taxonid=65715',
          distribution: `Extensive populations of Sarracenia psittacina var. okefenokeensis occur across the Chesser Prairie region within the Okefenokee National Wildlife Refuge. 
          This variety typically grows in very wet environments, often in association with sphagnum moss. It commonly inhabits floating prairies and sphagnum moss rafts. 
          The larger pitcher size characteristic of this form is not a product of its wet habitat, plants grown in cultivation alongside typical S. psittacina var. psittacina maintain their size, as do their offspring and hybrids. 
          Most known populations of this variety are found in areas where few or no typical S. psittacina var psittacine plants occur. 
          While the full distribution of S. psittacina var. okefenokeensis remains poorly documented—partly due to its preference for floating sphagnum mats that are difficult to access, large populations are known from the Okefenokee National Wildlife Refuge in Georgia. 
          Smaller, secure populations also exist in the Apalachicola National Forest and at Eglin Air Force Base in Okaloosa County, Florida.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-psittacina-var-okefenokeensis-f-luteoviridis',
        name: 'S. psittacina var. okefenokeensis f. luteoviridis',
        commonName: 'Parrot Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [32, 33] },
        color: SPECIES_COLORS.purple,
        info: createInfo({
          imageUrl: 'https://live.staticflickr.com/65535/50168428942_01f3c8f308_c.jpg',
          blurhash: 'LCCYp-9cEgbY~SIrV@t6B6nl$gW-',
          photographer: '2020 Mike Wang',
          sourceUrl: 'https://sarracenia.proboards.com/thread/930/psittacina-var-okefenokeensis-luteoviridis',
          distribution: `Small stands of this form have been documented growing alongside Sarracenia psittacina var. okefenokeensis within the Okefenokee National Wildlife Refuge in Georgia. 
          It is uncertain whether wild populations of this rare variant still persist, but if any do, they should be closely monitored due to the heightened risk of poaching driven by strong horticultural interest in this distinctive plant.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
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
      imageUrl: 'https://inaturalist-open-data.s3.amazonaws.com/photos/547993678/original.jpg',
      photographer: 'iNaturalist user hungry-sarracenia',
      sourceUrl: 'https://www.inaturalist.org/observations/304022870',
      distribution: `Sarracenia purpurea occupies the largest geographic range of any Sarracenia species. At its northern limits, it spans a vast section of southern Canada, from the far northeastern corner of British Columbia east of the 
      Continental Divide through the Prairie Provinces, Ontario, southern Quebec, southern Newfoundland, and the Maritime Provinces. Herbarium records also document occurrences in the Northwest Territories and Nunavut, 
      with populations extending as far north as 62°N in northern Quebec. It is the only pitcher plant species in the world found at near Arctic latitudes. 
      The range extends southward into the United States, covering all of New England, most of the Great Lakes region, and parts of Iowa, West Virginia, Maryland, New Jersey, and Delaware. 
      Farther south, the distribution becomes more limited, remaining primarily within the Atlantic and eastern Gulf Coastal Plains and reaching as far west as eastern Mississippi, though with a notable absence across most of Georgia. 
      Isolated inland populations also occur in western North Carolina, particularly in the southern Appalachian Mountains and adjacent upland areas of neighboring states.`,
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered',
      source: DEFAULT_SOURCE
    }),
    sources: [
      createDistributionSource({
        id: 'sarracenia-purpurea-source-general',
        name: 'general',
        year: '',
        dataUrl: '/data/Sarracenia_purpurea.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'standard'
      }),
      createDistributionSource({
        id: 'sarracenia-purpurea-source-mcpherson',
        name: 'McPherson & Schnell',
        year: '2011',
        dataUrl: '/data/S_purpurea_distribution_McPhersonSchnell2011.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'presence'
      }),
      createDistributionSource({
        id: 'sarracenia-purpurea-source-heatmap',
        name: 'GBIF Heatmap',
        year: '2024',
        dataUrl: '/data/Sarracenia_purpurea_heatmap.geojson',
        citation: 'Aggregated occurrence data from field surveys',
        type: 'fill',
        paintType: 'heatmap'
      })
    ],
    children: [
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-pupurea',
        name: 'S. pupurea ssp. pupurea',
        commonName: 'Northern Purple Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [65, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94] },
        color: SPECIES_COLORS.darkblue,
        info: createInfo({
          imageUrl: 'https://static.inaturalist.org/photos/83887520/large.jpg',
          photographer: 'iNaturalist user mariaburke',
          sourceUrl: 'https://www.inaturalist.org/observations/52758274',
          distribution: `Populations of Sarracenia purpurea subsp. purpurea are abundant across much of its range, thriving in numerous protected areas throughout Canada and the United States. 
          Notable sites include Algonquin Provincial Park in Ontario, Gros Morne National Park in Newfoundland, and several preserves managed by the Michigan Nature Association. 
          The current status of populations in the territorial collectivity of St. Pierre and Miquelon remains uncertain. Overall, this subspecies is among the most secure of all Sarracenia in the wild, 
          where pristine populations persist due to low human impact across much of northern Canada.Farther south into the United States, ongoing habitat degradation and destruction continue to threaten its stability. 
          As a result, the already fragmented distribution of S. purpurea subsp. purpurea is expected to become even more patchy over time. Despite its relatively secure global outlook, U.S. populations should be monitored closely. 
          This subspecies occurs sympatrically with S. purpurea subsp. venosa in New Jersey and Delaware, and plants showing intermediate characteristics suggest occasional introgression between the two forms, extending as far south as Virginia.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-pupurea-f-heterophylla',
        name: 'S. pupurea ssp. pupurea f. heterophylla',
        commonName: "Purple Pitcher Plant 'Antho-free'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [90, 91, 92, 93, 94] },
        color: SPECIES_COLORS.red,
        info: createInfo({
          imageUrl: 'https://farm8.staticflickr.com/7404/9442429926_b1235a7664.jpg',
          photographer: '2013 Mike Wang',
          sourceUrl: 'https://sarracenia.proboards.com/thread/826/purpurea-ssp-venosa-var-pallidiflora',
          distribution: `This plant represents the first anthocyanin-free Sarracenia ever discovered. Sarracenia purpurea subsp. purpurea f. heterophylla is rare in the wild, comprising less than one percent of all known individuals of the subspecies. 
          However, at a few isolated sites, most notably the original locality in Massachusetts where Amos Eaton first described the form, it can be locally abundant or even dominant. 
          Its known distribution includes Ontario, Quebec, Newfoundland, Nova Scotia, Massachusetts, Connecticut, New York, Pennsylvania, Michigan, Minnesota, and possibly New Jersey. 
          The form is also recorded from at least one protected area, Gros Morne National Park in Newfoundland. Due to its rarity and strong appeal among collectors, all known populations of 
          S. purpurea subsp. purpurea f. heterophylla should be closely monitored to prevent poaching and ensure long-term conservation.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-venosa',
        name: 'S. pupurea ssp. venosa var. venosa',
        commonName: 'Purple Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [35, 36, 37, 38, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 72, 73, 74] },
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_04648.jpg',
          blurhash: 'LAEfDV?FR.xF}s9^SwnQX+OTwNaM',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/cust/2024/main.php?pg=show-taxon.php&&plantname=sarracenia+purpurea&limit=1&offset=2&taxonid=4619',
          distribution: `Sarracenia purpurea subsp. venosa var. venosa is known to hybridize with S. purpurea subsp. purpurea where their ranges overlap in Delaware, Maryland, and possibly as far south as Virginia. 
          In these overlap zones, populations include individuals resembling both subspecies as well as intermediates with mixed characteristics. Most of the interspecies populations have been extirpated.
          <br />
          <br />
          Historically, S. purpurea ssp. venosa var. venosa may also have grown alongside S. purpurea ssp. venosa var. burkii, but none are known to persist today due to habitat destruction. 
          Most remaining populations of var. venosa are small, fragmented, and declining, affected by severe droughts, falling water tables, habitat loss, and suppression of natural wildfires. 
          The largest remaining populations occur in protected areas, including the Green Swamp Nature Preserve and the Croatan National Forest in North Carolina, and the Francis Marion National Forest and Lewis Ocean Bay Heritage Preserve in South Carolina. 
          Conservation efforts in these areas are critical, as the primary threat to this plant is ongoing habitat change rather than poaching.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-venosa-f-pallidiflora',
        name: 'S. pupurea ssp. venosa var. venosa f. pallidiflora',
        commonName: "Sarracenia Purpurea ssp. Venosa 'Antho-free'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [] },
        color: SPECIES_COLORS.yellow,
        info: createInfo({
          imageUrl: 'https://www.sarracenia.com/photos/sarracenia/sarrapurp2003.jpg',
          photographer: '2018 Barry Rice',
          sourceUrl: 'https://www.sarracenia.com/faq/faq5538.html',
          distribution: `No population of this rare form has been found in the wild. Only a few strains of Saracenia purpurea ssp venosa var venosa f pallidiflora have ever been recorded, all of which were propagated in cultivation from seeds collected from heterozygous plants.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-burkii',
        name: 'S. pupurea ssp. venosa var. burkii',
        commonName: "Burk's Pitcher Plant",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [4, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 34] },
        color: SPECIES_COLORS.purple,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/userimg/userimg_301712.jpg',
          blurhash: 'L8GR|WvB03~kJ|rvnSIXAV%K,IR:',
          photographer: 'Kyle Filicky',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&plantname=sarracenia+rosea',
          distribution: `Sarracenia purpurea ssp. venosa var. burkii occurs exclusively in the Gulf Coast portion of the species’ range, from southwestern Georgia and northwestern Florida westward to George and Jackson counties in southeastern Mississippi. 
          Most populations are found within approximately 120 km of the coastline. Healthy populations exist in several well-managed protected areas in Florida, including the Apalachicola National Forest and Eglin Air Force Base. 
          Populations outside these protected areas require careful monitoring to ensure their continued survival.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-burkii-f-luteola',
        name: 'S. pupurea ssp. venosa var. burkii f. luteola',
        commonName: "Burk's Pitcher Plant 'Antho-free'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [23, 25, 30, 34, 67] },
        color: SPECIES_COLORS.pink,
        info: createInfo({
          imageUrl: 'https://www.sarracenia.com/photos/sarracenia/sarrarose2001.jpg',
          photographer: '2018 Barry Rice',
          sourceUrl: 'https://www.sarracenia.com/faq/faq5542.html',
          distribution: `Historically, specimens of Sarracenia purpurea subsp. venosa var. burkii f. luteola were collected in Liberty County, Florida, with additional plants documented in Baldwin County, Alabama, and Gulf County, Florida. 
          Seeds from these original plants were sent to the Atlanta Botanical Garden for propagation, and seedlings have since been distributed widely across North America and Europe. 
          It is unknown whether any populations of this rare form still persist in the wild, but if they do, they would require close monitoring due to the heightened risk of poaching driven by strong horticultural demand.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered'
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-pupurea-ssp-venosa-var-montana',
        name: 'S. pupurea ssp. venosa var. montana',
        commonName: 'Mountain Purple Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [42, 43, 44] },
        color: SPECIES_COLORS.orange,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_07864.jpg',
          blurhash: 'L6EfDWOoKv=M.Ns;pU$RAHt5~8M|',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/show-taxon-detail.php?taxonid=4617',
          distribution: `The name montana is derived from the Latin adjective montanus, reflecting the plant’s distribution in upland sphagnum seepage bogs of the Blue Ridge and southern 
          Appalachian Mountains, including southwestern North Carolina, extreme western South Carolina, and northern Georgia. Its range is isolated from the rest of S. purpurea subsp. venosa.
          <br />
          <br />
          Montane sphagnous seepage bogs in the southern Appalachians are declining rapidly, putting this variety at high risk in the wild. 
          Most populations face possible extirpation due to habitat loss caused by construction, falling water tables, and nutrient runoff from surrounding agriculture, which allows shrubs and trees to overgrow the bogs and outcompete the plants. 
          The largest populations occur in at least one well-managed protected area, the Chattahoochee National Forest in Rabun County, Georgia. All remaining stands require careful monitoring and protection against poaching to ensure their survival.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
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
    dataUrl: '/data/Sarracenia_rubra.geojson',
    info: createInfo({
      imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2576.jpeg',
      photographer: '2009 Barry Rice',
      sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287818&one=T',
      distribution: `The range of Sarracenia rubra is composed of several separate populations scattered across the southeastern United States, extending from southern North Carolina through South Carolina, Georgia, Florida, and Alabama, reaching the southeastern edge of Mississippi.`,
      habitat: 'Seepage bogs, wet pine flatwoods',
      conservationStatus: 'Endangered',
      source: DEFAULT_SOURCE
    }),
    sources: [
      createDistributionSource({
        id: 'sarracenia-rubra-source-general',
        name: 'general',
        year: '',
        dataUrl: '/data/Sarracenia_rubra.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'standard'
      }),
      createDistributionSource({
        id: 'sarracenia-rubra-source-mcpherson',
        name: 'McPherson & Schnell',
        year: '2011',
        dataUrl: '/data/S_rubra_distribution_McPhersonSchnell2011.geojson',
        citation: DEFAULT_SOURCE,
        type: 'fill',
        paintType: 'presence'
      }),
      createDistributionSource({
        id: 'sarracenia-rubra-source-heatmap',
        name: 'GBIF Heatmap',
        year: '2024',
        dataUrl: '/data/Sarracenia_rubra_heatmap.geojson',
        citation: 'Aggregated occurrence data from field surveys',
        type: 'fill',
        paintType: 'heatmap'
      })
    ],
    children: [
      createVarietyLayer({
        id: 'sarracenia-rubra-var-rubra',
        name: 'S.rubra var. rubra',
        commonName: 'Sweet Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [35, 36, 37, 38, 46, 47, 49, 50, 51, 52, 53, 54] },
        color: SPECIES_COLORS.magenta,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2576.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287818&one=T',
          distribution: `Sarracenia rubra ssp. rubra is the most widespread and abundant member of the S. rubra complex. 
          Most of the original habitat has been destroyed, leading to its extirpation across much of its former range. The species is at risk of state-level extinction in Georgia. 
          Populations do persist in several well-managed protected areas, including the Green Swamp Nature Preserve and Holly Shelter Preserve in North Carolina, as well as the Cartwheel Bay Preserve, Francis Marion National Forest, and Lewis Ocean Bay Heritage Preserve in South Carolina.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-alabamensis',
        name: 'S. rubra ssp. alabamensis',
        commonName: 'Alabama Canebrake Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [95] },
        color: SPECIES_COLORS.green,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_03759.jpg',
          blurhash: 'L2E{8Ukz0q}Y01AH0,MN0p?C^@G8',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia&limit=1&offset=1&taxonid=4607',
          distribution: `Sarracenia rubra ssp. alabamaensis is a rare pitcher plant restricted to small, localized populations within the Fall Line Sandhills of Chilton and Elmore counties, 
          Alabama, north of the Alabama River, in an area roughly bounded by the Coosa River to the east and the Mulberry River to the west. Only twelve populations of this subspecies are known to survive, and all but one are very small. 
          S. rubra subsp. alabamaensis is considered endangered and at high risk of extinction. These remaining populations require rigorous and sustained protection to ensure the long-term survival of this plant in the wild.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-gulfensis',
        name: 'S. rubra ssp. gulfensis',
        commonName: 'Gulf Coast Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [13, 14, 15, 18, 19, 26, 57] },
        color: SPECIES_COLORS.orange,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2573.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287815&one=T',
          distribution: `Sarracenia rubra subsp. gulfensis is restricted to the western Florida Panhandle. Its range borders that of S. rubra ssp. wherryi in Alabama and in two Florida counties, 
          and hybrids are extremely rare. Much of the subspecies’ original range lies within the boundaries of the expansive Eglin Air Force Base, where habitat remains largely intact. 
          Restricted civilian access and exclusion zones due to unexploded ordinance have left portions of this area relatively unexplored, meaning the full diversity of this taxon is still not completely known. 
          New populations continue to be discovered, some displaying unusual traits such as exceptionally prominent red coloration. Certain populations have even been found growing on floating organic mats composed of sphagnum moss, 
          dead branches, twigs, and other debris, with plants entirely unrooted from the ground.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-gulfensis-f-luteoviridis',
        name: 'S. rubra ssp. gulfensis f. luteoviridis',
        commonName: 'Gulf Coast Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [13, 14, 15, 18, 19, 26, 57] },
        color: SPECIES_COLORS.pink,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2573.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287815&one=T',
          distribution: `Several strains of Sarracenia rubra ssp. gulfensis f. luteoviridis have been documented, particularly along the Yellow River in Florida, although these populations have recently been extirpated. 
          Unlike the anthocyanin-free forms of many other Sarracenia, this variety is relatively vigorous, but there are no reports of it becoming dominant within local populations. 
          Overall, the plant is rare and typically occurs as scattered individuals or small clusters within larger populations of S. rubra subsp. gulfensis. 
          It is unknown whether any wild populations of this rare form still exist, but if they do, they would require close monitoring due to the elevated risk of poaching driven by high horticultural demand.`,
          habitat: 'Coastal plain seepage bogs',
          conservationStatus: 'Critically Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-jonesii',
        name: 'S.rubra ssp. jonesii',
        commonName: 'Mountain Sweer Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [43, 44] },
        color: SPECIES_COLORS.purple,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_05565.jpg',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia&limit=1&offset=5&taxonid=4611',
          distribution: `Sarracenia rubra ssp. jonesii is historically native to a small region of southwestern North Carolina, with slight extensions into extreme northwestern South Carolina, including Buncombe, Transylvania, 
          and Henderson counties in North Carolina and Greenville and Pickens counties in South Carolina. Most documented populations occurred west and south of Hendersonville, NC, extending into South Carolina near Caesars Head Mountain. 
          Unfortunately, much of this area has been heavily developed for golf courses, vacation homes, and mountain residences, leading to the extirpation of the majority of original stands.
          <br />
          <br />
          This subspecies can hybridize with S. rubra subsp. venosa var. montana, although such occurrences were historically rare, and most sites where the two grew together have been lost. 
          Remaining populations of S. rubra ssp. jonesii are primarily found in cataract bogs along the escarpment region of North and South Carolina. 
          These habitats consist of thin layers of soil and sphagnum over bare rock, forming boggy aprons where water and acidic substrates accumulate along stream edges. 
          It can also occur in montane acidic seepage bogs associated with sphagnum moss, though unlike many other Sarracenia, it rarely grows on mats. 
          Currently, this subspecies survives at approximately ten sites across North and South Carolina, all of which are small and challenging to manage effectively for conservation.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-jonesii-f-viridescens',
        name: 'S.rubra ssp. jonesii f. viridescens',
        commonName: "Mountain Sweer Pitcher Plant 'Antho-free'",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [43, 44] },
        color: SPECIES_COLORS.yellow,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_05565.jpg',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia&limit=1&offset=5&taxonid=4611',
          distribution: `Populations of Sarracenia rubra subsp. jonesii f. viridescens have been documented in Henderson County, North Carolina. 
          Additional scattered populations were discovered by Donald Schnell near Caesars Head Mountain in Pickens County, South Carolina. 
          Unlike many of the anthocyanin-free forms of other Sarracenia species, this variety historically formed significant stands and outnumbered typical red-colored S. rubra ssp. jonesii in some populations. 
          Both in the wild and in cultivation, this form is at least as vigorous as the typical subspecies and reproduces effectively. Unfortunately, most of the documented populations have been lost due to poaching and habitat destruction. 
          Remaining populations require immediate protection to ensure their survival.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-ssp-wherryi',
        name: 'S.rubra ssp. wherryi',
        commonName: "not sure what to call this",
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [16, 24, 55, 67] },
        color: SPECIES_COLORS.lightblue,
        info: createInfo({
          imageUrl: 'https://fsus.ncbg.unc.edu/img/orig/amc/amc_07077.jpg',
          photographer: 'Alan Cressler',
          sourceUrl: 'https://fsus.ncbg.unc.edu/main.php?pg=show-taxon.php&&plantname=Sarracenia&limit=1&offset=2&taxonid=4608',
          distribution: `Sarracenia rubra ssp. wherryi is confined to a small region of southwestern Alabama, extending from Washington County to Covington and Baldwin counties, with a few populations just over the Mississippi state line. 
          In Florida, its range comes into contact with S. rubra ssp. gulfensis, particularly along the Escambia and Okaloosa county line. 
          Across most of its range, S. rubra subsp. wherryi occurs in open, wet sandy or peaty clearings, seepage areas, ditches in pine bogs, and pine savannahs, and it is often visible along roadside ditches. 
          Its populations are highly patchy, but it frequently grows near S. leucophylla and S. purpurea, and although hybrids are rare, occasional complex backcrosses can be observed.
          <br />
          <br />
          This subspecies has become increasingly rare in the wild, with the number of known populations declining by roughly half over the last 20 years. 
          Some populations persist in well-managed preserves, such as the Splinter Hill Bog Preserve, as well as on private land. 
          Close monitoring is needed to ensure the continued survival of this plant in its natural range.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
        })
      }),
      createVarietyLayer({
        id: 'sarracenia-rubra-var-viatorum',
        name: 'S.rubra var. viatorum',
        commonName: 'Roadside Pitcher Plant',
        dataUrl: SARRACENIA_VIEWING_LOCATIONS,
        filter: { field: 'id', values: [48, 96] },
        color: SPECIES_COLORS.red,
        info: createInfo({
          imageUrl: 'https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0609/2571.jpeg',
          photographer: '2009 Barry Rice',
          sourceUrl: 'https://calphotos.berkeley.edu/cgi/img_query?seq_num=287813&one=T',
          distribution: `Sarracenia rubra ssp. viatorum is found across the Fall Line sandhills of central Georgia and adjacent areas of South Carolina. 
          In Georgia, it occurs in Chattahoochee, Crawford, Macon, Marion, Muscogee, Peach, Richmond, Talbot, and Taylor counties. 
          Historical herbarium records show that populations also existed in Bibb, Burke, Columbia, Early, Jefferson, Jones, Montgomery, Sumter, and Twiggs counties, though these populations are extirpated. 
          The eastern extent of its range beyond Georgia is unclear. Current populations are known from Aiken County, South Carolina, and possibly Lexington County.
          <br />
          <br />
          An anthocyanin-free form of this subspecies was cultivated at the Atlanta Botanical Gardens, although to my knowledge it has not yet been formally named.`,
          habitat: 'Roadside ditches, wet pine flatwoods',
          conservationStatus: 'Endangered',
          source: DEFAULT_SOURCE
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
