const A = "assets";

const icons = {
  beryllium: `${A}/resources/item-beryllium.png`,
  graphite: `${A}/resources/item-graphite.png`,
  sand: `${A}/resources/item-sand.png`,
  silicon: `${A}/resources/item-silicon.png`,
  tungsten: `${A}/resources/item-tungsten.png`,
  thorium: `${A}/resources/item-thorium.png`,
  oxide: `${A}/resources/item-oxide.png`,
  carbide: `${A}/resources/item-carbide.png`,
  surge: `${A}/resources/item-surge-alloy.png`,
  water: `${A}/resources/liquid-water.png`,
  slag: `${A}/resources/liquid-slag.png`,
  arkycite: `${A}/resources/liquid-arkycite.png`,
  ozone: `${A}/resources/liquid-ozone.png`,
  hydrogen: `${A}/resources/liquid-hydrogen.png`,
  nitrogen: `${A}/resources/liquid-nitrogen.png`,
  cyanogen: `${A}/resources/liquid-cyanogen.png`,
  neoplasm: `${A}/resources/liquid-neoplasm.png`,
  phase: `${A}/resources/item-phase-fabric.png`,
  vent: `${A}/resources/vent.png`,
  cliff: `${A}/resources/cliff.png`,
  oreWall: `${A}/resources/ore-wall.png`
};

