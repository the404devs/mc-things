const renamedKeys = {
    "minecraft:play_one_minute": "minecraft:play_time",
    "minecraft:grass": "minecraft:short_grass"
}

const primaryStats = document.getElementById("primary");
const secondaryStats = document.getElementById("secondary");

let deltaStats = {};

async function loadStats(year) {
    primaryStats.replaceChildren();
    secondaryStats.replaceChildren();

    Array.from(document.getElementsByClassName("minibutton")).forEach(e => {e.classList.remove("active")})
    document.getElementById(year).classList.add("active");
    
    const response1 = await fetch(`data/stats-${year}.json`);
    const response2 = await fetch(`data/stats-${year-1}.json`);
    const currentYearStats = await response1.json();
    const previousYearStats = await response2.json();

    deltaStats = constructDeltaStats(currentYearStats.stats, previousYearStats.stats)
    console.log(deltaStats)
    console.log(currentYearStats.stats["minecraft:picked_up"]["minecraft:cod"])

    
    primaryStats.appendChild(generateStatElement("clock", `You played for <b>${((deltaStats["minecraft:custom"]["minecraft:play_time"]) / 20 / 60 / 60).toFixed(2)}</b> hours!`, "", "primary"));
    primaryStats.appendChild(generateStatElement("mob_killed", `You killed <b>${sum(deltaStats["minecraft:killed"])}</b> mobs!`, `Most killed mob: <b>${getTopValue(deltaStats["minecraft:killed"])}</b>`, "primary", "minecraft:killed"));
    primaryStats.appendChild(generateStatElement("killed_by", `You died to mobs <b>${sum(deltaStats["minecraft:killed_by"])}</b> times!`, `Leading cause of death: <b>${getTopValue(deltaStats["minecraft:killed_by"])}</b>`, "primary", "minecraft:killed_by"));
    primaryStats.appendChild(generateStatElement("block_mined", `You mined <b>${sum(deltaStats["minecraft:mined"])}</b> blocks!`, `Most mined block: <b>${getTopValue(deltaStats["minecraft:mined"])}</b>`, "primary", "minecraft:mined"));
    primaryStats.appendChild(generateStatElement("item_crafted", `You crafted <b>${sum(deltaStats["minecraft:crafted"])}</b> items!`, `Most crafted item: <b>${getTopValue(deltaStats["minecraft:crafted"])}</b>`, "primary", "minecraft:crafted"));
    primaryStats.appendChild(generateStatElement("item_dropped", `You dropped <b>${sum(deltaStats["minecraft:dropped"])}</b> items!`, `Most dropped item: <b>${getTopValue(deltaStats["minecraft:dropped"])}</b>`, "primary", "minecraft:dropped"));
    primaryStats.appendChild(generateStatElement("item_picked_up", `You picked up <b>${sum(deltaStats["minecraft:picked_up"])}</b> items!`, `Most picked-up item: <b>${getTopValue(deltaStats["minecraft:picked_up"])}</b>`, "primary", "minecraft:picked_up"));
    primaryStats.appendChild(generateStatElement("item_used", `You used <b>${sum(deltaStats["minecraft:used"])}</b> items!`, `Most used item: <b>${getTopValue(deltaStats["minecraft:used"])}</b>`, "primary", "minecraft:used"));
    primaryStats.appendChild(generateStatElement("item_broken", `You broke <b>${sum(deltaStats["minecraft:broken"])}</b> tools!`, `Most broken item: <b>${getTopValue(deltaStats["minecraft:broken"])}</b>`, "primary", "minecraft:broken"));
    
    
    secondaryStats.appendChild(
        generateStatElement(
            "clock",
            `<b>${deltaStats["minecraft:custom"]["minecraft:leave_game"]}</b> play sessions!`,
            `Average session length: <b>${((deltaStats["minecraft:custom"]["minecraft:play_time"]) / 20 / 60 / 60 / deltaStats["minecraft:custom"]["minecraft:leave_game"]).toFixed(2)}</b> hours`,
            "secondary"
        )
    )
    
    secondaryStats.appendChild(
        generateStatElement(
            "health_boost",
            `You bred <b>${deltaStats["minecraft:custom"]["minecraft:animals_bred"]}</b> animals!`,
            "",
            "secondary"
        )
    )    

    secondaryStats.appendChild(
        generateStatElement(
            "glowing",
            `You died <b>${deltaStats["minecraft:custom"]["minecraft:deaths"]}</b> times!`,
            "",
            "secondary"
        )
    )

    secondaryStats.appendChild(
        generateStatElement(
            "mob_killed",
            `You dealt <b>${deltaStats["minecraft:custom"]["minecraft:damage_dealt"]}</b> damage!`,
            "",
            "secondary"
        )
    )

    secondaryStats.appendChild(
        generateStatElement(
            "resistance",
            `You took <b>${deltaStats["minecraft:custom"]["minecraft:damage_taken"]}</b> damage!`,
            "",
            "secondary"
        )
    )

    secondaryStats.appendChild(
        generateStatElement(
            "jump_boost",
            `You jumped <b>${deltaStats["minecraft:custom"]["minecraft:jump"]}</b> times!`,
            "",
            "secondary"
        )
    )

    secondaryStats.appendChild(
        generateStatElement(
            "bed",
            `You slept <b>${deltaStats["minecraft:custom"]["minecraft:sleep_in_bed"]}</b> times!`,
            "",
            "secondary"
        )
    )

    secondaryStats.appendChild(
        generateStatElement(
            "raid_omen",
            `You triggered <b>${deltaStats["minecraft:custom"]["minecraft:raid_trigger"]}</b> raids!`,
            "",
            "secondary"
        )
    )

    secondaryStats.appendChild(
        generateStatElement(
            "hero_of_the_village",
            `<b>${deltaStats["minecraft:custom"]["minecraft:traded_with_villager"]}</b> trades with villagers!`,
            "",
            "secondary"
        )
    )

    secondaryStats.appendChild(
        generateStatElement(
            "cod",
            `Caught <b>${deltaStats["minecraft:custom"]["minecraft:fish_caught"]}</b> fish!`,
            "",
            "secondary"
        )
    )

    secondaryStats.appendChild(
        generateStatElement(
            "enchant",
            `Enchanted <b>${deltaStats["minecraft:custom"]["minecraft:enchant_item"]}</b> items!`,
            "",
            "secondary"
        )
    )



    const travelNode = document.createElement("div");
    travelNode.classList = "stat secondary";

    const header = document.createElement("h3");
    header.textContent = "Travel Stats";
    const icon = document.createElement("img");
    icon.src = "img/speed.png";
    const footer = document.createElement("div");
    footer.className = "stat-footer";
    footer.style.flexDirection = "column";
    footer.style.alignItems = "flex-start";
    footer.style.height = "auto";

    const travelStats = [
        `Elytra: <b>${(deltaStats["minecraft:custom"]["minecraft:aviate_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Boat: <b>${(deltaStats["minecraft:custom"]["minecraft:boat_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Minecart: <b>${(deltaStats["minecraft:custom"]["minecraft:minecart_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Horse: <b>${(deltaStats["minecraft:custom"]["minecraft:horse_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Pig: <b>${(deltaStats["minecraft:custom"]["minecraft:pig_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Strider: <b>${(deltaStats["minecraft:custom"]["minecraft:strider_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Swimming: <b>${(deltaStats["minecraft:custom"]["minecraft:swim_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Climbing: <b>${(deltaStats["minecraft:custom"]["minecraft:climb_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Crouching: <b>${(deltaStats["minecraft:custom"]["minecraft:crouch_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Falling: <b>${(deltaStats["minecraft:custom"]["minecraft:fall_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Flying: <b>${(deltaStats["minecraft:custom"]["minecraft:fly_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Sprinting: <b>${(deltaStats["minecraft:custom"]["minecraft:sprint_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
        `Walking: <b>${(deltaStats["minecraft:custom"]["minecraft:walk_one_cm"] / 100 / 1000).toFixed(2)}</b>km`,
    ];

    travelStats.forEach(stat => {
        const span = document.createElement("span");
        span.innerHTML = stat;
        footer.appendChild(span);
    });

    travelNode.appendChild(icon);
    travelNode.appendChild(header);
    travelNode.appendChild(footer);
    secondaryStats.appendChild(travelNode)


    const blockNode = document.createElement("div");
    blockNode.classList = "stat secondary";

    const header2 = document.createElement("h3");
    header2.textContent = "Block Interactions";
    const icon2 = document.createElement("img");
    icon2.src = "img/bell.png";
    const footer2 = document.createElement("div");
    footer2.className = "stat-footer";
    footer2.style.flexDirection = "column";
    footer2.style.alignItems = "flex-start";
    footer2.style.height = "auto";

    const blockStats = [
        `Anvil: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_anvil"]}</b>`,
        `Barrel: <b>${deltaStats["minecraft:custom"]["minecraft:open_barrel"]}</b>`,
        `Beacon: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_beacon"]}</b>`,
        `Bell: <b>${deltaStats["minecraft:custom"]["minecraft:bell_ring"]}</b>`,
        `Blast Furnace: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_blast_furnace"]}</b>`,
        `Brewing Stand: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_brewingstand"]}</b>`,
        `Campfire: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_campfire"]}</b>`,
        `Cartography Table: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_cartography_table"]}</b>`,
        `Cauldron: <b>${deltaStats["minecraft:custom"]["minecraft:use_cauldron"] + deltaStats["minecraft:custom"]["minecraft:fill_cauldron"]}</b>`,
        `Chest: <b>${deltaStats["minecraft:custom"]["minecraft:open_chest"]}</b>`,
        `Crafting Table: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_crafting_table"]}</b>`,
        `Dispenser: <b>${deltaStats["minecraft:custom"]["minecraft:inspect_dispenser"]}</b>`,
        `Dropper: <b>${deltaStats["minecraft:custom"]["minecraft:inspect_dropper"]}</b>`,
        `Ender Chest: <b>${deltaStats["minecraft:custom"]["minecraft:open_enderchest"]}</b>`,
        `Flower Pot: <b>${deltaStats["minecraft:custom"]["minecraft:pot_flower"]}</b>`,
        `Furnace: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_furnace"]}</b>`,
        `Grindstone: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_grindstone"]}</b>`,
        `Hopper: <b>${deltaStats["minecraft:custom"]["minecraft:inspect_hopper"]}</b>`,
        `Jukebox: <b>${deltaStats["minecraft:custom"]["minecraft:play_record"]}</b>`,
        `Lectern: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_lectern"]}</b>`,
        `Loom: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_loom"]}</b>`,
        `Noteblock: <b>${deltaStats["minecraft:custom"]["minecraft:play_noteblock"] + deltaStats["minecraft:custom"]["minecraft:tune_noteblock"]}</b>`,
        `Shulker Box: <b>${deltaStats["minecraft:custom"]["minecraft:open_shulker_box"]}</b>`,
        `Smithing Table: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_smithing_table"]}</b>`,
        `Smoker: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_smoker"]}</b>`,
        `Stonecutter: <b>${deltaStats["minecraft:custom"]["minecraft:interact_with_stonecutter"]}</b>`,
        `Trapped Chest: <b>${deltaStats["minecraft:custom"]["minecraft:trigger_trapped_chest"]}</b>`
    ];

    blockStats.forEach(stat => {
        const span = document.createElement("span");
        span.innerHTML = stat;
        footer2.appendChild(span);
    });

    blockNode.appendChild(icon2)
    blockNode.appendChild(header2)
    blockNode.appendChild(footer2)

    secondaryStats.appendChild(blockNode)
    
}


