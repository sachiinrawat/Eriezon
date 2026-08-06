export interface CropCalendarStage {
  stage: string;
  period: string;
  action: string;
  targetPests: string;
  recommendation: string;
}

export interface CropSolutionData {
  _id: string;
  name: string;
  slug: string;
  scientificName: string;
  description: string;
  cropImage: string;
  calendar: CropCalendarStage[];
  commonPests: { name: string; type: string; solution: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recommendedProducts?: any[];
}

export const FALLBACK_CROPS: CropSolutionData[] = [
  {
    _id: "crop-wheat",
    name: "Wheat",
    slug: "wheat",
    scientificName: "Triticum aestivum",
    description: "One of the most important rabi cereal crops in India, requiring cool weather during growth and warm sunny days during ripening.",
    cropImage: "/crops/wheat.jpg",
    calendar: [
      { stage: "Sowing / Pre-emergence", period: "November", action: "Weed Control", targetPests: "Phalaris minor, Chenopodium album", recommendation: "Apply pre-emergence herbicide within 0-3 days of sowing." },
      { stage: "Tillering / Crown Root", period: "December", action: "Fungal Protection & Nutrition", targetPests: "Rust, Powdery Mildew", recommendation: "Monitor humidity; apply broad-spectrum systemic fungicide if symptoms appear." },
      { stage: "Jointing to Booting", period: "January", action: "Insect Protection", targetPests: "Aphids, Termites", recommendation: "Apply systemic insecticide at early infestation levels." },
      { stage: "Flowering & Grain Filling", period: "February - March", action: "Yield Enhancement", targetPests: "Brown Rust, Blight", recommendation: "Foliar spray of growth regulator and triazole fungicides for disease-free grains." }
    ],
    commonPests: [
      { name: "Yellow Rust", type: "Fungal Disease", solution: "Triazole-based systemic fungicide spray." },
      { name: "Wheat Aphids", type: "Insect Pest", solution: "Systemic neonicotinoid insecticide." },
      { name: "Phalaris minor (Gulli Danda)", type: "Narrow-leaf Weed", solution: "Selective post-emergence herbicide." }
    ]
  },
  {
    _id: "crop-rice",
    name: "Rice",
    slug: "rice",
    scientificName: "Oryza sativa",
    description: "The primary staple food crop of India, grown extensively under waterlogged paddy conditions in both kharif and summer seasons.",
    cropImage: "/crops/rice.jpg",
    calendar: [
      { stage: "Nursery / Transplanting", period: "June - July", action: "Weed & Grub Control", targetPests: "Barnyard grass, Sedges", recommendation: "Apply selective pre-emergence herbicide in waterlogged soil." },
      { stage: "Tillering Stage", period: "August", action: "Stem Borer & Leaf Folder Control", targetPests: "Yellow Stem Borer", recommendation: "Apply granular insecticide for systemic long-term protection." },
      { stage: "Panicle Initiation", period: "September", action: "Blast & Blight Prevention", targetPests: "Neck Blast, Bacterial Leaf Blight", recommendation: "Apply preventative systemic fungicide spray at first sign of lesions." },
      { stage: "Grain Filling & Maturity", period: "October", action: "Brown Plant Hopper (BPH) control", targetPests: "Plant Hoppers", recommendation: "Spray target-specific contact-systemic insecticides directly at the base of plants." }
    ],
    commonPests: [
      { name: "Stem Borer", type: "Insect Pest", solution: "Granular insecticide or systemic foliar spray." },
      { name: "Blast Disease", type: "Fungal Disease", solution: "Systemic fungicide targeting blast spores." },
      { name: "Echinochloa (Grass)", type: "Weed", solution: "Early post-emergence selective herbicide." }
    ]
  },
  {
    _id: "crop-cotton",
    name: "Cotton",
    slug: "cotton",
    scientificName: "Gossypium hirsutum",
    description: "A major commercial cash crop in India, widely vulnerable to sucking pests and bollworms, requiring intensive crop protection management.",
    cropImage: "/crops/cotton.jpg",
    calendar: [
      { stage: "Early Vegetative", period: "June - July", action: "Sucking Pest Control", targetPests: "Jassids, Aphids, Thrips", recommendation: "Apply systemic neonicotinoid sprays to protect young foliage." },
      { stage: "Squaring & Flowering", period: "August - September", action: "Bollworm & Whitefly control", targetPests: "Pink Bollworm, Whiteflies", recommendation: "Apply insect growth regulators and contact insecticides sequentially." },
      { stage: "Boll Development", period: "October", action: "Boll Rot prevention", targetPests: "Fungal Boll Rot, Spodoptera", recommendation: "Combine protective fungicide with lepidopteran insecticide." },
      { stage: "Boll Bursting", period: "November", action: "Defoliation & Clean picking", targetPests: "Sucking pests, Bollworms", recommendation: "Ensure clean fields; avoid late-stage pesticide sprays to prevent lint staining." }
    ],
    commonPests: [
      { name: "Whitefly", type: "Insect Pest", solution: "Insect growth regulator combined with contact insecticide." },
      { name: "Pink Bollworm", type: "Insect Pest", solution: "Advanced biotech seeds coupled with targeted chemical sprays." },
      { name: "Alternaria Leaf Spot", type: "Fungal Disease", solution: "Copper or triazole-based protective fungicide." }
    ]
  },
  {
    _id: "crop-soybean",
    name: "Soybean",
    slug: "soybean",
    scientificName: "Glycine max",
    description: "A key oilseed and protein-rich kharif crop grown predominantly in central India, susceptible to weeds and leaf-eating caterpillars.",
    cropImage: "/crops/soybean.jpg",
    calendar: [
      { stage: "Sowing / Pre-emergence", period: "June", action: "Broadleaf and Grass Weed Control", targetPests: "Echinochloa, Commelina", recommendation: "Spray pre-emergence herbicide immediately after sowing." },
      { stage: "Vegetative Stage", period: "July", action: "Girdle Beetle & Leaf Folder Control", targetPests: "Girdle Beetle, Semilooper", recommendation: "Spray systemic insecticide as soon as ring-like girdles appear on stems." },
      { stage: "Flowering & Podding", period: "August", action: "Spodoptera caterpillar control", targetPests: "Tobacco Caterpillar", recommendation: "Apply advanced larvicide to prevent pod damage and defoliation." },
      { stage: "Pod Maturity", period: "September", action: "Rust & Anthracnose prevention", targetPests: "Rust, Pod Blight", recommendation: "Apply combination systemic and contact fungicide spray." }
    ],
    commonPests: [
      { name: "Girdle Beetle", type: "Insect Pest", solution: "Systemic insecticide applied during vegetative phase." },
      { name: "Semilooper", type: "Insect Pest", solution: "Lepidopteran specific contact insecticide." },
      { name: "Anthracnose / Pod Blight", type: "Fungal Disease", solution: "Broad-spectrum systemic fungicide." }
    ]
  },
  {
    _id: "crop-maize",
    name: "Maize",
    slug: "maize",
    scientificName: "Zea mays",
    description: "A highly versatile crop grown across tropical and temperate climates. Severely threatened by the invasive Fall Armyworm pest.",
    cropImage: "/crops/maize.jpg",
    calendar: [
      { stage: "Seedling to Early whorl", period: "July", action: "Fall Armyworm Prevention", targetPests: "Fall Armyworm (FAW)", recommendation: "Apply granular insecticide in the whorls; follow up with systemic sprays." },
      { stage: "Late Vegetative / Knee High", period: "August", action: "Stem Borer & Leaf Blight", targetPests: "Maize Stem Borer, Turcicum Blight", recommendation: "Apply leaf protection fungicides and contact insecticides directly into whorls." },
      { stage: "Tasseling & Silking", period: "September", action: "Cob Borer & Leaf Blight control", targetPests: "Cob Borer", recommendation: "Foliar spray of broad-spectrum insecticides; maintain field drainage." }
    ],
    commonPests: [
      { name: "Fall Armyworm (FAW)", type: "Insect Pest", solution: "Insecticide applied directly inside the leaf whorl." },
      { name: "Turcicum Leaf Blight", type: "Fungal Disease", solution: "Preventative fungicide sprays during humid weather." }
    ]
  },
  {
    _id: "crop-sugarcane",
    name: "Sugarcane",
    slug: "sugarcane",
    scientificName: "Saccharum officinarum",
    description: "A long-duration cash crop requiring heavy watering and robust protection against shoot borers and red rot disease.",
    cropImage: "/crops/sugarcane.jpg",
    calendar: [
      { stage: "Sett Sowing & Tillering", period: "March - April", action: "Termite & Shoot Borer Control", targetPests: "Termites, Early Shoot Borer", recommendation: "Treat setts before planting; apply soil systemic granular insecticides." },
      { stage: "Grand Growth Phase", period: "July - September", action: "Internode & Top Shoot Borer", targetPests: "Top Borer, Pyrilla", recommendation: "Release bio-agents or apply systemic sprays to control sucking pests and borers." },
      { stage: "Maturity & Harvest", period: "December - February", action: "Red Rot Prevention", targetPests: "Red Rot, Wilt", recommendation: "Ensure proper drainage; avoid planting infected setts; spray copper fungicides." }
    ],
    commonPests: [
      { name: "Early Shoot Borer", type: "Insect Pest", solution: "Granular soil application or systemic drench." },
      { name: "Red Rot", type: "Fungal Disease", solution: "Preventative crop rotation; field sanitation; copper fungicides." }
    ]
  },
  {
    _id: "crop-tomato",
    name: "Tomato",
    slug: "tomato",
    scientificName: "Solanum lycopersicum",
    description: "A major commercial vegetable crop that requires intense disease management, specifically against blights and fruit borers.",
    cropImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop",
    calendar: [
      { stage: "Early Transplanting", period: "Year-round", action: "Damping off & Sucking pest control", targetPests: "Damping off, Whiteflies, Thrips", recommendation: "Soil drench with copper fungicides; spray systemic insecticides." },
      { stage: "Vegetative & Flowering", period: "Mid-season", action: "Early & Late Blight prevention", targetPests: "Early Blight, Late Blight", recommendation: "Apply preventative contact fungicide sprays weekly under humid conditions." },
      { stage: "Fruiting & Harvest", period: "Late-season", action: "Fruit Borer control", targetPests: "Tomato Fruit Borer (Helicoverpa)", recommendation: "Spray contact and systemic larvicide; pick infected fruits regularly." }
    ],
    commonPests: [
      { name: "Fruit Borer", type: "Insect Pest", solution: "Targeted foliar larvicide sprays." },
      { name: "Late Blight", type: "Fungal Disease", solution: "Advanced contact-systemic combination fungicides." }
    ]
  },
  {
    _id: "crop-potato",
    name: "Potato",
    slug: "potato",
    scientificName: "Solanum tuberosum",
    description: "Grown extensively in northern India during winters, heavily threatened by late blight epidemic under foggy conditions.",
    cropImage: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop",
    calendar: [
      { stage: "Planting & Emergence", period: "October - November", action: "Soil disease & Weed control", targetPests: "Grubs, Chenopodium weed", recommendation: "Tuber treatment with fungicides; apply selective pre-emergence herbicides." },
      { stage: "Tuberization Stage", period: "December", action: "Early & Late Blight protection", targetPests: "Early Blight, Late Blight", recommendation: "Preventative spray of broad-spectrum fungicides; monitor cold foggy nights." },
      { stage: "Bulking & Maturation", period: "January - February", action: "Late Blight control & Dehaulming", targetPests: "Late Blight, Aphids", recommendation: "Spray highly systemic fungicides if late blight lesions are spotted." }
    ],
    commonPests: [
      { name: "Late Blight of Potato", type: "Fungal Disease", solution: "Systemic combination fungicides sprayed immediately on alert." },
      { name: "Potato Aphids", type: "Insect Pest", solution: "Systemic insecticides to prevent virus transmission." }
    ]
  },
  {
    _id: "crop-onion",
    name: "Onion",
    slug: "onion",
    scientificName: "Allium cepa",
    description: "Highly sensitive bulb crop, requiring specialized protection against thrips and purple blotch disease.",
    cropImage: "/crops/onion.jpg",
    calendar: [
      { stage: "Transplanting & Sowing", period: "Dec - Jan", action: "Weed Control", targetPests: "Broadleaf weeds", recommendation: "Apply selective post-emergence herbicide 15-20 days after transplanting." },
      { stage: "Active Growth Stage", period: "Feb - March", action: "Thrips & Purple Blotch Control", targetPests: "Onion Thrips, Purple Blotch", recommendation: "Foliar spray combining systemic insecticide and triazole fungicide." }
    ],
    commonPests: [
      { name: "Onion Thrips", type: "Insect Pest", solution: "Systemic foliar insecticide with a good spreading agent." },
      { name: "Purple Blotch", type: "Fungal Disease", solution: "Triazole-based systemic fungicide sprays." }
    ]
  },
  {
    _id: "crop-chilli",
    name: "Chilli",
    slug: "chilli",
    scientificName: "Capsicum annuum",
    description: "High-value spice crop, severely impacted by thrips, mites, and dieback/fruit rot disease complexes.",
    cropImage: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=800&auto=format&fit=crop",
    calendar: [
      { stage: "Vegetative Stage", period: "July - August", action: "Sucking Pest Control", targetPests: "Thrips, Mites, Aphids", recommendation: "Apply combination miticide-insecticide sprays; use sticky traps." },
      { stage: "Flowering & Fruit Rot", period: "September - October", action: "Dieback & Fruit Rot Control", targetPests: "Dieback, Anthracnose", recommendation: "Foliar spray of broad-spectrum systemic fungicide at early flowering." }
    ],
    commonPests: [
      { name: "Chilli Thrips & Mites", type: "Insect Pest", solution: "Specialized miticides and contact-systemic insecticides." },
      { name: "Dieback / Anthracnose", type: "Fungal Disease", solution: "Combination protective-curative fungicides." }
    ]
  },
  {
    _id: "crop-groundnut",
    name: "Groundnut",
    slug: "groundnut",
    scientificName: "Arachis hypogaea",
    description: "Grown as a kharif crop, groundnut requires specialized seed treatments and control over leaf spots and white grubs.",
    cropImage: "/crops/groundnut.jpg",
    calendar: [
      { stage: "Seedling & Emergence", period: "June", action: "White Grub Control", targetPests: "White Grub, Collar Rot", recommendation: "Seed treatment with systemic insecticide; soil application of granular insecticide." },
      { stage: "Flowering & Pegging", period: "August", action: "Tikka Leaf Spot Control", targetPests: "Tikka Leaf Spot, Rust", recommendation: "Spray protective-systemic broad spectrum fungicides at first spotting." }
    ],
    commonPests: [
      { name: "Tikka Leaf Spot", type: "Fungal Disease", solution: "Broad-spectrum triazole or strobilurin fungicide." },
      { name: "White Grub", type: "Insect Pest", solution: " granular soil insecticide application." }
    ]
  },
  {
    _id: "crop-pulses",
    name: "Pulses",
    slug: "pulses",
    scientificName: "Fabaceae",
    description: "Includes Chickpea, Pigeon Pea, and Black Gram. Critical nitrogen-fixing crops heavily impacted by pod borers.",
    cropImage: "/crops/pulses.jpg",
    calendar: [
      { stage: "Vegetative Phase", period: "Mid-season", action: "Wilt Prevention", targetPests: "Fusarium Wilt, Pod Fly", recommendation: "Ensure seed treatment; apply systemic crop drench for wilt prevention." },
      { stage: "Podding Phase", period: "Late-season", action: "Gram Pod Borer Control", targetPests: "Pod Borer (Helicoverpa)", recommendation: "Spray highly potent contact-stomach action larvicides at first larval hatch." }
    ],
    commonPests: [
      { name: "Gram Pod Borer", type: "Insect Pest", solution: "Foliar spray of advanced larvicides during flowering-podding transition." },
      { name: "Fusarium Wilt", type: "Fungal Disease", solution: "Clean cultivation; seed treatment with bio-fungicides and systemic chemicals." }
    ]
  }
];