const blocks = [
  {
    name: "Vent Condenser", id: "vent-condenser", category: "production", accent: "#79ce80",
    input: [{ icon: "vent", value: "" }], output: [{ icon: "water", value: "30/s" }],
    description: "Condenses vent gases into water. Consumes power."
  },
  {
    name: "Reinforced Pump", id: "reinforced-pump", category: "production", accent: "#8db7da",
    input: [{ icon: "hydrogen", value: "1.5/s" }], output: [{ kind: "liquid", value: "80/s" }],
    description: "Pumps and outputs liquids. Requires hydrogen."
  },
  {
    name: "Silicon Arc Furnace", id: "silicon-arc-furnace", category: "crafting", accent: "#f0ad76",
    input: [{ icon: "sand", value: "1.2/s" }, { icon: "graphite", value: "4.8/s" }], output: [{ icon: "silicon", value: "4.8/s" }],
    description: "Refines silicon from sand and graphite."
  },
  {
    name: "Turbine Condenser", id: "turbine-condenser", category: "power", accent: "#f29c72",
    input: [{ icon: "vent", value: "" }], output: [{ kind: "power", value: "180" }, { icon: "water", value: "5/s" }],
    description: "Generates power when placed on vents. Produces a small amount of water."
  },
  {
    name: "Electrolyzer", id: "electrolyzer", category: "crafting", accent: "#90d67b",
    input: [{ icon: "water", value: "10/s" }], output: [{ icon: "hydrogen", value: "6/s" }, { icon: "ozone", value: "4/s" }],
    description: "Splits water into hydrogen and ozone gas. Outputs resulting gases in two opposite directions, marked by corresponding colors."
  },
  {
    name: "Eruption Drill", id: "eruption-drill", category: "production", accent: "#9abcea",
    input: [{ icon: "hydrogen", value: "4/s" }], output: [{ icon: "beryllium", value: "10.67/s" }, { icons: ["tungsten", "thorium"], value: "5.33/s" }],
    description: "An improved impact drill. Capable of mining thorium. Requires hydrogen. Optionally uses cyanogen to boost efficiency."
  },
  {
    name: "Chemical Combustion Chamber", id: "chemical-combustion-chamber", category: "power", accent: "#80cb73",
    input: [{ icon: "ozone", value: "2/s" }, { icon: "arkycite", value: "40/s" }], output: [{ kind: "power", value: "550" }],
    description: "Generates power from arkycite and ozone."
  },
  {
    name: "Impact Drill", id: "impact-drill", category: "production", accent: "#f08c68",
    input: [{ icon: "water", value: "10/s" }], output: [{ icon: "beryllium", value: "2.67/s" }, { icon: "tungsten", value: "1.33/s" }],
    description: "When placed on ore, outputs items in bursts indefinitely. Requires power and water. Optionally uses ozone to boost efficiency."
  },
  {
    name: "Pyrolysis Generator", id: "pyrolysis-generator", category: "power", accent: "#aedb70",
    input: [{ icon: "slag", value: "20/s" }, { icon: "arkycite", value: "40/s" }], output: [{ kind: "power", value: "1400" }, { icon: "water", value: "20/s" }],
    description: "Generates large amounts of power from arkycite and slag. Produces water as a byproduct."
  },
  {
    name: "Electric Heater", id: "electric-heater", category: "crafting", accent: "#f47c6c",
    input: [{ kind: "power", value: "100" }], output: [{ kind: "heat", value: "3" }],
    description: "Applies heat to structures. Requires large amounts of power."
  },
  {
    name: "Surge Crucible", id: "surge-crucible", category: "crafting", accent: "#ffd064",
    input: [{ icon: "silicon", value: "4/s" }, { icon: "slag", value: "160/s" }, { kind: "heat", value: "40" }], output: [{ icon: "surge", value: "1.33/s" }],
    description: "Creates surge alloy from silicon and metals constituent in slag. Requires heat."
  },
  {
    name: "Slag Heater", id: "slag-heater", category: "crafting", accent: "#f08168",
    input: [{ icon: "slag", value: "40/s" }], output: [{ kind: "heat", value: "8" }],
    description: "Applies heat to structures. Requires slag."
  },
  {
    name: "Carbide Crucible", id: "carbide-crucible", category: "crafting", accent: "#c487c8",
    input: [{ icon: "tungsten", value: "3.56/s" }, { icon: "graphite", value: "5.33/s" }, { kind: "heat", value: "40" }], output: [{ icon: "carbide", value: "1.78/s" }],
    description: "Fuses graphite and tungsten into carbide. Requires heat."
  },
  {
    name: "Oxidation Chamber", id: "oxidation-chamber", category: "crafting", accent: "#76d393",
    input: [{ icon: "beryllium", value: "0.5/s" }, { icon: "ozone", value: "2/s" }], output: [{ icon: "oxide", value: "0.5/s" }, { kind: "heat", value: "5" }],
    description: "Converts beryllium and ozone into oxide. Emits heat as a by-product."
  },
  {
    name: "Atmospheric Concentrator", id: "atmospheric-concentrator", category: "crafting", accent: "#8bb7e8",
    input: [{ kind: "heat", value: "24" }], output: [{ icon: "nitrogen", value: "16/s" }],
    description: "Concentrates nitrogen from the atmosphere. Requires heat."
  },
  {
    name: "Cliff Crusher", id: "cliff-crusher", category: "production", accent: "#b69d8a",
    input: [{ icon: "cliff", value: "" }], output: [{ icon: "sand", value: "1.09/s" }],
    description: "Crushes walls, outputting sand indefinitely. Requires power. Efficiency varies based on type of wall."
  },
  {
    name: "Advanced Cliff Crusher", id: "large-cliff-crusher", category: "production", accent: "#d49876",
    input: [{ icon: "cliff", value: "" }, { icon: "hydrogen", value: "1/s" }], output: [{ icon: "sand", value: "3.75/s" }],
    description: "Crushes walls, outputting sand indefinitely. Requires power and hydrogen. Efficiency varies based on type of wall. Optionally consumes graphite to increase efficiency."
  },
  {
    name: "Plasma Bore", id: "plasma-bore", category: "production", accent: "#91d77b",
    input: [{ icon: "oreWall", value: "" }], output: [{ icons: ["graphite", "beryllium"], value: "0.75/s" }],
    description: "When placed facing an ore wall, outputs items indefinitely. Requires small amounts of power. Optionally uses hydrogen to boost efficiency."
  },
  {
    name: "Advanced Plasma Bore", id: "large-plasma-bore", category: "production", accent: "#e2a77d",
    input: [{ icon: "oreWall", value: "" }, { icon: "hydrogen", value: "0.5/s" }], output: [{ icons: ["graphite", "beryllium", "thorium", "tungsten"], value: "1.8/s" }],
    description: "A larger plasma bore. Capable of mining tungsten and thorium. Requires hydrogen and power. Optionally uses nitrogen to boost efficiency."
  },
  {
    name: "Flux Reactor", id: "flux-reactor", category: "power", accent: "#71d68a",
    input: [{ icon: "cyanogen", value: "9/s" }, { kind: "heat", value: "150" }], output: [{ kind: "power", value: "18000" }],
    description: "Generates large amounts of power when heated. Requires cyanogen as a stabilizer. Power output and cyanogen requirements are proportional to heat input. Explodes if insufficient cyanogen is provided."
  },
  {
    name: "Neoplasia Reactor", id: "neoplasia-reactor", category: "power", accent: "#e77b62",
    input: [{ icon: "arkycite", value: "80/s" }, { icon: "water", value: "10/s" }, { icon: "phase", value: "0.33/s" }], output: [{ kind: "power", value: "8400" }, { icon: "neoplasm", value: "20/s" }, { kind: "heat", value: "60" }],
    description: "Uses arkycite, water and phase fabric to generate large amounts of power. Produces heat and dangerous neoplasm as a byproduct. Explodes violently if neoplasm is not removed from the reactor via conduits."
  },
  {
    name: "Phase Heater", id: "phase-heater", category: "crafting", accent: "#c98edb",
    input: [{ icon: "phase", value: "0.125/s" }], output: [{ kind: "heat", value: "15" }],
    description: "Applies heat to structures. Requires phase fabric."
  },
  {
    name: "Cyanogen Synthesizer", id: "cyanogen-synthesizer", category: "crafting", accent: "#82ddb0",
    input: [{ icon: "arkycite", value: "160/s" }, { icon: "graphite", value: "3/s" }, { kind: "heat", value: "20" }], output: [{ icon: "cyanogen", value: "12/s" }],
    description: "Synthesizes cyanogen from arkycite and graphite. Requires heat."
  },
  {
    name: "Phase Synthesizer", id: "phase-synthesizer", category: "crafting", accent: "#d5a0e3",
    input: [{ icon: "thorium", value: "4/s" }, { icon: "sand", value: "12/s" }, { icon: "ozone", value: "8/s" }, { kind: "heat", value: "32" }], output: [{ icon: "phase", value: "2/s" }],
    description: "Synthesizes phase fabric from thorium, sand, and ozone. Requires heat."
  },
  {
    name: "Mech Fabricator", id: "mech-fabricator", category: "units", accent: "#a4bddc",
    input: [{ icon: "beryllium", value: "50" }, { icon: "silicon", value: "70" }], output: [{ unit: "merui", value: "40s" }],
    description: "Constructs Merui units. Outputted units can be used directly, or moved into refabricators for upgrading."
  },
  {
    name: "Mech Refabricator", id: "mech-refabricator", category: "units", accent: "#a4bddc",
    input: [{ icon: "hydrogen", value: "3/s" }, { icon: "silicon", value: "50" }, { icon: "tungsten", value: "40" }], output: [{ unit: "cleroi", value: "45s" }],
    description: "Upgrades inputted mech units to the second tier."
  },
  {
    name: "Tank Fabricator", id: "tank-fabricator", category: "units", accent: "#e58a68",
    input: [{ icon: "beryllium", value: "40" }, { icon: "silicon", value: "50" }], output: [{ unit: "stell", value: "35s" }],
    description: "Constructs Stell units. Outputted units can be used directly, or moved into refabricators for upgrading."
  },
  {
    name: "Tank Refabricator", id: "tank-refabricator", category: "units", accent: "#e58a68",
    input: [{ icon: "hydrogen", value: "3/s" }, { icon: "silicon", value: "40" }, { icon: "tungsten", value: "30" }], output: [{ unit: "locus", value: "30s" }],
    description: "Upgrades inputted tank units to the second tier."
  },
  {
    name: "Ship Fabricator", id: "ship-fabricator", category: "units", accent: "#aa8be7",
    input: [{ icon: "graphite", value: "50" }, { icon: "silicon", value: "70" }], output: [{ unit: "elude", value: "40s" }],
    description: "Constructs Elude units. Outputted units can be used directly, or moved into refabricators for upgrading."
  },
  {
    name: "Ship Refabricator", id: "ship-refabricator", category: "units", accent: "#aa8be7",
    input: [{ icon: "hydrogen", value: "3/s" }, { icon: "silicon", value: "60" }, { icon: "tungsten", value: "40" }], output: [{ unit: "avert", value: "50s" }],
    description: "Upgrades inputted ship units to the second tier."
  },
  {
    name: "Prime Refabricator", id: "prime-refabricator", category: "units", accent: "#de8dbd",
    input: [{ icon: "nitrogen", value: "10/s" }, { icon: "thorium", value: "80" }, { icon: "silicon", value: "100" }], output: [{ kind: "text", value: "Tier 3 / 60s" }],
    description: "Upgrades inputted units to the third tier."
  }
];

