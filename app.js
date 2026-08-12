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
  "vent-condenser": 3, "cliff-crusher": 2, "large-cliff-crusher": 3,
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
  <article class="card" tabindex="0" data-category="${block.category}" data-size="${block.size}" style="--card-accent:${block.accent};--block-size:${block.size}" aria-label="${block.name}. ${block.size} by ${block.size} tiles. Focus or hover for description." aria-describedby="description-${block.id}">
    <div class="card__body">
      <h2>${block.name}</h2>
      ${recipe(block)}
      ${wallRateGuide(block)}
    </div>
    <div class="description" id="description-${block.id}"><p>${block.description}</p></div>
  </article>`;
}

const officialGroups = [
  { name: "Production", ids: ["vent-condenser", "cliff-crusher", "large-cliff-crusher", "plasma-bore", "large-plasma-bore", "impact-drill", "eruption-drill"] },
  { name: "Power", ids: ["turbine-condenser", "chemical-combustion-chamber", "pyrolysis-generator", "flux-reactor", "neoplasia-reactor"] },
  { name: "Crafting", ids: ["silicon-arc-furnace", "electrolyzer", "atmospheric-concentrator", "oxidation-chamber", "electric-heater", "slag-heater", "phase-heater", "carbide-crucible", "surge-crucible", "cyanogen-synthesizer", "phase-synthesizer"] }
];

const byId = new Map(blocks.map(block => [block.id, block]));

grid.innerHTML = `
  <div class="infrastructure-layout">
    ${officialGroups.map(group => `
      <section class="category-group category-group--${group.name.toLowerCase()}">
        <h2 class="group-title">${group.name}</h2>
        <div class="category-grid">${group.ids.map(id => blockCard(byId.get(id))).join("")}</div>
      </section>
    `).join("")}
  </div>
  <div class="units-layout" hidden>
    ${blocks.filter(block => block.category === "units").map(blockCard).join("")}
  </div>`;

const cards = [...document.querySelectorAll(".card")];
const filters = [...document.querySelectorAll(".filter")];

function showView(selected) {
  const view = selected === "units" ? "units" : "production";
  const tab = view === "units" ? "units" : "infrastructure";
  filters.forEach(button => button.classList.toggle("is-active", button.dataset.filter === tab));
  grid.dataset.view = view;
  document.querySelector(".infrastructure-layout").hidden = view === "units";
  document.querySelector(".units-layout").hidden = view !== "units";
  cards.forEach(card => card.classList.remove("is-open"));
}

filters.forEach(button => button.addEventListener("click", () => showView(button.dataset.filter)));

showView(new URLSearchParams(location.search).get("tab"));

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
