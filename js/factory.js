const factory = {
    "furnace": ["cobblestone"],
    "note_block": ["planks", "redstone"],
    "rail": ["iron", "stick"],
    "powered_rail": ["gold", "stick", "redstone"],
    "activator_rail": ["iron", "stick", "redstone_torch"],
    "detector_rail": ["iron", "redstone", "stone_pressure_plate"],
    "hopper": ["iron", "chest"],
    "observer": ["cobblestone", "redstone", "quartz"],
    "tripwire": ["iron", "stick", "planks"],
    "fence_gate": ["stick", "planks"],
    "fence": ["stick", "planks"],
    "chiseled_bookshelf": ["planks", "plank_slab"],
    "stone_bricks": ["stone"],
    "composter": ["plank_slab"],
    "barrel": ["planks", "plank_slab"],
    "smooth_stone_slab": ["smooth_stone"],
    "repeater": ["stone", "redstone", "redstone_torch"],
    "comparator": ["stone", "quartz", "redstone_torch"],
    "andesite": ["diorite", "cobblestone"],
    "granite": ["diorite", "quartz"],
    "stonecutter": ["stone", "iron"],
    "copper_trapdoor": ["copper"],
    "copper_door": ["copper"],
    "iron_door": ["iron"],
    "iron_trapdoor": ["iron"],
    "lever": ["stick", "cobblestone"],
    "stone_button": ["cobblestone"],
    "wood_button": ["planks"],
    "crafter": ["iron", "redstone", "crafting_table", "dropper"],
    "lightning_rod": ["copper"],
    "cauldron": ["iron"],
    "bucket": ["iron"],
    "redstone_lamp": ["glowstone", "redstone"],
    "sticky_piston": ["slimeball", "piston"],
    "copper_bulb": ["copper_block", "redstone", "blaze_rod"],
    "copper_block": ["copper"],
    "stick": ["planks"],
    "chest": ["planks"],
    "dropper": ["cobblestone", "redstone"],
    "crafting_table": ["planks"],
    "redstone_torch": ["redstone", "stick"],
    "plank_slab": ["planks"],
    "stone_pressure_plate": ["stone"],
    "stone": ["cobblestone"],
    "smooth_stone": ["stone"],
    "piston": ["planks", "cobblestone", "iron", "redstone"],
    "diorite": ["cobblestone", "quartz"],
    "glowstone": ["glowstone_dust"],
    "lead": ["string"],
    // "bow": ["string", "stick"],
    "shulker_box": ["shulker_shell", "chest"]
    // "dispenser": ["bow", "cobblestone", "redstone"]
}


let nodes = [];
let edges = [];
let recipes = [];
const start = "FACTORY";
let network;


function drawGraph() {
    const data = {
        nodes: nodes,
        edges: edges,
      };
    const options = {
    edges: {
        font: { size: 20, color: '#000000' },
        arrows: 'to',
        hoverWidth: 4,
        selectionWidth: 4,
        // edge shadows are super laggy
        // shadow: true,
        smooth: {
        type: "cubicBezier",
        forceDirection: 'vertical'
        }
    },
    nodes: {
        labelHighlightBold: true,
        font: { size: 24, color: '#ffffff', background: 'rgba(0,0,0,0.75)' },
        size: 40,
        imagePadding: 10,
        shape: 'circularImage',
        shadow: true
    },
    layout: {
        hierarchical: {
        sortMethod: 'directed', 
        direction: 'UD', 
        nodeSpacing: 150, 
        treeSpacing: 200, 
        levelSeparation: 500, 
        shakeTowards: 'roots',
        },
        randomSeed: 3,
    },
    interaction: {
        hover: true,
        multiselect: true
    },
    physics: {
        enabled: true,
        hierarchicalRepulsion: {
            nodeDistance: 200
        }
    },
    configure: {
        enabled: false
    }
    };
    const container = document.getElementById("network");
    networkConstruct(container, data, options);
}

function networkConstruct(container, data, options) {
    if (nodes.some(node => node.id === start)) {
        network = new Network(container, data, options);
        network.body.nodes[start].setOptions({ color: { background: "red" } });
    }
    else{
        network = new vis.Network(container, data, options);
    }
}

function generateGraphFromJSON() {
    for (const [output, inputs] of Object.entries(factory)) {
      if (!nodes.some((node) => node.id === output)) {
        // If output isn't present in the list
        nodes.push({ id: output, label: output, image: `./img/${output}.png` });
      }

      inputs.forEach(input => {
        if (!nodes.some((node) => node.id === input)) {
          nodes.push({ id: input, label: input, image: `./img/${input}.png` });
          recipes.push({ item: input, ingredients: [], image: `./img/${input}.png`});
        }
        edges.push({ from: input, to: output, label: ""});
      });
      
      let foundExisting = false;
      recipes.some((recipe) => {
        if (recipe.item === output && recipe.ingredients.length < inputs.length) {
          recipes[recipes.indexOf(recipe)] = { item: output, ingredients: inputs, image: `./img/${output}.png`}
          foundExisting = true;
        }
      });
      
      if (!foundExisting) {
        recipes.push({ item: output, ingredients: inputs, image: `./img/${output}.png`});
      }
    }

    nodes.forEach(node => {
        let color = "";
        let border = "";
        if (!edges.some((edge) => edge.to === node.id)) {
            // Tier 1: items coming into the factory
            color = "rgba(255, 0, 0, 0.5)";
            border = "red";
        } 
        else if (!edges.some((edge) => edge.from === node.id)) {
            // Tier 3: result items
            color = "rgba(0, 0, 255, 0.5)";
            border = "blue";
        } 
        else if (!edges.some((edge) => edge.from === node.id && !edges.some((edge) => edge.to === node.id))) {
            // Tier 2: result items also used in recipes
            color = "rgba(0, 255, 0, 0.5)";
            border = "green";
        }

        node.color = {background: color, border: border, highlight: {background: color, border: 'black'}, hover: {background: color, border: 'black'}}

        recipes.some((recipe) => {
            if (recipe.item == node.id) {
                recipe.color = color;
            }
        });
    });
    generateRecipeCards();
    drawGraph();
}

function generateRecipeCards() {
    const container = document.getElementById("card-container");
    recipes.map(recipe => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.backgroundColor = recipe.color;
        card.id = recipe.item;
        const header = document.createElement("h3");
        header.textContent = recipe.item;
        header.onclick = function() {
            highlightNode(recipe.item);
        }
        const icon = document.createElement("img");
        icon.src = recipe.image;
        const links = document.createElement("div");
        links.className = "link-container";
        recipe.ingredients.map(item => {
            const button = document.createElement("button");
            button.className = "slimbutton";
            button.textContent = item;
            button.onclick = function() {
                highlightNode(item);
            }
            links.appendChild(button);
        });

        card.appendChild(icon);
        card.appendChild(header);
        card.appendChild(links);


        container.appendChild(card);
    })
}

function highlightNode(nodeName) {
    network.selectNodes([nodeName]);
    network.focus(nodeName, {animation: true, scale: 1.5});
}