const blockSizes = {
  "vent-condenser": 3, "reinforced-pump": 2, "cliff-crusher": 2, "large-cliff-crusher": 3,
  "plasma-bore": 2, "large-plasma-bore": 3, "impact-drill": 4, "eruption-drill": 5,
  "turbine-condenser": 3, "chemical-combustion-chamber": 3, "pyrolysis-generator": 3,
  "flux-reactor": 5, "neoplasia-reactor": 5,
  "silicon-arc-furnace": 3, electrolyzer: 3, "atmospheric-concentrator": 3,
  "oxidation-chamber": 3, "electric-heater": 2, "slag-heater": 3, "phase-heater": 2,
  "carbide-crucible": 3, "surge-crucible": 3, "cyanogen-synthesizer": 3,
  "phase-synthesizer": 3,
  "mech-fabricator": 3, "mech-refabricator": 3, "tank-fabricator": 3,
  "tank-refabricator": 3, "ship-fabricator": 3, "ship-refabricator": 3,
  "prime-refabricator": 5
};

// Mindustry stores continuous power consumption per tick; the UI reports it per second.
const powerPerSecond = {
  "vent-condenser": 30, "cliff-crusher": 11, "large-cliff-crusher": 60,
  "plasma-bore": 9, "large-plasma-bore": 48, "impact-drill": 160, "eruption-drill": 360,
  "silicon-arc-furnace": 300, electrolyzer: 60, "atmospheric-concentrator": 120,
  "oxidation-chamber": 30, "electric-heater": 100, "carbide-crucible": 120,
  "surge-crucible": 90, "cyanogen-synthesizer": 120, "phase-synthesizer": 480,
  "mech-fabricator": 90, "mech-refabricator": 150, "tank-fabricator": 90,
  "tank-refabricator": 180, "ship-fabricator": 90, "ship-refabricator": 150,
  "prime-refabricator": 270
};

const boosterRecipes = {
  "large-cliff-crusher": {
    input: [{ icon: "graphite", value: "0.75/s" }],
    output: [{ icon: "sand", value: "6/s" }]
  },
  "plasma-bore": {
    input: [{ icon: "hydrogen", value: "0.25/s" }],
    output: [{ icons: ["graphite", "beryllium"], value: "1.88/s" }]
  },
  "large-plasma-bore": {
    input: [{ icon: "nitrogen", value: "3/s" }],
    output: [{ icons: ["graphite", "beryllium", "thorium", "tungsten"], value: "4.5/s" }]
  },
  "impact-drill": {
    input: [{ icon: "ozone", value: "3/s" }],
    output: [{ icon: "beryllium", value: "4.67/s" }, { icon: "tungsten", value: "2.33/s" }]
  },
  "eruption-drill": {
    input: [{ icon: "cyanogen", value: "0.75/s" }],
    output: [{ icon: "beryllium", value: "21.33/s" }, { icons: ["tungsten", "thorium"], value: "10.67/s" }]
  }
};

const campaignSectors = [
  ["onset", "The Onset"], ["aegis", "Aegis"], ["lake", "Lake"],
  ["intersect", "Intersect"], ["atlas", "Atlas"], ["split", "Split"],
  ["basin", "Basin"], ["marsh", "Marsh"], ["ravine", "Ravine"],
  ["peaks", "Peaks"], ["caldera", "Caldera"], ["stronghold", "Stronghold"],
  ["crevice", "Crevice"], ["siege", "Siege"], ["crossroads", "Crossroads"],
  ["karst", "Karst"], ["origin", "Origin"]
];

const unlockSectorByBlock = {
  "vent-condenser": "aegis", "reinforced-pump": "basin", "cliff-crusher": "onset",
  "large-cliff-crusher": "stronghold", "plasma-bore": "onset", "large-plasma-bore": "caldera",
  "impact-drill": "aegis", "eruption-drill": "stronghold",
  "turbine-condenser": "onset", "chemical-combustion-chamber": "basin",
  "pyrolysis-generator": "crevice", "flux-reactor": "crossroads", "neoplasia-reactor": "karst",
  "silicon-arc-furnace": "onset", electrolyzer: "atlas", "atmospheric-concentrator": "caldera",
  "oxidation-chamber": "marsh", "electric-heater": "ravine", "slag-heater": "caldera",
  "phase-heater": "karst", "carbide-crucible": "crevice", "surge-crucible": "ravine",
  "cyanogen-synthesizer": "siege", "phase-synthesizer": "karst",
  "tank-fabricator": "onset", "ship-fabricator": "lake", "mech-fabricator": "intersect",
  "tank-refabricator": "atlas", "mech-refabricator": "basin", "ship-refabricator": "peaks",
  "prime-refabricator": "stronghold"
};

const sectorRank = new Map(campaignSectors.map(([id], index) => [id, index]));

