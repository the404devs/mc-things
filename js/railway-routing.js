const container = document.getElementById("vis-container");

const options = {
    edges: {
      font: { size: 20, color: '#ffffff', strokeColor: '#000000' },
      width: 2,
      hoverWidth: 4,
      selectionWidth: 6,
      // edge shadows are super laggy
      shadow: true,
    //   smooth: {
    //     type: "cubicBezier",
    //     forceDirection: 'vertical'
    //   }
    },
    nodes: {
      labelHighlightBold: true,
    //   font: { size: 24, color: '#ffffff', background: 'rgba(0,0,0,0.75)' },
    //   font: { size: 24, color: '#000000', background: 'rgba(255,255,255,0.5)' },
      size: 40,
      imagePadding: 10,
    //   shape: 'circularImage',
      shadow: true
    },
    layout: {
    //   hierarchical: {
    //     sortMethod: 'directed', 
    //     direction: 'UD', 
    //     nodeSpacing: 200, 
    //     treeSpacing: 0, 
    //     levelSeparation: 1000, 
    //     shakeTowards: 'roots',
    //     parentCentralization: false
    //   },
      randomSeed: 4,
    },
    interaction: {
      hover: true,
      multiselect: true
    },
    physics: {
      enabled: true,
    //   solver: "forceAtlas2Based"
    //   hierarchicalRepulsion: {
    //     nodeDistance: 400,
    //     centralGravity: 0.1,
    //     springConstant: 0.02,
    //     damping: 1,
    //     avoidOverlap: 1
    //   }
    },
    configure: {
      enabled: false
    },
    groups: {
        junction: {
            labelHighlightBold: true,
            shape: 'box',
            color: {
                background: "lightgrey",
                border: "white",
                highlight: {
                    background: "lightgrey",
                    border: "black",
                },
                hover: {
                    background: "lightgrey",
                    border: "black",
                }
            },
            font: {
                color: 'black',
                background: 'transparent',
                size: 20,
                bold: true
            }
        },
        green: {
            labelHighlightBold: true,
            color: {
                background: "lime",
                border: "green",
                highlight: {
                    background: "lime",
                    border: "black",
                },
                hover: {
                    background: "lime",
                    border: "black",
                }
            },
        },
        red: {
            labelHighlightBold: true,
            color: {
                background: "pink",
                border: "red",
                highlight: {
                    background: "pink",
                    border: "black",
                },
                hover: {
                    background: "pink",
                    border: "black",
                }
            },
        },
        yellow: {
            labelHighlightBold: true,
            color: {
                background: "yellow",
                border: "gold",
                highlight: {
                    background: "yellow",
                    border: "black",
                },
                hover: {
                    background: "yellow",
                    border: "black",
                }
            },
        },
        orange: {
            labelHighlightBold: true,
            color: {
                background: "peachpuff",
                border: "orange",
                highlight: {
                    background: "peachpuff",
                    border: "black",
                },
                hover: {
                    background: "peachpuff",
                    border: "black",
                }
            },
        },
        blue: {
            labelHighlightBold: true,
            color: {
                background: "lightblue",
                border: "blue",
                highlight: {
                    background: "lightblue",
                    border: "black",
                },
                hover: {
                    background: "lightblue",
                    border: "black",
                }
            },
        },
        purple: {
            labelHighlightBold: true,
            color: {
                background: "#a080a0",
                border: "purple",
                highlight: {
                    background: "#a080a0",
                    border: "black",
                },
                hover: {
                    background: "#a080a0",
                    border: "black",
                }
            },
        }
    }
};