function generateStatElement(icon, headerText, footerText, classname, key) {
    const stat = document.createElement("div");
    stat.classList = `stat ${classname}`;
    let iconImg = document.createElement("img");
    iconImg.src = `img/${icon}.png`;
    let header = document.createElement("h3");
    header.innerHTML = headerText;
    let footer = document.createElement("div");
    footer.className = 'stat-footer';
    let statimg = document.createElement("img");
    let foottext = document.createElement("span");
    foottext.innerHTML = footerText;

    // footer.appendChild(statimg);
    footer.appendChild(foottext);

    stat.appendChild(iconImg);
    stat.appendChild(header);

    if (footerText) {
        stat.appendChild(footer);
    }

    if (key) {
        const fullList = document.createElement("div");
        fullList.className = "collapsable";

        const sortedKeyList = Object.keys(deltaStats[key]).sort(function(a, b) {
            if (deltaStats[key][a] < deltaStats[key][b]) {
                return 1;
            } else if (deltaStats[key][a] > deltaStats[key][b]) {
                return -1;
            } else {
                return 0;
            }
        });

        sortedKeyList.forEach(stat => {
            const span = document.createElement("span");
            span.innerHTML = `${displayName(stat)}: <b>${deltaStats[key][stat]}`;
            fullList.appendChild(span);
        });
        
        const toggle = document.createElement("button");
        toggle.className = "expandToggle";
        toggle.textContent = "+";

        toggle.onclick = function () {
            this.classList.toggle('open');
            const panel = this.nextElementSibling;
            panel.classList.toggle('open');

            if (panel.classList.contains("open")) {
                this.textContent = "-";
            } else {
                this.textContent = "+";
            }
        }
        footer.appendChild(toggle);
        footer.appendChild(fullList);
    }

    return stat;
}