const turrets = [
  {
    id: "breach", name: "Breach", size: 3, range: 190, sector: "onset", accent: "#80d98b",
    cost: [["beryllium", 150], ["silicon", 150], ["graphite", 125]],
    ammo: [
      { icon: "beryllium", consumption: "3", rate: "1.5", damage: "85", dps: "127.5" },
      { icon: "tungsten", consumption: "1.5", rate: "1.5", damage: "95", dps: "142.5" },
      { icon: "carbide", consumption: "0.3", rate: "0.3", damage: "433 + 227(x3)", dps: "129.9 + 68.1(x3)" }
    ],
    targets: "Ground / Air", description: "Fires piercing bullets at enemy targets.",
    boosters: [{ icon: "water", amount: "15", speed: "x2.5" }]
  },
  {
    id: "diffuse", name: "Diffuse", size: 3, range: 125, sector: "lake", accent: "#ef8b75",
    cost: [["beryllium", 150], ["silicon", 200], ["graphite", 200], ["tungsten", 50]],
    ammo: [
      { icon: "graphite", consumption: "6", rate: "30", damage: "41", dps: "1230" },
      { icon: "oxide", consumption: "3", rate: "30", damage: "90", dps: "2700" },
      { icon: "silicon", consumption: "6", rate: "30", damage: "35", dps: "1050" }
    ],
    targets: "Ground / Air", description: "Fires bursts of bullets in a wide cone. Pushes enemy targets back.",
    boosters: [{ icon: "water", amount: "15", speed: "x2.5" }]
  },
  {
    id: "sublimate", name: "Sublimate", size: 3, range: 130, sector: "marsh", accent: "#9aa7ff",
    cost: [["tungsten", 150], ["silicon", 200], ["oxide", 40], ["beryllium", 400]],
    ammo: [
      { icon: "ozone", consumption: "18", rate: "cont.", damage: "–", dps: "720" },
      { icon: "cyanogen", consumption: "18", rate: "cont.", damage: "–", dps: "1560" }
    ],
    targets: "Ground / Air", description: "Fires a continuous jet of flame at enemy targets. Pierces armor.",
    boosters: []
  },
  {
    id: "titan", name: "Titan", size: 4, range: 390, sector: "stronghold", accent: "#e99579",
    cost: [["tungsten", 250], ["silicon", 300], ["thorium", 400]],
    inputs: [{ icon: "hydrogen", amount: "5" }],
    ammo: [
      { icon: "thorium", consumption: "1.74", rate: "0.43", damage: "350 +350(R8.1)", dps: "150.5 +150.5(R8.1)" },
      { icon: "carbide", consumption: "1.39", rate: "0.35", damage: "700 +750(R4.5)", dps: "245 +262.5(R4.5)" },
      { icon: "oxide", consumption: "1.22", rate: "0.30", damage: "300 +180(R13.8)", dps: "90 +54(R13.8)" }
    ],
    targets: "Ground", description: "Fires massive explosive artillery shells at ground targets. Requires hydrogen.",
    boosters: [{ icon: "water", amount: "30", speed: "x1.75" }]
  },
  {
    id: "disperse", name: "Disperse", size: 4, range: 310, sector: "stronghold", accent: "#83c8ec",
    cost: [["thorium", 50], ["oxide", 50], ["silicon", 200], ["beryllium", 350]],
    ammo: [
      { icon: "tungsten", consumption: "2.22", rate: "26.67", damage: "65", dps: "1733.6" },
      { icon: "thorium", consumption: "5.67", rate: "22.67", damage: "90", dps: "2040.3" },
      { icon: "silicon", consumption: "1.67", rate: "26.67", damage: "37", dps: "986.8" },
      { icon: "surge", consumption: "1.67", rate: "20", damage: "65 +18(x3) +20(x7)", dps: "1300 +360(x3) +400(x7)" }
    ],
    targets: "Air", description: "Fires bursts of flak at aerial targets.",
    boosters: [{ icon: "water", amount: "20", speed: "x1.83" }]
  },
  {
    id: "afflict", name: "Afflict", size: 4, range: 368, sector: "ravine", accent: "#f3c95b",
    cost: [["surge", 100], ["silicon", 200], ["graphite", 250], ["oxide", 40]],
    inputs: [{ kind: "heat", amount: "20" }],
    ammo: [{ kind: "power", consumption: "300", rate: "1.2", damage: "180 + 35(x~74)", dps: "216 +42(x~74)" }],
    targets: "Ground / Air", description: "Fires massive charged orbs of fragmentary flak. Requires heating.",
    boosters: []
  },
  {
    id: "lustre", name: "Lustre", size: 4, range: 250, sector: "crevice", accent: "#f0aa83",
    cost: [["silicon", 250], ["graphite", 200], ["oxide", 50], ["carbide", 90]],
    inputs: [{ icon: "nitrogen", amount: "6" }],
    ammo: [{ kind: "power", consumption: "200", rate: "cont.", damage: "–", dps: "2520" }],
    targets: "Ground / Air", description: "Fires a continuous slow-moving single-target laser at enemy targets.",
    boosters: []
  },
  {
    id: "scathe", name: "Scathe", size: 4, range: 1350, sector: "siege", accent: "#eb9478",
    cost: [["silicon", 450], ["graphite", 400], ["tungsten", 500], ["oxide", 100], ["carbide", 200]],
    ammo: [
      { icon: "carbide", consumption: "1.5", rate: "0.10", damage: "+1000(R8.1)", dps: "+100(R8.1)" },
      { icon: "phase", consumption: "1.2", rate: "0.08", damage: "+320(R15)", dps: "+25.6(R15)" },
      { icon: "surge", consumption: "1.35", rate: "0.09", damage: "+1800(R5)", dps: "+162(R5)" }
    ],
    targets: "Ground", description: "Launches powerful missiles at ground targets over vast distances.",
    boosters: [{ icon: "water", amount: "15", speed: "x2.5" }]
  },
  {
    id: "smite", name: "Smite", size: 5, range: 300, sector: "karst", accent: "#efd760",
    cost: [["oxide", 200], ["surge", 400], ["silicon", 800], ["carbide", 500], ["phase", 300]],
    ammo: [{ icon: "surge", consumption: "1.2", rate: "3", damage: "250 + 30(x~13)", dps: "750 +90(x~13)" }],
    targets: "Ground / Air", description: "Fires bursts of piercing, lightning-emitting bullets.",
    boosters: [{ icon: "water", amount: "15", speed: "x2.5" }]
  },
  {
    id: "malign", name: "Malign", size: 5, range: 410, sector: "karst", accent: "#d884dc",
    cost: [["carbide", 200], ["beryllium", 1000], ["silicon", 500], ["graphite", 500], ["phase", 200]],
    inputs: [{ kind: "heat", amount: "144" }],
    ammo: [{ kind: "power", consumption: "2400", rate: "17.14", damage: "70 + 65(x9) + 18(x~2)", dps: "1200 +1114.1(x9) +308.5(x~2)" }],
    targets: "Ground / Air", description: "Fires a barrage of homing laser charges at enemy targets. Requires extensive heating.",
    boosters: []
  }
];