const stations = [
    { id: "meadowgrace", label: "Meadowgrace", group: "red" },
    { id: "gg", label: "Game Garden", group: "red" },
    { id: "shroom", label: "Mushroom\nPoint", group: "red" },
    { id: "eclipse", label: "Eclipse\nHarbour", group: "red" },
    { id: "dwr", label: "Darkwood Rise", group: "red" },
    { id: "base", label: "Base", group: "red" },
    { id: "castle", label: "Stoneholt\nCastle", group: "red" },
    { id: "witherfields", label: "Witherfields", group: "red" },
    
    { id: "dogwood", label: "Dogwood", group: "blue" },
    { id: "end", label: "End Portal", group: "blue" },
    { id: "redstone", label: "Redstone\nIslands", group: "blue" },
    { id: "museum", label: "Mob Museum", group: "blue" },
    // { id: "goat", label: "Horn Temple", group: "blue" },
    // { id: "eastport", label: "Eastport", group: "blue" },

    { id: "omnidye", label: "The Omnidye", group: "yellow" },
    { id: "echell", label: "Echell Forest", group: "yellow" },
    { id: "cobble", label: "Cobble\nCreek", group: "yellow" },
    { id: "craglorn", label: "Craglorn", group: "yellow" },
    { id: "westport", label: "Westport", group: "yellow" },
    { id: "peakside", label: "Peakside", group: "yellow" },
    { id: "cherry", label: "Cherry\nCastle", group: "yellow" },
    { id: "dunederry", label: "Dunederry\nCity", group: "yellow" },
    
    { id: "concrete", label: "Concrete\nHall", group: "green" },
    { id: "squid", label: "Squid Farm", group: "green" },
    { id: "linhir", label: "Linhir", group: "green" },
    { id: "shulker", label: "Shulker Farm", group: "green" },
    { id: "frost", label: "Frost\nMountain", group: "green" },
    
    { id: "spiders", label: "Spiders", group: "orange" },
    { id: "arena", label: "Arena", group: "orange" },
    { id: "raid", label: "Raid Farm", group: "orange" },
    { id: "egg", label: "Egg Factory", group: "orange" },

    { id: "sandshear", label: "Sandshear", group: "purple" },
    { id: "oasis", label: "Oasis", group: "purple" },
    { id: "guardian", label: "Guardian Farm", group: "purple" },
    // { id: "mesa", label: "Mining Mesa", group: "purple" },
];

const junctions = [
    { id: "boner", label: "Beau Nur\nJunction", group: "junction" },
    { id: "bunny", label: "Rabbitree\nJunction", group: "junction" },
    { id: "stronghold", label: "Stronghold\nJunction", group: "junction" },
    { id: "dwj", label: "Darkwood\nJunction", group: "junction" },
    { id: "aurora", label: "Aurora Valley\nJunction", group: "junction" },
    { id: "jungle", label: "Jungle\nJunction", group: "junction" },
    { id: "sog", label: "Soggy\nJunction", group: "junction" },
    { id: "prairie", label: "Golden Prairie\nJunction", group: "junction" },
];