function constructDeltaStats(c, p) {
    let d = {...c};
    let nameConvertFlag = false;
    Object.keys(d).forEach(key => {
        nameConvertFlag = false;
        if (Object.keys(renamedKeys).includes(key)) {
            // console.log(key + " is not it's modern name");
            nameConvertFlag = true;
        }

        if (d[key] instanceof Object) {
            d[key] = constructDeltaStats(c[key], p[key])
        } else {
            if (p[key] == null) {
                p[key] = 0
                // console.log(key + " does not exist in prev year");
            }
            if (nameConvertFlag) {
                d[renamedKeys[key]] = c[key] - p[key];
                delete d[key]
                // console.log("renamed " + key)
            } else {
                d[key] = c[key] - p[key];
            }
        }


    });
    return d;
}

function sum(object) {
    let sum = 0;
    Object.keys(object).forEach(key => {
        if (object[key] == null) {
            console.log(object[key])

        }
        sum += object[key];
    });
    return sum;
}

function getTopValue(object) {
    let max = 0;
    let name = "";
    Object.keys(object).forEach(key => {
        if (object[key] > max) {
            max = object[key];
            name = key;
        }
    });

    return `${displayName(name)} (${max})`;
}

function displayName(str) {
    return str.replace("minecraft:", "").replaceAll("_", " ").replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
      );
}  

loadStats(2025);