const unitProgressions = [
  {
    name: "Tank", accent: "#e58a68", tier4Count: 4, tier5Count: 6,
    tier4Payload: "4 Stell and 10 large Tungsten Walls",
    tier5Payload: "6 Locus and 20 large Carbide Walls",
    recipes: {
      tier1: { blocks: [{ id: "tank-fabricator", name: "Tank Fabricator" }], resources: [{ icon: "beryllium", value: 40 }, { icon: "silicon", value: 50 }, { kind: "power", value: 90 }] },
      tier2: { blocks: [{ id: "tank-refabricator", name: "Tank Refabricator" }], resources: [{ unit: "stell", value: 1 }, { icon: "silicon", value: 40 }, { icon: "tungsten", value: 30 }, { icon: "hydrogen", value: 3 }, { kind: "power", value: 180 }] },
      tier3: { blocks: [{ id: "prime-refabricator", name: "Prime Refabricator" }], resources: [{ unit: "locus", value: 1 }, { icon: "thorium", value: 80 }, { icon: "silicon", value: 100 }, { icon: "nitrogen", value: 10 }, { kind: "power", value: 270 }] },
      tier4: { blocks: [{ id: "tank-assembler", name: "Tank Assembler" }], resources: [{ unit: "stell", value: 4 }, { wall: "tungsten", value: 10 }, { icon: "cyanogen", value: 9 }, { kind: "power", value: 150 }] },
      tier5: { blocks: [{ id: "tank-assembler", name: "Tank Assembler" }, { id: "basic-assembler-module", name: "Basic Assembler Module" }], resources: [{ unit: "locus", value: 6 }, { wall: "carbide", value: 20 }, { icon: "cyanogen", value: 9 }, { kind: "power", value: "150+210" }] }
    },
    units: [
      { id: "stell", name: "Stell", sector: "onset", description: "Fires standard bullets at enemy targets." },
      { id: "locus", name: "Locus", sector: "atlas", description: "Fires alternating bullets at enemy targets." },
      { id: "precept", name: "Precept", sector: "stronghold", description: "Fires piercing cluster bullets at enemy targets. Less affected by liquid drag." },
      { id: "vanquish", name: "Vanquish", sector: "siege", description: "Fires large piercing splitting bullets at enemy targets. Less affected by liquid drag." },
      { id: "conquer", name: "Conquer", sector: "origin", description: "Fires large piercing cascades of bullets at enemy targets. Significantly less affected by liquid drag." }
    ]
  },
  {
    name: "Mech", accent: "#a4bddc", tier4Count: 5, tier5Count: 6,
    tier4Payload: "5 Merui and 12 large Tungsten Walls",
    tier5Payload: "6 Cleroi and 20 large Carbide Walls",
    recipes: {
      tier1: { blocks: [{ id: "mech-fabricator", name: "Mech Fabricator" }], resources: [{ icon: "beryllium", value: 50 }, { icon: "silicon", value: 70 }, { kind: "power", value: 90 }] },
      tier2: { blocks: [{ id: "mech-refabricator", name: "Mech Refabricator" }], resources: [{ unit: "merui", value: 1 }, { icon: "silicon", value: 50 }, { icon: "tungsten", value: 40 }, { icon: "hydrogen", value: 3 }, { kind: "power", value: 150 }] },
      tier3: { blocks: [{ id: "prime-refabricator", name: "Prime Refabricator" }], resources: [{ unit: "cleroi", value: 1 }, { icon: "thorium", value: 80 }, { icon: "silicon", value: 100 }, { icon: "nitrogen", value: 10 }, { kind: "power", value: 270 }] },
      tier4: { blocks: [{ id: "mech-assembler", name: "Mech Assembler" }], resources: [{ unit: "merui", value: 5 }, { wall: "tungsten", value: 12 }, { icon: "cyanogen", value: 12 }, { kind: "power", value: 180 }] },
      tier5: { blocks: [{ id: "mech-assembler", name: "Mech Assembler" }, { id: "basic-assembler-module", name: "Basic Assembler Module" }], resources: [{ unit: "cleroi", value: 6 }, { wall: "carbide", value: 20 }, { icon: "cyanogen", value: 12 }, { kind: "power", value: "180+210" }] }
    },
    units: [
      { id: "merui", name: "Merui", sector: "intersect", description: "Fires long-range artillery at enemy ground targets. Can step over most terrain." },
      { id: "cleroi", name: "Cleroi", sector: "basin", description: "Fires dual shells at enemy targets. Targets enemy projectiles with point defense turrets. Can step over most terrain." },
      { id: "anthicus", name: "Anthicus", sector: "stronghold", description: "Fires long-range homing missiles at enemy targets. Can step over most terrain." },
      { id: "tecta", name: "Tecta", sector: "karst", description: "Fires homing plasma missiles at enemy targets. Protects itself with a directional shield. Can step over most terrain." },
      { id: "collaris", name: "Collaris", sector: "origin", description: "Fires long-range fragmenting artillery at enemy targets. Can step over most terrain." }
    ]
  },
  {
    name: "Ship", accent: "#aa8be7", tier4Count: 4, tier5Count: 6,
    tier4Payload: "4 Elude and 12 large Beryllium Walls",
    tier5Payload: "6 Avert and 20 large Carbide Walls",
    recipes: {
      tier1: { blocks: [{ id: "ship-fabricator", name: "Ship Fabricator" }], resources: [{ icon: "graphite", value: 50 }, { icon: "silicon", value: 70 }, { kind: "power", value: 90 }] },
      tier2: { blocks: [{ id: "ship-refabricator", name: "Ship Refabricator" }], resources: [{ unit: "elude", value: 1 }, { icon: "silicon", value: 60 }, { icon: "tungsten", value: 40 }, { icon: "hydrogen", value: 3 }, { kind: "power", value: 150 }] },
      tier3: { blocks: [{ id: "prime-refabricator", name: "Prime Refabricator" }], resources: [{ unit: "avert", value: 1 }, { icon: "thorium", value: 80 }, { icon: "silicon", value: 100 }, { icon: "nitrogen", value: 10 }, { kind: "power", value: 270 }] },
      tier4: { blocks: [{ id: "ship-assembler", name: "Ship Assembler" }], resources: [{ unit: "elude", value: 4 }, { wall: "beryllium", value: 12 }, { icon: "cyanogen", value: 12 }, { kind: "power", value: 150 }] },
      tier5: { blocks: [{ id: "ship-assembler", name: "Ship Assembler" }, { id: "basic-assembler-module", name: "Basic Assembler Module" }], resources: [{ unit: "avert", value: 6 }, { wall: "carbide", value: 20 }, { icon: "cyanogen", value: 12 }, { kind: "power", value: "150+210" }] }
    },
    units: [
      { id: "elude", name: "Elude", sector: "lake", description: "Fires pairs of homing bullets at enemy targets. Can float over bodies of liquid." },
      { id: "avert", name: "Avert", sector: "peaks", description: "Fires twisting pairs of bullets at enemy targets." },
      { id: "obviate", name: "Obviate", sector: "stronghold", description: "Fires twisting pairs of lightning orbs at enemy targets." },
      { id: "quell", name: "Quell", sector: "crevice", description: "Fires long-range homing missiles with unstable plasma shielding at enemy targets. Suppresses enemy structure repair blocks. Only attacks ground targets." },
      { id: "disrupt", name: "Disrupt", sector: "origin", description: "Fires long-range homing suppression missiles at enemy targets. Suppresses enemy structure repair blocks. Only attacks ground targets." }
    ]
  }
];