const edges = [
    { id:"1", from: "squid", to: "linhir", label: "204" },
    { id:"2", from: "linhir", to: "boner", label: "206" },
    { id:"3", from: "shulker", to: "boner", label: "343" },
    { id:"4", from: "shulker", to: "bunny", label: "208" },
    { id:"5", from: "frost", to: "bunny", label: "407" },
    { id:"6", from: "boner", to: "stronghold", label: "542", color: "yellow" },
    { id:"7", from: "westport", to: "stronghold", label: "266" },
    { id:"8", from: "peakside", to: "westport", label: "337" },
    { id:"9", from: "peakside", to: "cherry", label: "252" },
    { id:"10", from: "cherry", to: "jungle", label: "269" },
    { id:"11", from: "spiders", to: "jungle", label: "59" },
    { id:"12", from: "arena", to: "spiders", label: "720" },
    { id:"13", from: "arena", to: "sog", label: "219" },
    { id:"14", from: "castle", to: "sog", label: "379" },
    { id:"15", from: "castle", to: "base", label: "450" },
    { id:"16", from: "dwr", to: "base", label: "199" },
    { id:"17", from: "dwr", to: "dwj", label: "98" },
    { id:"18", from: "end", to: "dwj", label: "574" },
    { id:"19", from: "end", to: "stronghold", label: "34" },
    { id:"20", from: "eclipse", to: "dwj", label: "164" },
    { id:"21", from: "eclipse", to: "shroom", label: "299" },
    { id:"22", from: "shroom", to: "bunny", label: "184" },
    { id:"23", from: "craglorn", to: "boner", label: "793" },
    { id:"24", from: "craglorn", to: "cobble", label: "613" },
    { id:"25", from: "meadowgrace", to: "gg", label: "849" },
    { id:"26", from: "gg", to: "bunny", label: "201" },
    { id:"27", from: "redstone", to: "dwj", label: "333" },
    { id:"28", from: "dogwood", to: "stronghold", label: "0", dashes: [10,10] },
    { id:"29", from: "witherfields", to: "sog", label: "0", dashes: [10,10] },
    { id:"30", from: "dunederry", to: "jungle", label: "1506" },
    { id:"31", from: "museum", to: "redstone", label: "359" },
    { id:"32", from: "squid", to: "concrete", label: "308" },
    { id:"33", from: "cobble", to: "echell", label: "573" },
    { id:"34", from: "echell", to: "omnidye", label: "451" },
    { id:"35", from: "raid", to: "sog", label: "265" },
    { id:"36", from: "egg", to: "raid", label: "284" },
    { id:"37", from: "egg", to: "prairie", label: "638" },
    { id:"38", from: "sandshear", to: "prairie", label: "653" },
    { id:"39", from: "oasis", to: "prairie", label: "410" },
    { id:"40", from: "oasis", to: "aurora", label: "513" }, // Actually 613, reduced for balance
    { id:"41", from: "museum", to: "aurora", label: "693" }, // Actually 793
    // { id:"42", from: "goat", to: "aurora", label: "0", dashes: [10,10] },
    // { id:"43", from: "goat", to: "eastport", label: "0", dashes: [10,10] },
    { id:"44", from: "guardian", to: "aurora", label: "1154" },
    // { id:"45", from: "sandshear", to: "mesa", label: "0", dashes: [10,10] },
];


const junction_exits = {
    dwj: {
        north: "eclipse",
        east: "redstone",
        south: "dwr",
        west: "end"
    },
    stronghold: {
        north: "boner",
        east: "end",
        south: "westport",
        west: "dogwood"
    },
    jungle: {
        north: "cherry",
        east: "spiders",
        south: "dunederry",
        west: ""
    },
    sog: {
        north: "castle",
        east: "raid",
        south: "witherfields",
        west: "arena"
    },
    boner: {
        north: "craglorn",
        east: "shulker",
        south: "stronghold",
        west: "linhir"
    },
    bunny: {
        north: "gg",
        east: "frost",
        south: "shroom",
        west: "shulker"
    },
    prairie: {
        north: "oasis",
        east: "aurora",
        south: "sandshear",
        west: "egg"
    },
    aurora: {
        north: "guardian",
        east: "goat",
        south: "oasis",
        west: "museum"
    }
}

const data = {
    nodes: [...stations, ...junctions],
    edges: edges
}


const network = new vis.Network(container, data, options);

function highlightNode(node) {
    network.selectNodes([node]);
    network.focus(node, {animation: true, scale: 1.5});
}

function highlightNodes(nodes) {
    network.selectNodes(nodes);

    const selectedEdges = network.getSelectedEdges();
    const selectedNodes = network.getSelectedNodes();
    let edgesToSelect = [];
    selectedEdges.forEach(edgeID => {
        let edge = edges.find(edge => edge.id === edgeID);
        if (selectedNodes.includes(edge.from) && selectedNodes.includes(edge.to)) {
            edgesToSelect.push(edgeID);
        }
    });

    network.setSelection({
        nodes: nodes,
        edges: edgesToSelect
    }, {
        unselectAll: true,
        highlightEdges: false
    });

    network.fit({nodes: nodes, animation: true, scale: 1.5});
}

