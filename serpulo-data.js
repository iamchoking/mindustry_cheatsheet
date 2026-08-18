window.serpuloData = (() => {
  const S = "assets/serpulo";

  const icons = {
    copper: `${S}/resources/item-copper.png`,
    lead: `${S}/resources/item-lead.png`,
    coal: `${S}/resources/item-coal.png`,
    titanium: `${S}/resources/item-titanium.png`,
    metaglass: `${S}/resources/item-metaglass.png`,
    plastanium: `${S}/resources/item-plastanium.png`,
    spore: `${S}/resources/item-spore-pod.png`,
    pyratite: `${S}/resources/item-pyratite.png`,
    blast: `${S}/resources/item-blast-compound.png`,
    scrap: `${S}/resources/item-scrap.png`,
    oil: `${S}/resources/liquid-oil.png`,
    cryofluid: `${S}/resources/liquid-cryofluid.png`
  };

  const sectors = [
    ["groundZero", "Ground Zero"],
    ["frozenForest", "Frozen Forest"],
    ["crateredBattleground", "Cratered Battleground"],
    ["biomassFacility", "Biomass Synthesis Facility"],
    ["ruinousShores", "Ruinous Shores"],
    ["windsweptIslands", "Windswept Islands"],
    ["stainedMountains", "Stained Mountains"],
    ["fungalPass", "Fungal Pass"],
    ["saltFlats", "Salt Flats"],
    ["coastline", "Humid Coastline"],
    ["tarFields", "Tar Fields"],
    ["overgrowth", "Overgrowth"],
    ["frontier", "Frontier"],
    ["nuclearComplex", "Nuclear Production Complex"],
    ["impact0078", "Impact 0078"],
    ["desolateRift", "Desolate Rift"],
    ["mycelialBastion", "Mycelial Bastion"],
    ["navalFortress", "Naval Fortress"],
    ["littoralShipyard", "Littoral Shipyard"],
    ["planetaryTerminal", "Planetary Launch Terminal"]
  ];

  const blocks = [
    {
      id: "mechanical-drill", name: "Mechanical Drill", category: "production", size: 2, sector: "groundZero", accent: "#d99d73",
      input: [], output: [
        { icon: "scrap", value: "0.4" }, { icons: ["copper", "lead"], value: "0.37" }, { icon: "coal", value: "0.34" }
      ],
      booster: { input: [{ icon: "water", value: "3" }], output: [{ icon: "scrap", value: "0.64" }, { icons: ["copper", "lead"], value: "0.59" }, { icon: "coal", value: "0.55" }] },
      description: "When placed on ore, outputs items at a slow pace indefinitely. Only capable of mining basic resources."
    },
    {
      id: "pneumatic-drill", name: "Pneumatic Drill", category: "production", size: 2, sector: "frozenForest", accent: "#8da1e3",
      input: [], output: [
        { icon: "scrap", value: "0.6" }, { icons: ["copper", "lead"], value: "0.53" }, { icon: "coal", value: "0.48" }, { icon: "titanium", value: "0.44" }
      ],
      booster: { input: [{ icon: "water", value: "3.5" }], output: [{ icon: "scrap", value: "0.96" }, { icons: ["copper", "lead"], value: "0.85" }, { icon: "coal", value: "0.77" }, { icon: "titanium", value: "0.7" }] },
      description: "An improved drill, capable of mining titanium. Mines at a faster pace than a mechanical drill."
    },
    {
      id: "laser-drill", name: "Laser Drill", category: "production", size: 3, sector: "stainedMountains", accent: "#b9a4e8",
      input: [{ kind: "power", value: "66" }], output: [
        { icon: "scrap", value: "1.93" }, { icons: ["copper", "lead"], value: "1.64" }, { icon: "coal", value: "1.42" }, { icon: "titanium", value: "1.26" }, { icon: "thorium", value: "1.13" }
      ],
      booster: { input: [{ icon: "water", value: "4.8" }], output: [{ icon: "scrap", value: "3.09" }, { icons: ["copper", "lead"], value: "2.62" }, { icon: "coal", value: "2.27" }, { icon: "titanium", value: "2.01" }, { icon: "thorium", value: "1.8" }] },
      description: "Allows drilling even faster through laser technology, but requires power. Capable of mining thorium."
    },
    {
      id: "blast-drill", name: "Airblast Drill", category: "production", size: 4, sector: "nuclearComplex", accent: "#f3a1c6",
      input: [{ kind: "power", value: "180" }], output: [
        { icon: "scrap", value: "3.43" }, { icons: ["copper", "lead"], value: "2.91" }, { icon: "coal", value: "2.53" }, { icon: "titanium", value: "2.23" }, { icon: "thorium", value: "2" }
      ],
      booster: { input: [{ icon: "water", value: "6" }], output: [{ icon: "scrap", value: "6.17" }, { icons: ["copper", "lead"], value: "5.24" }, { icon: "coal", value: "4.55" }, { icon: "titanium", value: "4.02" }, { icon: "thorium", value: "3.6" }] },
      description: "The ultimate drill. Requires large amounts of power."
    },
    {
      id: "mechanical-pump", name: "Mechanical Pump", category: "production", size: 1, sector: "groundZero", accent: "#7bb8db",
      input: [], output: [{ kind: "liquid", value: "7" }],
      description: "Pumps and outputs liquids. Does not require power."
    },
    {
      id: "rotary-pump", name: "Rotary Pump", category: "production", size: 2, sector: "windsweptIslands", accent: "#7bb8db",
      input: [{ kind: "power", value: "18" }], output: [{ kind: "liquid", value: "48" }],
      description: "Pumps and outputs liquids. Requires power."
    },
    {
      id: "impulse-pump", name: "Impulse Pump", category: "production", size: 3, sector: "stainedMountains", accent: "#7bb8db",
      input: [{ kind: "power", value: "78" }], output: [{ kind: "liquid", value: "118.8" }],
      description: "Pumps and outputs liquids."
    },
    {
      id: "water-extractor", name: "Water Extractor", category: "production", size: 2, sector: "saltFlats", accent: "#596ab8",
      input: [{ kind: "power", value: "90" }], output: [{ icon: "water", value: "6.6" }],
      description: "Extracts groundwater. Used in locations with no surface water available."
    },
    {
      id: "cultivator", name: "Cultivator", category: "production", size: 2, sector: "biomassFacility", accent: "#7457ce",
      input: [{ icon: "water", value: "18" }, { kind: "power", value: "80" }], output: [{ icon: "spore", value: "0.6" }],
      description: "Cultivates tiny concentrations of atmospheric spores into spore pods."
    },
    {
      id: "oil-extractor", name: "Oil Extractor", category: "production", size: 3, sector: "tarFields", accent: "#313131",
      input: [{ icon: "sand", value: "1" }, { icon: "water", value: "9" }, { kind: "power", value: "180" }], output: [{ icon: "oil", value: "15" }],
      description: "Uses large amounts of power, sand and water to drill for oil."
    },

    {
      id: "combustion-generator", name: "Combustion Generator", category: "power", size: 1, sector: "frozenForest", accent: "#f4a261",
      input: [{ icon: "coal", value: "0.5" }, { icon: "spore", value: "0.5" }, { icon: "blast", value: "0.5" }, { icon: "pyratite", value: "0.17" }],
      output: [{ kind: "power", value: "60" }, { kind: "power", value: "69" }, { kind: "power", value: "24" }, { kind: "power", value: "84" }],
      description: "Generates power by burning flammable materials, such as coal."
    },
    {
      id: "steam-generator", name: "Steam Generator", category: "power", size: 2, sector: "crateredBattleground", accent: "#9bbbd0",
      input: [{ icon: "coal", value: "0.67" }, { icon: "spore", value: "0.67" }, { icon: "blast", value: "0.67" }, { icon: "pyratite", value: "0.22" }, { icon: "water", value: "6" }],
      output: [{ kind: "power", value: "330" }, { kind: "power", value: "379.5" }, { kind: "power", value: "132" }, { kind: "power", value: "462" }],
      description: "Generates power by burning flammable materials and converting water to steam."
    },
    {
      id: "thermal-generator", name: "Thermal Generator", category: "power", size: 2, sector: "stainedMountains", accent: "#ef8c62",
      input: [{ kind: "heat", value: "100%" }], output: [{ kind: "power", value: "108" }],
      description: "Generates power when placed in hot locations."
    },
    {
      id: "differential-generator", name: "Differential Generator", category: "power", size: 3, sector: "stainedMountains", accent: "#8ed5e8",
      input: [{ icon: "pyratite", value: "0.27" }, { icon: "cryofluid", value: "6" }], output: [{ kind: "power", value: "1080" }],
      description: "Generates large amounts of energy. Utilizes the temperature difference between cryofluid and burning pyratite."
    },
    {
      id: "rtg-generator", name: "RTG Generator", category: "power", size: 2, sector: "nuclearComplex", accent: "#f6b1cb",
      input: [{ icon: "thorium", value: "0.07" }, { icon: "phase", value: "0.005" }], output: [{ kind: "power", value: "270" }, { kind: "power", value: "162" }],
      description: "Uses the heat of decaying radioactive compounds to produce energy at a slow rate."
    },
    {
      id: "solar-panel", name: "Solar Panel", category: "power", size: 1, sector: "frozenForest", accent: "#f3d36d",
      input: [], output: [{ kind: "power", value: "7.2" }],
      description: "Provides a small amount of power from the sun."
    },
    {
      id: "solar-panel-large", name: "Large Solar Panel", category: "power", size: 3, sector: "impact0078", accent: "#f3d36d",
      input: [], output: [{ kind: "power", value: "96" }],
      description: "Provides a small amount of power from the sun. More efficient than the standard solar panel."
    },
    {
      id: "thorium-reactor", name: "Thorium Reactor", category: "power", size: 3, sector: "nuclearComplex", accent: "#f9a3c7",
      input: [{ icon: "thorium", value: "0.17" }, { icon: "cryofluid", value: "1.33" }], output: [{ kind: "power", value: "900" }],
      description: "Generates significant amounts of power from thorium. Requires constant cooling. Will explode violently if insufficient amounts of coolant are supplied."
    },
    {
      id: "impact-reactor", name: "Impact Reactor", category: "power", size: 4, sector: "nuclearComplex", accent: "#ff795e",
      input: [{ icon: "blast", value: "0.43" }, { icon: "cryofluid", value: "15" }, { kind: "power", value: "1500" }], output: [{ kind: "power", value: "7800" }],
      description: "Creates massive amounts of power at peak efficiency. Requires a significant power input to kickstart the process."
    },

    {
      id: "graphite-press", name: "Graphite Press", category: "crafting", size: 2, sector: "groundZero", accent: "#b2c6d2",
      input: [{ icon: "coal", value: "1.33" }], output: [{ icon: "graphite", value: "0.67" }],
      description: "Compresses coal into graphite."
    },
    {
      id: "multi-press", name: "Multi-Press", category: "crafting", size: 3, sector: "tarFields", accent: "#b2c6d2",
      input: [{ icon: "coal", value: "6" }, { icon: "water", value: "6" }, { kind: "power", value: "108" }], output: [{ icon: "graphite", value: "4" }],
      description: "Compresses coal into graphite. Requires water as coolant."
    },
    {
      id: "silicon-smelter", name: "Silicon Smelter", category: "crafting", size: 2, sector: "frozenForest", accent: "#d5d7df",
      input: [{ icon: "coal", value: "1.5" }, { icon: "sand", value: "3" }, { kind: "power", value: "30" }], output: [{ icon: "silicon", value: "1.5" }],
      description: "Refines silicon from sand and coal."
    },
    {
      id: "silicon-crucible", name: "Silicon Crucible", category: "crafting", size: 3, sector: "tarFields", accent: "#f4a261",
      input: [{ icon: "coal", value: "2.67" }, { icon: "sand", value: "4" }, { icon: "pyratite", value: "0.67" }, { kind: "power", value: "240" }], output: [{ icon: "silicon", value: "5.33" }],
      description: "Refines silicon from sand and coal, using pyratite as an additional heat source. More efficient in hot locations."
    },
    {
      id: "kiln", name: "Kiln", category: "crafting", size: 2, sector: "crateredBattleground", accent: "#ebeef5",
      input: [{ icon: "lead", value: "2" }, { icon: "sand", value: "2" }, { kind: "power", value: "36" }], output: [{ icon: "metaglass", value: "2" }],
      description: "Smelts sand and lead into metaglass."
    },
    {
      id: "plastanium-compressor", name: "Plastanium Compressor", category: "crafting", size: 2, sector: "windsweptIslands", accent: "#cbd97f",
      input: [{ icon: "titanium", value: "2" }, { icon: "oil", value: "15" }, { kind: "power", value: "180" }], output: [{ icon: "plastanium", value: "1" }],
      description: "Produces plastanium from oil and titanium."
    },
    {
      id: "phase-weaver", name: "Phase Weaver", category: "crafting", size: 2, sector: "impact0078", accent: "#f4ba6e",
      input: [{ icon: "thorium", value: "2" }, { icon: "sand", value: "5" }, { kind: "power", value: "300" }], output: [{ icon: "phase", value: "0.5" }],
      description: "Synthesizes phase fabric from thorium and sand."
    },
    {
      id: "surge-smelter", name: "Surge Smelter", category: "crafting", size: 3, sector: "coastline", accent: "#f3e979",
      input: [{ icon: "copper", value: "2.4" }, { icon: "lead", value: "3.2" }, { icon: "titanium", value: "1.6" }, { icon: "silicon", value: "2.4" }, { kind: "power", value: "240" }], output: [{ icon: "surge", value: "0.8" }],
      description: "Fuses titanium, lead, silicon and copper into surge alloy."
    },
    {
      id: "cryofluid-mixer", name: "Cryofluid Mixer", category: "crafting", size: 2, sector: "stainedMountains", accent: "#6ecdec",
      input: [{ icon: "titanium", value: "0.5" }, { icon: "water", value: "12" }, { kind: "power", value: "60" }], output: [{ icon: "cryofluid", value: "12" }],
      description: "Mixes water and fine titanium powder to produce cryofluid."
    },
    {
      id: "pyratite-mixer", name: "Pyratite Mixer", category: "crafting", size: 2, sector: "crateredBattleground", accent: "#ffaa5f",
      input: [{ icon: "coal", value: "0.75" }, { icon: "lead", value: "1.5" }, { icon: "sand", value: "1.5" }, { kind: "power", value: "12" }], output: [{ icon: "pyratite", value: "0.75" }],
      description: "Mixes coal, lead and sand into pyratite."
    },
    {
      id: "blast-mixer", name: "Blast Mixer", category: "crafting", size: 2, sector: "stainedMountains", accent: "#ff795e",
      input: [{ icon: "pyratite", value: "0.75" }, { icon: "spore", value: "0.75" }, { kind: "power", value: "24" }], output: [{ icon: "blast", value: "0.75" }],
      description: "Produces blast compound from pyratite and spore pods."
    },
    {
      id: "melter", name: "Melter", category: "crafting", size: 1, sector: "stainedMountains", accent: "#f07d4f",
      input: [{ icon: "scrap", value: "6" }, { kind: "power", value: "60" }], output: [{ icon: "slag", value: "12" }],
      description: "Melts down scrap into slag."
    },
    {
      id: "separator", name: "Separator", category: "crafting", size: 2, sector: "stainedMountains", accent: "#8da1e3",
      input: [{ icon: "slag", value: "4" }, { kind: "power", value: "66" }], output: [{ icon: "copper", value: "0.71" }, { icon: "lead", value: "0.43" }, { icons: ["graphite", "titanium"], value: "0.29" }],
      description: "Separates slag into its mineral components."
    },
    {
      id: "disassembler", name: "Disassembler", category: "crafting", size: 3, sector: "nuclearComplex", accent: "#f9a3c7",
      input: [{ icon: "scrap", value: "4" }, { icon: "slag", value: "7.2" }, { kind: "power", value: "240" }], output: [{ icon: "sand", value: "1.6" }, { icons: ["graphite", "titanium", "thorium"], value: "0.8" }],
      description: "Separates slag into trace amounts of exotic mineral components at low efficiency. Can produce thorium."
    },
    {
      id: "spore-press", name: "Spore Press", category: "crafting", size: 2, sector: "biomassFacility", accent: "#7457ce",
      input: [{ icon: "spore", value: "3" }, { kind: "power", value: "42" }], output: [{ icon: "oil", value: "18" }],
      description: "Compresses spore pods into oil."
    },
    {
      id: "pulverizer", name: "Pulverizer", category: "crafting", size: 1, sector: "stainedMountains", accent: "#f7cba4",
      input: [{ icon: "scrap", value: "1.5" }, { kind: "power", value: "30" }], output: [{ icon: "sand", value: "1.5" }],
      description: "Crushes scrap into fine sand."
    },
    {
      id: "coal-centrifuge", name: "Coal Centrifuge", category: "crafting", size: 2, sector: "tarFields", accent: "#4a4a4a",
      input: [{ icon: "oil", value: "6" }, { kind: "power", value: "42" }], output: [{ icon: "coal", value: "2" }],
      description: "Transforms oil into coal."
    }
  ];

  const groups = [
    { name: "Production", ids: ["mechanical-drill", "pneumatic-drill", "laser-drill", "blast-drill", ["mechanical-pump", "rotary-pump", "impulse-pump"], "water-extractor", "cultivator", "oil-extractor"] },
    { name: "Power", ids: ["combustion-generator", "steam-generator", "thermal-generator", "differential-generator", "rtg-generator", "solar-panel", "solar-panel-large", "thorium-reactor", "impact-reactor"] },
    { name: "Crafting", ids: ["graphite-press", "multi-press", "silicon-smelter", "silicon-crucible", "kiln", "plastanium-compressor", "phase-weaver", "surge-smelter", "cryofluid-mixer", "pyratite-mixer", "blast-mixer", "melter", "separator", "disassembler", "spore-press", "pulverizer", "coal-centrifuge"] }
  ];

  const waterCryo = (amount, multiplier) => [
    { icon: "water", amount, speed: `x${(1 + Number(amount) / 60 * 0.4 * multiplier).toFixed(2).replace(/0$/, "")}` },
    { icon: "cryofluid", amount, speed: `x${(1 + Number(amount) / 60 * 0.9 * multiplier).toFixed(2).replace(/0$/, "")}` }
  ];

  const turrets = [
    { id: "duo", name: "Duo", size: 1, range: 160, sector: "groundZero", accent: "#d99d73", cost: [["copper",35]], targets: "Ground / Air", description: "Fires alternating bullets at enemies.", boosters: waterCryo("6",10), ammo: [
      {icon:"copper",consumption:"1.5",rate:"3",damage:"9",dps:"27"}, {icon:"graphite",consumption:"0.6",rate:"2.4",damage:"18",dps:"43.2"}, {icon:"silicon",consumption:"0.9",rate:"4.5",damage:"12",dps:"54"}
    ]},
    { id: "scatter", name: "Scatter", size: 2, range: 220, sector: "groundZero", accent: "#8c7fa9", cost: [["copper",85],["lead",45]], targets: "Air", description: "Fires clumps of lead, scrap or metaglass flak at enemy aircraft.", boosters: waterCryo("12",5), ammo: [
      {icon:"scrap",consumption:"0.67",rate:"3.33",damage:"3 +33(R3)",dps:"10 +110(R3)"}, {icon:"lead",consumption:"1.67",rate:"6.67",damage:"3 +40.5(R1.88)",dps:"20 +270(R1.88)"}, {icon:"metaglass",consumption:"1.07",rate:"5.33",damage:"3 +45(R2.5) +5(x6)",dps:"16 +240(R2.5) +26.67(x6)"}
    ]},
    { id: "scorch", name: "Scorch", size: 1, range: 60, sector: "frozenForest", accent: "#ffaa5f", cost: [["copper",25],["graphite",22]], targets: "Ground", description: "Burns any ground enemies close to it. Highly effective at close range.", boosters: waterCryo("6",1.5), ammo: [
      {icon:"coal",consumption:"3.33",rate:"10",damage:"17",dps:"170"}, {icon:"pyratite",consumption:"1",rate:"10",damage:"30",dps:"300"}
    ]},
    { id: "hail", name: "Hail", size: 1, range: 235, sector: "crateredBattleground", accent: "#b2c6d2", cost: [["copper",40],["graphite",17]], targets: "Ground", description: "Fires small shells at ground enemies over long distances.", boosters: waterCryo("6",10), ammo: [
      {icon:"graphite",consumption:"1",rate:"1",damage:"20 +33(R2.34)",dps:"20 +33(R2.34)"}, {icon:"silicon",consumption:"0.4",rate:"1.2",damage:"20 +33(R2.34)",dps:"24 +39.6(R2.34)"}, {icon:"pyratite",consumption:"0.25",rate:"1",damage:"25 +45(R2.34)",dps:"25 +45(R2.34)"}
    ]},
    { id: "wave", name: "Wave", size: 2, range: 110, sector: "crateredBattleground", accent: "#596ab8", cost: [["metaglass",45],["lead",75],["copper",25]], targets: "Ground / Air", description: "Fires streams of liquid at enemies. Automatically extinguishes fires when supplied with water.", boosters: [], ammo: [
      {icon:"water",consumption:"20",rate:"20",damage:"0.2",dps:"4"}, {icon:"slag",consumption:"20",rate:"20",damage:"4",dps:"80"}, {icon:"cryofluid",consumption:"20",rate:"20",damage:"0.2",dps:"4"}, {icon:"oil",consumption:"20",rate:"20",damage:"0.2",dps:"4"}
    ]},
    { id: "lancer", name: "Lancer", size: 2, range: 165, sector: "stainedMountains", accent: "#8da1e3", cost: [["copper",60],["lead",70],["silicon",60],["titanium",30]], targets: "Ground", description: "Charges and fires powerful beams of energy at ground targets.", boosters: waterCryo("12",5), ammo: [
      {kind:"power",consumption:"360",rate:"0.75",damage:"140",dps:"105"}
    ]},
    { id: "arc", name: "Arc", size: 1, range: 90, sector: "frozenForest", accent: "#8da1e3", cost: [["copper",50],["lead",50]], targets: "Ground", description: "Fires arcs of electricity at ground targets.", boosters: waterCryo("6",5), ammo: [
      {kind:"power",consumption:"198",rate:"1.71",damage:"20",dps:"34.29"}
    ]},
    { id: "parallax", name: "Parallax", size: 2, range: 300, sector: "windsweptIslands", accent: "#8da1e3", cost: [["silicon",160],["titanium",110],["graphite",50]], targets: "Air", description: "Fires a tractor beam that pulls in air targets, damaging them in the process.", boosters: [], ammo: [
      {kind:"power",consumption:"198",rate:"cont.",damage:"–",dps:"30"}
    ]},
    { id: "swarmer", name: "Swarmer", size: 2, range: 240, sector: "overgrowth", accent: "#ff795e", cost: [["graphite",35],["titanium",35],["plastanium",45],["silicon",30]], targets: "Ground / Air", description: "Fires homing missiles at enemies.", boosters: waterCryo("18",5), ammo: [
      {icon:"blast",consumption:"1.4",rate:"7",damage:"10 +45(R3.75)",dps:"70 +315(R3.75)"}, {icon:"pyratite",consumption:"1.4",rate:"7",damage:"12 +45(R2.5)",dps:"84 +315(R2.5)"}, {icon:"surge",consumption:"1.75",rate:"7",damage:"18 +35(R3.13) +10(x2)",dps:"126 +245(R3.13) +70(x2)"}
    ]},
    { id: "salvo", name: "Salvo", size: 2, range: 190, sector: "stainedMountains", accent: "#8da1e3", cost: [["copper",100],["graphite",80],["titanium",50]], targets: "Ground / Air", description: "Fires quick salvos of bullets at enemies.", boosters: waterCryo("12",5), ammo: [
      {icon:"copper",consumption:"1.66",rate:"8.28",damage:"15",dps:"124.14"}, {icon:"graphite",consumption:"1.66",rate:"6.62",damage:"31",dps:"205.24"}, {icon:"pyratite",consumption:"1.66",rate:"8.28",damage:"25 +15(R2.75)",dps:"206.9 +124.14(R2.75)"}, {icon:"silicon",consumption:"2.48",rate:"12.41",damage:"23",dps:"285.52"}, {icon:"thorium",consumption:"2.07",rate:"8.28",damage:"28",dps:"231.72"}
    ]},
    { id: "segment", name: "Segment", size: 2, range: 180, sector: "impact0078", accent: "#f4ba6e", cost: [["silicon",130],["thorium",80],["phase",40],["titanium",40]], targets: "Projectiles", description: "Damages and destroys incoming projectiles. Laser projectiles are not targeted.", boosters: [], ammo: [
      {kind:"power",consumption:"480",rate:"7.5",damage:"30",dps:"225"}
    ]},
    { id: "tsunami", name: "Tsunami", size: 3, range: 190, sector: "navalFortress", accent: "#596ab8", cost: [["metaglass",100],["lead",400],["titanium",250],["thorium",100]], targets: "Ground / Air", description: "Fires powerful streams of liquid at enemies. Automatically extinguishes fires when supplied with water.", boosters: [], ammo: [
      {icon:"water",consumption:"100",rate:"40",damage:"0.2",dps:"8"}, {icon:"slag",consumption:"100",rate:"40",damage:"4.75",dps:"190"}, {icon:"cryofluid",consumption:"100",rate:"40",damage:"0.2",dps:"8"}, {icon:"oil",consumption:"100",rate:"40",damage:"0.2",dps:"8"}
    ]},
    { id: "fuse", name: "Fuse", size: 3, range: 90, sector: "overgrowth", accent: "#f9a3c7", cost: [["copper",225],["graphite",225],["thorium",100]], targets: "Ground / Air", description: "Fires three close-range piercing blasts at nearby enemies.", boosters: waterCryo("18",5), ammo: [
      {icon:"titanium",consumption:"0.19",rate:"2.23",damage:"66",dps:"147.18"}, {icon:"thorium",consumption:"0.11",rate:"1.71",damage:"105",dps:"180"}
    ]},
    { id: "ripple", name: "Ripple", size: 3, range: 290, sector: "stainedMountains", accent: "#b2c6d2", cost: [["copper",150],["graphite",135],["titanium",60]], targets: "Ground", description: "Shoots clusters of shells at ground enemies over long distances.", boosters: waterCryo("18",5), ammo: [
      {icon:"graphite",consumption:"1",rate:"2",damage:"40 +70(R2.81)",dps:"80 +140(R2.81)"}, {icon:"silicon",consumption:"0.4",rate:"2.4",damage:"40 +70(R2.81)",dps:"96 +168(R2.81)"}, {icon:"pyratite",consumption:"0.25",rate:"2",damage:"48 +90(R2.81)",dps:"96 +180(R2.81)"}, {icon:"blast",consumption:"0.25",rate:"2",damage:"40 +90(R4.69)",dps:"80 +180(R4.69)"}, {icon:"plastanium",consumption:"1",rate:"2",damage:"40 +90(R3.75) +14(x15)",dps:"80 +180(R3.75) +420(x15)"}
    ]},
    { id: "cyclone", name: "Cyclone", size: 3, range: 200, sector: "overgrowth", accent: "#f3e979", cost: [["copper",200],["titanium",125],["plastanium",80]], targets: "Ground / Air", description: "Fires explosive clumps of flak at nearby enemies.", boosters: waterCryo("18",5), ammo: [
      {icon:"metaglass",consumption:"2.4",rate:"4.8",damage:"6 +45(R3.13) +12(x4)",dps:"28.8 +216(R3.13) +230.4(x4)"}, {icon:"blast",consumption:"1.2",rate:"6",damage:"8 +45(R7.5)",dps:"48 +270(R7.5)"}, {icon:"plastanium",consumption:"1.5",rate:"6",damage:"8 +37.5(R5) +12(x6)",dps:"48 +225(R5) +432(x6)"}, {icon:"surge",consumption:"1.2",rate:"6",damage:"13 +75(R4.75) +13(x2)",dps:"78 +450(R4.75) +156(x2)"}
    ]},
    { id: "foreshadow", name: "Foreshadow", size: 4, range: 500, sector: "nuclearComplex", accent: "#f3e979", cost: [["copper",1000],["metaglass",600],["surge",300],["plastanium",200],["silicon",600]], inputs:[{kind:"power",amount:"600"}], targets: "Ground / Air", description: "Fires a large single-target bolt over long distances. Prioritizes enemies with higher max health.", boosters: waterCryo("60",0.4), ammo: [
      {icon:"surge",consumption:"1.5",rate:"0.3",damage:"1350",dps:"405"}
    ]},
    { id: "spectre", name: "Spectre", size: 4, range: 260, sector: "nuclearComplex", accent: "#f9a3c7", cost: [["copper",900],["graphite",300],["surge",250],["plastanium",175],["thorium",250]], targets: "Ground / Air", description: "Fires large bullets at air and ground targets.", boosters: waterCryo("60",0.5), ammo: [
      {icon:"graphite",consumption:"3.64",rate:"14.57",damage:"50",dps:"728.57"}, {icon:"thorium",consumption:"8.57",rate:"8.57",damage:"80",dps:"685.71"}, {icon:"pyratite",consumption:"2.86",rate:"8.57",damage:"70 +20(R3.13)",dps:"600 +171.43(R3.13)"}
    ]},
    { id: "meltdown", name: "Meltdown", size: 4, range: 195, sector: "nuclearComplex", accent: "#e95d7f", cost: [["copper",1200],["lead",350],["graphite",300],["surge",325],["silicon",325]], inputs:[{icon:"cryofluid",amount:"30"}], targets: "Ground / Air", description: "Charges and fires a persistent laser beam at nearby enemies. Requires coolant to operate.", boosters: [], ammo: [
      {kind:"power",consumption:"1020",rate:"cont.",damage:"–",dps:"936"}
    ]}
  ];

  const recipes = {
    additive: { blocks: [{id:"additive-reconstructor",name:"Additive Reconstructor"}], resources: [{unit:"$previous",value:1},{icon:"silicon",value:40},{icon:"graphite",value:40},{kind:"power",value:180}] },
    multiplicative: { blocks: [{id:"multiplicative-reconstructor",name:"Multiplicative Reconstructor"}], resources: [{unit:"$previous",value:1},{icon:"silicon",value:130},{icon:"titanium",value:80},{icon:"metaglass",value:40},{kind:"power",value:360}] },
    exponential: { blocks: [{id:"exponential-reconstructor",name:"Exponential Reconstructor"}], resources: [{unit:"$previous",value:1},{icon:"silicon",value:850},{icon:"titanium",value:750},{icon:"plastanium",value:650},{icon:"cryofluid",value:60},{kind:"power",value:780}] },
    tetrative: { blocks: [{id:"tetrative-reconstructor",name:"Tetrative Reconstructor"}], resources: [{unit:"$previous",value:1},{icon:"silicon",value:1000},{icon:"plastanium",value:600},{icon:"surge",value:500},{icon:"phase",value:350},{icon:"cryofluid",value:180},{kind:"power",value:1500}] }
  };

  const unit = (id, name, sector, health, range, dps, description, detail) => ({id,name,sector,stats:{health,range:String(range),dps:String(dps),...(detail?{detail}: {})},description});
  const branch = (name, factory, firstResources, units) => ({
    name, units,
    recipes: [
      {blocks:[factory],resources:[...firstResources,{kind:"power",value:72}]},
      {...recipes.additive,resources:recipes.additive.resources.map(r=>r.unit?{unit:units[0].id,value:1}:r)},
      {...recipes.multiplicative,resources:recipes.multiplicative.resources.map(r=>r.unit?{unit:units[1].id,value:1}:r)},
      {...recipes.exponential,resources:recipes.exponential.resources.map(r=>r.unit?{unit:units[2].id,value:1}:r)},
      {...recipes.tetrative,resources:recipes.tetrative.resources.map(r=>r.unit?{unit:units[3].id,value:1}:r)}
    ]
  });

  const groundFactory = {id:"ground-factory",name:"Ground Factory"};
  const airFactory = {id:"air-factory",name:"Air Factory"};
  const navalFactory = {id:"naval-factory",name:"Naval Factory"};

  const unitCategories = [
    {name:"Ground",accent:"#e88f6f",branches:[
      branch("Assault",groundFactory,[{icon:"silicon",value:10},{icon:"lead",value:10}],[
        unit("dagger","Dagger","groundZero",150,18.75,41.54,"Fires standard bullets at enemy targets."),
        unit("mace","Mace","fungalPass",550,6.83,403.64,"Fires streams of flame at enemy targets.","201.82 +201.82(x~1)"),
        unit("fortress","Fortress","frontier",900,30,100,"Fires long-range artillery at enemy ground targets.","20 +80(R4.375)"),
        unit("scepter","Scepter","overgrowth",9000,27,740,"Fires a barrage of charged bullets at enemy targets.","460 +80(x2) +20(x~6)"),
        unit("reign","Reign","desolateRift",24000,24.38,1353.33,"Fires a barrage of massive piercing bullets at enemy targets.","533.33 +120(R1.625) +133.33(x3) +100(R1.25)(x3)")
      ]),
      branch("Support",groundFactory,[{icon:"silicon",value:30},{icon:"lead",value:20},{icon:"titanium",value:20}],[
        unit("nova","Nova","fungalPass",120,19.5,32.5,"Fires laser bolts that damage enemy targets and repair allied structures. Capable of flight."),
        unit("pulsar","Pulsar","fungalPass",320,8.63,75,"Fires arcs of electricity that damage enemy targets and repair allied structures. Capable of flight."),
        unit("quasar","Quasar","frontier",640,18.75,294.55,"Fires piercing laser beams that damage enemy targets and repair allied structures. Capable of flight. Shielded.","49.09 +49.09(x~5)"),
        unit("vela","Vela","overgrowth",8200,22.5,420,"Fires a massive continuous laser beam that damages enemy targets, causes fires and repairs allied structures. Capable of flight."),
        unit("corvus","Corvus","mycelialBastion",18000,57.5,816,"Fires a massive laser blast that damages enemy targets and repairs allied structures. Can step over most terrain.","96 +96(x~5) +8.57(x~28)")
      ]),
      branch("Crawler",groundFactory,[{icon:"silicon",value:8},{icon:"coal",value:10}],[
        unit("crawler","Crawler","groundZero",150,3.13,81,"Moves toward enemy targets and self-destructs, causing a large explosion.","1 +80(R5.5)"),
        unit("atrax","Atrax","fungalPass",600,13.98,86.67,"Fires debilitating orbs of slag at ground targets. Can step over most terrain."),
        unit("spiroct","Spiroct","frontier",1000,9.38,317.14,"Fires sapping laser beams at enemy targets, repairing itself in the process. Can step over most terrain."),
        unit("arkyid","Arkyid","overgrowth",8000,17.5,1245.04,"Fires large sapping laser beams at enemy targets, repairing itself in the process. Can step over most terrain.","563.19 +547.18(x~1) +86.67(R8.75) +16(x3)"),
        unit("toxopid","Toxopid","mycelialBastion",22000,30,1321.43,"Fires large electric cluster-shells and piercing lasers at enemy targets. Can step over most terrain.","454.29 +440(x~1) +21.43(R10) +14.29(x5) +8.57(x9) +11.43(R8.75)(x9) +8.57(x~18)")
      ])
    ]},
    {name:"Air",accent:"#8fb9ec",branches:[
      branch("Strike",airFactory,[{icon:"silicon",value:15}],[
        unit("flare","Flare","groundZero",70,10,20.25,"Fires standard bullets at enemy ground targets."),
        unit("horizon","Horizon","fungalPass",340,1.37,202.5,"Drops clusters of bombs on enemy ground targets.","67.5 +135(R3.125)"),
        unit("zenith","Zenith","frontier",700,20.2,87,"Fires salvos of missiles at enemy targets.","42 +45(R3.125)"),
        unit("antumbra","Antumbra","overgrowth",7200,21.88,534.29,"Fires a barrage of bullets at enemy targets.","359.86 +174.43(R2.5)"),
        unit("eclipse","Eclipse","mycelialBastion",22000,28.75,1853.33,"Fires two piercing lasers and a barrage of flak at enemy targets.","328.33 +153.33(x~5) +758.33(R3.125)")
      ]),
      branch("Support",airFactory,[{icon:"silicon",value:30},{icon:"lead",value:15}],[
        unit("mono","Mono","groundZero",100,0,0,"Automatically mines copper and lead, depositing it into the core."),
        unit("poly","Poly","fungalPass",400,25,24,"Automatically rebuilds destroyed structures and assists other units in construction."),
        unit("mega","Mega","frontier",460,22.75,57,"Automatically repairs damaged structures. Capable of carrying blocks and small ground units."),
        unit("quad","Quad","overgrowth",6000,3.75,408,"Drops plasma bombs on ground targets, repairing allied structures and damaging enemy ground targets. Capable of carrying medium-sized ground units.","168 +240(R10)"),
        unit("oct","Oct","mycelialBastion",24000,0,0,"Protects nearby allies with a regenerating shield. Capable of carrying most ground units.")
      ])
    ]},
    {name:"Naval",accent:"#8bd7d0",branches:[
      branch("Warship",navalFactory,[{icon:"silicon",value:20},{icon:"metaglass",value:35}],[
        unit("risso","Risso","ruinousShores",280,24.18,94.34,"Fires a barrage of missiles and bullets at enemy targets.","70.34 +24(R3.125)"),
        unit("minke","Minke","fungalPass",600,27.56,381,"Fires shells and standard bullets at enemy ground targets.","58 +243(R1.875) +80(R2.813)"),
        unit("bryde","Bryde","frontier",910,33.6,210.46,"Fires long-range artillery shells and missiles at enemy targets.","85.85 +60(R3.125) +64.62(R5)"),
        unit("sei","Sei","overgrowth",11000,35.72,867,"Fires a barrage of missiles and armor-piercing bullets at enemy targets.","507 +360(R4.375)"),
        unit("omura","Omura","littoralShipyard",22000,62.5,1363.64,"Fires a long-range piercing railgun bolt at enemy targets.","681.82 +681.82(x~1)")
      ]),
      branch("Support",navalFactory,[{icon:"silicon",value:15},{icon:"titanium",value:20}],[
        unit("retusa","Retusa","windsweptIslands",270,19.5,114.73,"Fires homing torpedoes at enemy targets. Repairs allied units.","34.73 +80(R4)"),
        unit("oxynoe","Oxynoe","coastline",560,12.5,665.33,"Fires structure-repairing streams of flame at enemy targets. Targets enemy projectiles with a point defense turret."),
        unit("cyerce","Cyerce","frontier",870,28.21,218,"Fires seeking cluster-missiles at enemy targets. Repairs allied units.","25 +25(R3.75) +11(x7) +13(R2.5)(x7)"),
        unit("aegires","Aegires","overgrowth",12000,22.5,900,"Shocks all enemy units and structures that enter its energy field. Repairs all allies."),
        unit("navanax","Navanax","navalFortress",20000,37.5,2390.91,"Fires explosive EMP projectiles, dealing significant damage to enemy power networks and repairing allied structures. Melts enemy targets with 4 autonomous laser turrets.","55.38 +64.62(R12.5) +2270.91")
      ])
    ]}
  ];

  return {id:"serpulo",name:"Serpulo",assetRoot:S,icons,sectors,blocks,groups,turrets,unitCategories};
})();