// Full working edge against one Erekir wall type; values are sand per second.
const cliffWallRates = {
  "cliff-crusher": [
    { walls: ["ferric"], names: "Ferric Stone", value: "0.55" },
    { walls: ["carbon"], names: "Carbon", value: "0.76" },
    { walls: ["regolith", "rhyolite"], names: "Regolith / Rhyolite", value: "1.09" },
    { walls: ["beryllic"], names: "Beryllic Stone", value: "1.31" },
    { walls: ["yellow-stone", "red-stone"], names: "Yellow Stone / Red Stone", value: "1.64" }
  ],
  "large-cliff-crusher": [
    { walls: ["ferric"], names: "Ferric Stone", value: "1.88" },
    { walls: ["carbon"], names: "Carbon", value: "2.63" },
    { walls: ["regolith", "rhyolite"], names: "Regolith / Rhyolite", value: "3.75" },
    { walls: ["beryllic"], names: "Beryllic Stone", value: "4.5" },
    { walls: ["yellow-stone", "red-stone"], names: "Yellow Stone / Red Stone", value: "5.63" }
  ]
};

blocks.forEach(block => {
  block.size = blockSizes[block.id];
  block.booster = boosterRecipes[block.id];
  block.unlockSector = unlockSectorByBlock[block.id] ?? "onset";
  const power = powerPerSecond[block.id];
  if (power && !block.input.some(resource => resource.kind === "power")) {
    block.input.push({ kind: "power", value: String(power) });
  }
});

const grid = document.querySelector("#block-grid");

function resourceChip(resource, boosted = false, direction = "input") {
  const value = String(resource.value).replaceAll("/s", "");
  const className = `resource${boosted ? " resource--boost" : ""}`;
  const prefix = boosted ? "Booster: " : "";
  const quantity = value ? `<span class="resource__value">${value}</span>` : "";
  const arrange = visual => direction === "output" ? `${visual}${quantity}` : `${quantity}${visual}`;
  if (resource.icons) {
    const names = resource.icons.join(", ");
    const images = resource.icons.map(icon => `<img src="${icons[icon]}" alt="">`).join("");
    const visual = `<span class="resource__icons resource__icons--${resource.icons.length}">${images}</span>`;
    return `<span class="${className}" title="${prefix}${names}">${arrange(visual)}</span>`;
  }
  if (resource.icon) {
    return `<span class="${className}" title="${prefix}${resource.icon}">${arrange(`<img src="${icons[resource.icon]}" alt="">`)}</span>`;
  }
  if (resource.unit) {
    return `<span class="${className}" title="${prefix}${resource.unit}">${arrange(`<img src="${A}/units/${resource.unit}.png" alt="">`)}</span>`;
  }
  if (resource.kind === "power") return `<span class="${className}" title="Power">${arrange(`<img class="resource__power" src="${A}/resources/power.png" alt="Power">`)}</span>`;
  if (resource.kind === "heat") return `<span class="${className}" title="Heat">${arrange('<i class="resource__heat" aria-label="Heat">&#xE83B;</i>')}</span>`;
  if (resource.kind === "liquid") return `<span class="${className}" title="Pumped floor liquid">${arrange(`<img class="resource__liquid" src="${A}/resources/liquid.png" alt="Any pumped liquid">`)}</span>`;
  return `<span class="${className}">${value}</span>`;
}

function recipe(block) {
  const input = block.input.map(resource => resourceChip(resource, false, "input")).join("");
  const output = block.output.map(resource => resourceChip(resource, false, "output")).join("");
  const boostInput = block.booster?.input.map(resource => resourceChip(resource, true, "input")).join("") ?? "";
  const boostOutput = block.booster?.output.map(resource => resourceChip(resource, true, "output")).join("") ?? "";
  return `<div class="recipe ${input ? "" : "recipe--source"}" aria-label="${block.name} recipe">
    ${input ? `<div class="recipe__side recipe__side--input">${input}${boostInput}</div><span class="recipe__arrow" aria-hidden="true">→</span>` : ""}
    <div class="sprite-wrap"><img class="sprite" src="${A}/blocks/${block.id}.png" alt="${block.name} game sprite"></div>
    <span class="recipe__arrow" aria-hidden="true">→</span>
    <div class="recipe__side recipe__side--output">${output}${boostOutput}</div>
  </div>`;
}