const stationRoutes = {}
function generateStationRoutes() {
    let maxCost = 0;
    let maxPath = [];
    const startSelector = document.getElementById("start-display");
    const endSelector = document.getElementById("end-display");
    stations.map(station => {
        const opt = document.createElement("option");
        opt.value = station.id;
        opt.text = station.label;

        startSelector.appendChild(opt);
        endSelector.appendChild(opt.cloneNode(true))

        routes = dijkstra(station.id);
        stationRoutes[station.id] = {};
        routes.forEach(route => {
            stationRoutes[station.id][route[0]] = {
                "cost": route[1],
                "path": route[2],
                "costArr": route[3]
            };
            let totalCost = 0;
            for (i = 0; i < route[3].length; i++) {
                totalCost += route[3][i];
            }

            if (totalCost > maxCost) {
                maxCost = totalCost;
                maxPath = route[2];
            }
            
        });
    });

    // console.log(maxPath);
    document.getElementById('longest-path').onclick = () => {
        getBestRoute(maxPath[0], maxPath[maxPath.length-1]);
    };
    endSelector.value = stations[stations.length-1].id;
    return stationRoutes;

}

function calcBestRoute() {
    const start = document.getElementById("start-display").value;
    const end = document.getElementById("end-display").value;

    getBestRoute(start, end);
}

function reset() {
    const container = document.getElementById("path-display");
    container.textContent = "";
    network.unselectAll();
    network.fit({nodes: [], animation: true, scale: 1.5});
}

function getBestRoute(start, end) {
    const container = document.getElementById("path-display");
    container.textContent = "";

    if (start === end) return;

    route = stationRoutes[start][end];
    highlightNodes(route.path);
    
    let i = 0;
    route.path.forEach(stop => {
        const realnode = data.nodes.find(station => (station.id == stop));
        console.log(stop, realnode);
        const group = options.groups[realnode.group];

        const fakenode = document.createElement("span");
        fakenode.className = "fakenode";
        fakenode.style.backgroundColor = group.color.background;
        fakenode.style.borderColor = group.color.border;
        fakenode.textContent = realnode.label;
        container.appendChild(fakenode);
        
        if (i < route.costArr.length) {
            const costToNextStop = route.costArr[i];
            const arrow = document.createElement("span");
            arrow.className = "nodeArrow";
            arrow.textContent = `→ ${costToNextStop} →`;
            container.appendChild(arrow);
        }
        i++;
    });
    const finalCost = route.cost;
    const arrow = document.createElement("span");
    arrow.className = "nodeArrow";
    arrow.textContent = `Total: ${finalCost}`;
    arrow.style.marginLeft = "15px";
    container.appendChild(arrow);
    return route;
}

function generateJunctionCards() {
    const container = document.getElementById("card-container");
    junctions.map(junction => {
        const card = document.createElement("div");
        card.className = "card";
        // card.style.backgroundColor = "lightgrey";
        card.id = junction.id;
        const header = document.createElement("h3");
        header.textContent = junction.label;
        header.onclick = function() {
            highlightNode(junction.id);
        }

        const links = document.createElement("div");
        links.className = "link-container";

        paths = dijkstra(junction.id);

        const north = document.createElement("div");
        const east = document.createElement("div");
        const south = document.createElement("div");
        const west = document.createElement("div");

        const tables = {
            "north": north,
            "east": east,
            "south": south,
            "west": west
        }

        for (const key in tables) {
            tables[key].className = "dirTable";
            const header = document.createElement("h5");
            header.textContent = key.toUpperCase();
            tables[key].appendChild(header);

            switch(key) {
                case "north":
                    header.style.backgroundColor = "rgb(0 0 192 / 75%)";
                    break;
                case "south":
                    header.style.backgroundColor = "rgb(218 165 32 / 75%)";
                    break;
                case "west":
                    header.style.backgroundColor = "rgb(192 0 0 / 75%)";
                    break;
                case "east":
                    header.style.backgroundColor = "rgb(0 128 0 / 75%)";
                    break;
            }
        }

        paths.forEach(path => {
            // console.log(`Adding ${path}`);
            const station = stations.find(station => station.id == path[0]);
            if (station) {
                const span = document.createElement("span");
                span.innerText = station.label.replaceAll("\n", " ");
                span.title = path[2];
                span.onclick = function() {
                    highlightNodes(path[3]);
                }
                const table = tables[path[1]];
                table.appendChild(span);
            }
        });
        links.appendChild(tables.north);
        links.appendChild(tables.west);
        links.appendChild(tables.east);
        links.appendChild(tables.south);

        // card.appendChild(icon);
        card.appendChild(header);
        card.appendChild(links);


        container.appendChild(card);
    })
}