function wallRateGuide(block) {
  const rates = cliffWallRates[block.id];
  if (!rates) return "";
  return `<div class="wall-guide" aria-label="Sand output by wall type">
    <span class="wall-guide__label">base wall output</span>
    ${rates.map(rate => `<span class="wall-rate" title="${rate.names}: ${rate.value} sand per second">
      <span class="wall-rate__icons wall-rate__icons--${rate.walls.length}">${rate.walls.map(wall => `<img src="${A}/walls/${wall}.png" alt="">`).join("")}</span>
      <span>${rate.value}</span>
    </span>`).join("")}
  </div>`;
}

function blockCard(block) {
  return `
  <article class="card" tabindex="0" data-category="${block.category}" data-size="${block.size}" data-unlock-sector="${block.unlockSector}" style="--card-accent:${block.accent};--block-size:${block.size}" aria-label="${block.name}. ${block.size} by ${block.size} tiles. Available by ${campaignSectors[sectorRank.get(block.unlockSector)][1]}. Focus or hover for description." aria-describedby="description-${block.id}">
    <div class="card__body">
      <h2>${block.name}</h2>
      ${recipe(block)}
      ${wallRateGuide(block)}
    </div>
    <div class="description" id="description-${block.id}"><p>${block.description}</p></div>
  </article>`;
}

function turretIcon(entry, className = "") {
  if (entry.icon) return `<img class="${className}" src="${icons[entry.icon]}" alt="${entry.icon}">`;
  if (entry.kind === "power") return `<img class="${className} turret-power-icon" src="${A}/resources/power.png" alt="Power">`;
  if (entry.kind === "heat") return `<i class="${className} resource__heat" aria-label="Heat">&#xE83B;</i>`;
  return "";
}

function turretDamage(value) {
  const compact = String(value).replaceAll(" ", "");
  if (compact === "–") return `<span class="turret-damage"><span class="turret-damage__main">–</span></span>`;
  const splashOnly = compact.startsWith("+");
  const parts = compact.split("+").filter(Boolean);
  const main = splashOnly ? "0" : parts.shift();
  return `<span class="turret-damage">
    <span class="turret-damage__main">${main}</span>
    ${parts.map(part => `<span class="turret-damage__extra">+${part}</span>`).join("")}
  </span>`;
}

function turretCard(turret) {
  const cost = turret.cost.map(([icon, amount]) => `<span class="turret-cost__item">${turretIcon({icon})}${amount}</span>`).join("");
  const requiredAmmo = turret.inputs?.map(input => `<span class="turret-ammo__resource turret-ammo__resource--required">${turretIcon(input)}<span>${input.amount}</span></span>`).join("") ?? "";
  const ammo = turret.ammo.map(round => `<div class="turret-ammo__round">
    <span class="turret-ammo__type">${requiredAmmo}<span class="turret-ammo__resource">${turretIcon(round)}<span>${round.consumption}</span></span></span>
    <span title="Firing rate">${round.rate}</span>
    <span title="Damage per shot">${turretDamage(round.damage)}</span>
    <span title="Damage per second">${turretDamage(round.dps)}</span>
  </div>`).join("");
  const boosters = turret.boosters.map(booster => `<div class="turret-booster">
    ${turretIcon(booster)}<span>${booster.amount}</span><b>(${booster.speed})</b>
  </div>`).join("");

  return `<article class="turret-entry" data-unlock-sector="${turret.sector}" style="--turret-accent:${turret.accent};--turret-size:${turret.size}" aria-label="${turret.name}. Available by ${campaignSectors[sectorRank.get(turret.sector)][1]}.">
    <h2>${turret.name} <span class="turret-targets">(${turret.targets})</span><span class="turret-range" title="Range in tiles">Range ${turret.range / 8}</span><span class="turret-description">${turret.description}</span></h2>
    <div class="turret-entry__main">
      <div class="turret-visual" title="${turret.size} by ${turret.size} tiles">
        <img class="turret-base" src="${A}/turrets/bases/${turret.size}.png" alt="">
        <img class="turret-face" src="${A}/turrets/${turret.id}.png" alt="${turret.name} turret facing right">
        <span class="turret-shot" aria-hidden="true"></span>
      </div>
      <div class="turret-cost" aria-label="Construction cost"><span class="turret-column-label">Cost</span>${cost}</div>
      <div class="turret-ammo">
        <div class="turret-ammo__head"><span>Ammo</span><span>Rate</span><span>DMG Per<br>Shot</span><span>DMG Per<br>Second</span></div>
        ${ammo}
      </div>
      <div class="turret-boosters" aria-label="Boosters">
        <span class="turret-column-label">Booster</span>
        ${boosters || `<span class="turret-booster--none">—</span>`}
      </div>
    </div>
  </article>`;
}

function unitNode(unit, tier) {
  return `<article class="unit-node" data-unlock-sector="${unit.sector}" style="--unit-size:${48 + tier * 14}px" tabindex="0" aria-label="${unit.name}, tier ${tier}. ${unit.description}">
    <h3>${unit.name}<br><span class="unit-node__tier">Tier ${tier}</span></h3>
    <div class="unit-node__visual"><img src="${A}/units/${unit.id}.png" alt="${unit.name}"></div>
    <div class="unit-node__description"><strong>${unit.name}</strong><span>${unit.description}</span></div>
  </article>`;
}

function unitRecipeResource(resource) {
  let visual = "";
  if (resource.unit) visual = `<img src="${A}/units/${resource.unit}.png" alt="${resource.unit}">`;
  else if (resource.wall) visual = `<img src="${A}/walls/${resource.wall}-wall-large.png" alt="Large ${resource.wall} wall">`;
  else if (resource.icon) visual = `<img src="${icons[resource.icon]}" alt="${resource.icon}">`;
  else if (resource.kind === "power") visual = `<img class="unit-edge-recipe__power" src="${A}/resources/power.png" alt="Power">`;
  return `<span class="${resource.unit ? "unit-edge-recipe__payload" : ""}">${visual}${resource.value}</span>`;
}