function getNodeEdges() {
    const edgesByNode = {};
    const nodeIds = data.nodes.map((node) => node.id);

    nodeIds.forEach((nodeId) => {
        // find all edges where this node is the "from" node
        const fromEdges = edges.filter((edge) => edge.from === nodeId);
        // find all edges where this node is the "to" node
        const toEdges = edges.filter((edge) => edge.to === nodeId);
    
        // create an array to store this node's edges and weights
        const edgesWithWeights = [];
    
        // add each "from" edge to the array, with its weight
        fromEdges.forEach((edge) => {
          edgesWithWeights.push({ node: edge.to, weight: edge.label });
        });
    
        // add each "to" edge to the array, with its weight
        toEdges.forEach((edge) => {
          edgesWithWeights.push({ node: edge.from, weight: edge.label });
        });
    
        // add this node's edges and weights to the object
        edgesByNode[nodeId] = edgesWithWeights;
    });
    return edgesByNode;
}

function dijkstra(start) {
    const distances = {};
    const visited = {};
    const dijEdges = {};
    let unvisited = Object.keys(graph);
    console.log(unvisited);
    let arr = [];
    const bestEdge = {};

    unvisited.forEach((node) => {
        distances[node] = Infinity;
    });
  
    let counter = 0;
    distances[start] = 0;

    while (unvisited.length > 0) {
        let currentNode = null;
        let curLeastDistance = Infinity;
        unvisited.forEach((node) => {
            if (currentNode === null || distances[node] < distances[currentNode]) {
                currentNode = node;
            }
        });

        const neighbors = graph[currentNode];

        neighbors.forEach((neighbor) => {
            let distance = Number(neighbor.weight);
            let newDistance = distances[currentNode] + distance;
            
            if (newDistance < distances[neighbor.node]){
                distances[neighbor.node] = newDistance;
                dijEdges[neighbor.node] = {node: currentNode, weight: neighbor.weight};
            }
        });

        visited[currentNode] = distances[currentNode];
        unvisited = unvisited.filter((node) => node !== currentNode);
        counter++;

        curLeastDistance = null;
        unvisited.forEach((node) => {
            if (curLeastDistance === null || distances[node] < distances[curLeastDistance]) {
                curLeastDistance = node;
            }
        });

        if (dijEdges.hasOwnProperty(curLeastDistance)) {
            bestEdge[curLeastDistance] = { from: dijEdges[curLeastDistance].node, to: curLeastDistance, label: String(dijEdges[curLeastDistance].weight) };
            arr.push({ from: curLeastDistance, to: dijEdges[curLeastDistance].node, label: dijEdges[curLeastDistance].weight })
        }
    }


    let temp = [];
    const nodes = Object.keys(bestEdge);
  
    for (const node of nodes) {
        if (node !== start) {
            let currentNode = node;
            let path = [];
            let costArr = [];
            let totalCost = 0;
    
            while (currentNode !== start) {
                const { from, to, label } = bestEdge[currentNode];
                path.unshift(from);
                totalCost += parseInt(label);
                costArr.unshift(parseInt(label))
                currentNode = from;
            }
            path.push(node);


            let direction = "";
            if (junction_exits[start]) {
                const first_stop = path[1];
                switch(first_stop) {
                    case junction_exits[start].north:
                        direction = "north";
                        break;
                    case junction_exits[start].east:
                        direction = "east";
                        break;
                    case junction_exits[start].south:
                        direction = "south";
                        break;
                    case junction_exits[start].west:
                        direction = "west";
                        break;
                    default:
                        direction = "unknown";
                        break;
                }
                // console.log(`Shortest path from ${start} to ${node}, exit ${direction}, cost: ${totalCost}. `);
                // console.log(path);
                temp.push([node, direction, totalCost, path]);
            } else {
                temp.push([node, totalCost, path, costArr]);
            }
        }
    }
    return temp;
}

const graph = getNodeEdges();
generateJunctionCards();
generateStationRoutes();