function unitEdgeRecipe(recipe) {
  const payloads = recipe.resources.filter(resource => resource.unit);
  const resources = recipe.resources.filter(resource => !resource.unit);
  return `<aside class="unit-edge-recipe${recipe.blocks.length > 1 ? " unit-edge-recipe--multi" : ""}" aria-label="${recipe.blocks.map(block => block.name).join(" and ")}">
    <span class="unit-edge-recipe__blocks">${recipe.blocks.map(block => `<img src="${A}/blocks/${block.id}.png" alt="${block.name}" title="${block.name}">`).join("")}</span>
    ${payloads.length ? `<span class="unit-edge-recipe__payloads">${payloads.map(unitRecipeResource).join("")}</span>` : ""}
    <span class="unit-edge-recipe__resources">${resources.map(unitRecipeResource).join("")}</span>
  </aside>`;
}

function unitResult(unit, tier, recipe) {
  return `<div class="unit-result${recipe.blocks.length > 1 ? " unit-result--multi" : ""}" data-unlock-sector="${unit.sector}">${unitEdgeRecipe(recipe)}${unitNode(unit, tier)}</div>`;
}

function unitTree(group) {
  return `<section class="unit-tree" style="--unit-accent:${group.accent}">
    <h2>${group.name}</h2>
    <div class="unit-tree__track">
      <div class="unit-tree__row unit-tree__row--core">
        ${unitResult(group.units[0], 1, group.recipes.tier1)}
        ${unitResult(group.units[1], 2, group.recipes.tier2)}
        ${unitResult(group.units[2], 3, group.recipes.tier3)}
      </div>
      <div class="unit-tree__branch unit-tree__branch--from-two" data-unlock-sector="${group.units[4].sector}">
        ${unitResult(group.units[4], 5, group.recipes.tier5)}
      </div>
      <div class="unit-tree__branch unit-tree__branch--from-one" data-unlock-sector="${group.units[3].sector}">
        ${unitResult(group.units[3], 4, group.recipes.tier4)}
      </div>
      <span class="unit-tree__edge unit-tree__edge--top unit-tree__edge--tier2" data-unlock-sector="${group.units[1].sector}" aria-hidden="true"></span>
      <span class="unit-tree__edge unit-tree__edge--top unit-tree__edge--tier3" data-unlock-sector="${group.units[2].sector}" aria-hidden="true"></span>
      <span class="unit-tree__edge unit-tree__edge--branch unit-tree__edge--tier5" data-unlock-sector="${group.units[4].sector}" aria-hidden="true"></span>
      <span class="unit-tree__edge unit-tree__edge--branch unit-tree__edge--tier4" data-unlock-sector="${group.units[3].sector}" aria-hidden="true"></span>
    </div>
  </section>`;
}

const officialGroups = [
  { name: "Production", ids: [["vent-condenser", "reinforced-pump"], "cliff-crusher", "large-cliff-crusher", "plasma-bore", "large-plasma-bore", "impact-drill", "eruption-drill"] },
  { name: "Power", ids: ["turbine-condenser", "chemical-combustion-chamber", "pyrolysis-generator", "flux-reactor", "neoplasia-reactor"] },
  { name: "Crafting", ids: ["silicon-arc-furnace", "electrolyzer", "atmospheric-concentrator", "oxidation-chamber", "electric-heater", "slag-heater", "phase-heater", "carbide-crucible", "surge-crucible", "cyanogen-synthesizer", "phase-synthesizer"] }
];

const byId = new Map(blocks.map(block => [block.id, block]));

grid.innerHTML = `
  <div class="infrastructure-layout">
    ${officialGroups.map(group => `
      <section class="category-group category-group--${group.name.toLowerCase()}">
        <h2 class="group-title">${group.name}</h2>
        <div class="category-grid">${group.ids.map(entry => Array.isArray(entry)
          ? `<div class="entry-stack">${entry.map(id => blockCard(byId.get(id))).join("")}</div>`
          : blockCard(byId.get(entry))).join("")}</div>
      </section>
    `).join("")}
  </div>
  <div class="units-layout" hidden>
    ${unitProgressions.map(unitTree).join("")}
  </div>
  <div class="turrets-layout" hidden>
    ${turrets.map(turretCard).join("")}
  </div>`;

const cards = [...document.querySelectorAll(".card")];
const progressionEntries = [...document.querySelectorAll("[data-unlock-sector]")];
const filters = [...document.querySelectorAll(".filter")];
const sectorFilter = document.querySelector("#sector-filter");

sectorFilter.innerHTML = campaignSectors.map(([id, name]) => `<option value="${id}">${name}</option>`).join("");

function filterBySector(selected) {
  const fallback = campaignSectors.at(-1)[0];
  const sector = sectorRank.has(selected) ? selected : fallback;
  const capturedRank = sectorRank.get(sector);
  sectorFilter.value = sector;
  progressionEntries.forEach(entry => {
    entry.toggleAttribute("hidden", sectorRank.get(entry.dataset.unlockSector) > capturedRank);
  });
  document.querySelectorAll(".entry-stack").forEach(stack => {
    stack.hidden = [...stack.querySelectorAll(".card")].every(card => card.hidden);
  });
  const url = new URL(location.href);
  url.searchParams.set("sector", sector);
  history.replaceState(null, "", url);
}

function showView(selected) {
  const view = selected === "units" ? "units" : selected === "turrets" ? "turrets" : "production";
  const tab = view === "production" ? "infrastructure" : view;
  filters.forEach(button => button.classList.toggle("is-active", button.dataset.filter === tab));
  grid.dataset.view = view;
  document.querySelector(".infrastructure-layout").hidden = view !== "production";
  document.querySelector(".units-layout").hidden = view !== "units";
  document.querySelector(".turrets-layout").hidden = view !== "turrets";
  cards.forEach(card => card.classList.remove("is-open"));
  const url = new URL(location.href);
  url.searchParams.set("tab", tab);
  history.replaceState(null, "", url);
}

filters.forEach(button => button.addEventListener("click", () => showView(button.dataset.filter)));

const initialParams = new URLSearchParams(location.search);
showView(initialParams.get("tab"));
filterBySector(initialParams.get("sector"));
sectorFilter.addEventListener("change", () => filterBySector(sectorFilter.value));

cards.forEach(card => {
  card.addEventListener("click", () => {
    const willOpen = !card.classList.contains("is-open");
    cards.forEach(other => other.classList.remove("is-open"));
    card.classList.toggle("is-open", willOpen);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    cards.forEach(card => card.classList.remove("is-open"));
    document.activeElement?.blur();
  }
});
