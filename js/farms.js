const container = document.getElementById("vis-container");

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
    //   font: { size: 24, color: '#000000', background: 'rgba(255,255,255,0.5)' },
      size: 40,
      imagePadding: 10,
      shape: 'circularImage',
      shadow: true
    },
    layout: {
      hierarchical: {
        sortMethod: 'directed', 
        direction: 'UD', 
        nodeSpacing: 200, 
        treeSpacing: 0, 
        levelSeparation: 1000, 
        shakeTowards: 'roots',
        parentCentralization: false
      },
      randomSeed: 4,
    },
    interaction: {
      hover: true,
      multiselect: true
    },
    physics: {
      enabled: true,
      hierarchicalRepulsion: {
        nodeDistance: 400,
        centralGravity: 0.1,
        springConstant: 0.02,
        damping: 1,
        avoidOverlap: 1
      }
    },
    configure: {
      enabled: false
    },
    groups: {
        mob: {
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
            }
        },
        product: {
            color: {
                background: "magenta",
                border: "purple",
                highlight: {
                    background: "magenta",
                    border: "black",
                },
                hover: {
                    background: "magenta",
                    border: "black",
                }
            }
        },
        factory: {
            color: {
                background: "lightgrey",
                border: "grey",
                highlight: {
                    background: "lightgrety",
                    border: "black",
                },
                hover: {
                    background: "lightgrety",
                    border: "black",
                }
            }
        },
        location: {
            shape: 'box',
            color: {
                background: "cyan",
                border: "blue",
                highlight: {
                    background: "cyan",
                    border: "black",
                },
                hover: {
                    background: "cyan",
                    border: "black",
                }
            },
            font: {
                color: 'black',
                background: 'transparent',
                size: 85,
                bold: true
            }
        },
        farm: {
            shape: 'ellipse',
            color: {
                background: "gold",
                border: "orange",
                highlight: {
                    background: "gold",
                    border: "black",
                },
                hover: {
                    background: "gold",
                    border: "black",
                }
            },
            font: {
                color: 'black',
                background: 'transparent'
            }
        },
        machine: {
            shape: 'ellipse',
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
            font: {
                color: 'black',
                background: 'transparent'
            }
        },
        postal: {
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
                size: 30,
                bold: true
            }
        },
        storage: {
            shape: 'box',
            color: {
                background: "orange",
                border: "red",
                highlight: {
                    background: "orange",
                    border: "black",
                },
                hover: {
                    background: "orange",
                    border: "black",
                }
            },
            font: {
                color: 'black',
                background: 'transparent',
            }
        }
    }
};

const location_nodes = [
    { id: "base", label: "Base & Spawn\n(Darkwood Rise)", group: "location" },
    { id: "mushroom_point", label: "Mushroom Point", group: "location" },
    { id: "linhir", label: "Linhir", group: "location" },
    { id: "westport", label: "Westport", group: "location" },
    { id: "peakside", label: "Peakside", group: "location" },
    { id: "dunederry", label: "Dunederry City", group: "location" },
    { id: "far_west", label: "Far West", group: "location" },
    { id: "meadowgrace", label: "Meadowgrace &\nFar North", group: "location" },
    { id: "eastport", label: "Eastport", group: "location" },
    { id: "nether", label: "The Nether", group: "location" },
    { id: "end", label: "The End", group: "location" },
    { id: "stoneholt_castle", label: "Stoneholt Castle\n& South", group: "location" },
];

const location_edges = [
    { from: "base", to: "sugarcane_farm" },
    { from: "base", to: "iron_farm" },
    { from: "base", to: "kelp_farm" },
    { from: "base", to: "pump_melon" },
    { from: "base", to: "cobble_1" },
    { from: "base", to: "cactus_farm" },
    { from: "base", to: "berry_farm" },
    { from: "base", to: "moss_machine" },
    { from: "base", to: "poss_pachine" },
    { from: "base", to: "villager_crops" },
    { from: "base", to: "nether_wart_farm" },
    { from: "base", to: "creeper_farm" },
    { from: "base", to: "skeleton_grinder" },
    { from: "base", to: "super_slimer" },
    { from: "base", to: "vine_farm" },
    { from: "base", to: "cobble_blaster" },
    { from: "base", to: "bamboo_farm_2" },
    { from: "base", to: "bamboo_farm_1" },
    { from: "base", to: "mushroom_farm" },
    { from: "base", to: "honey_farm_2" },
    { from: "base", to: "dripstone_dripzone" },
    { from: "base", to: "amethyst_farm" },
    { from: "base", to: "chorus_farm" },
    { from: "base", to: "snowman_shredder" },
    { from: "base", to: "chicken_cooker" },
    { from: "base", to: "honey_farm_1" },
    { from: "base", to: "pie_shop" },
    { from: "base", to: "sniffer_farm" },
    { from: "base", to: "mushroom_manor" },
    { from: "base", to: "turtle_farm" },
    { from: "base", to: "armadillo_farm" },
    { from: "base", to: "resin_farm" },
    { from: "base", to: "qp_central", physics: false },
    { from: "base", to: "qp_bulk_storage" },
    { from: "base", to: "general_storage" },
    { from: "mushroom_point", to: "dark_oak_farm" },
    { from: "mushroom_point", to: "ice_farm" },
    { from: "mushroom_point", to: "nether_tree_farm" },
    { from: "mushroom_point", to: "mushroom_point_qp" },
    { from: "linhir", to: "linhir_qp" },
    { from: "linhir", to: "sand_duper" },
    { from: "westport", to: "westport_qp" },
    { from: "dunederry", to: "dunederry_qp" },
    { from: "linhir", to: "shulker_farm" },
    { from: "linhir", to: "squid_farm" },
    { from: "linhir", to: "moo_moo_melter" },
    { from: "westport", to: "wool_farm" },
    { from: "westport", to: "westport_tree_farm" },
    { from: "peakside", to: "cherry_castle" },
    { from: "peakside", to: "spider_farm" },
    { from: "dunederry", to: "mangrove_farm" },
    { from: "dunederry", to: "miracle_gro" },
    { from: "dunederry", to: "cocoa_bean_farm" },
    { from: "dunederry", to: "infested_slime" },
    { from: "far_west", to: "witch_farm" },
    { from: "far_west", to: "phantom_farm" },
    { from: "meadowgrace", to: "meadowgrace_qp" },
    { from: "meadowgrace", to: "trading_hall" },
    { from: "meadowgrace", to: "axolotl_farm" },
    { from: "meadowgrace", to: "dye_farm" },
    { from: "eastport", to: "goat_horn_farm" },
    { from: "eastport", to: "guardian_farm" },
    { from: "nether", to: "basalt_farm" },
    { from: "nether", to: "blaze_farm" },
    { from: "nether", to: "gold_farm" },
    { from: "nether", to: "ghast_farm" },
    { from: "nether", to: "magma_farm" },
    { from: "nether", to: "hoglin_farm" },
    { from: "end", to: "copper_farm" },
    { from: "end", to: "enderman_farm" },
    { from: "stoneholt_castle", to: "dragon_egg_duper" },
];


const sugarcane_farm_nodes = [
    { id: "sugarcane_farm", label: "Sugarcane Farm No. 3\n\nApril 7, 2020", group: "farm" },
    { id: "sugarcane", label: "Sugarcane", image: "./img/sugarcane.png", group: "product" },
    { id: "sugar", label: "Sugar", image: "./img/sugar.png", group: "product" },
    { id: "paper", label: "Paper", image: "./img/paper.png", group: "product" },
];

const sugarcane_farm_edges = [
    { from: "sugarcane_farm", to: "sugarcane" },
    { from: "sugarcane", to: "sugar" },
    { from: "sugarcane", to: "paper" },
    { from: "sugar", to: "potion_brewer", dashes: [10, 10], physics: false }
];

const iron_farm_nodes = [
    { id: "iron_farm", label: "Iron Farm No. 3\n\nJanuary 4, 2024", group: "farm" },
    { id: "iron_golem", label: "Iron Golem", image: "./img/iron_golem.png", group: "mob" },
    { id: "iron_ingot", label: "Iron Ingot", image: "./img/iron_ingot.png" },
    { id: "iron_block", label: "Iron Block", image: "./img/iron_block.png", group: "product" },
    { id: "poppy", label: "Poppy", image: "./img/poppy.png" }
];

const iron_farm_edges = [
    { from: "iron_farm", to: "iron_golem" },
    { from: "iron_golem", to: "iron_ingot" },
    { from: "iron_golem", to: "poppy" },
    { from: "iron_ingot", to: "iron_block" },
];

const kelp_farm_nodes = [
    { id: "kelp_farm", label: "Kelp Farm\n\nMarch 8, 2020", group: "farm" },
    { id: "kelp", label: "Kelp", image: "./img/kelp.png" },
    { id: "dried_kelp", label: "Dried Kelp", image: "./img/dried_kelp.png" },
    { id: "bone_meal_kelp", label: "Bone Meal", image: "./img/bone_meal.png" },
    { id: "raw_cod", label: "Raw Cod", image: "./img/cod.png" },
];

const kelp_farm_edges = [
    { from: "kelp_farm", to: "kelp" },
    { from: "kelp_farm", to: "raw_cod" },
    { from: "kelp_farm", to: "bone_meal_kelp" },
    { from: "kelp", to: "smelter" },
];

const pump_melon_nodes = [
    { id: "pump_melon", label: "Pumpkin & Melon Mashers\n\nMarch 7, 2020", group: "farm" },
    { id: "pumpkin", label: "Pumpkin", image: "./img/pumpkin.png", group: "product" },
    { id: "melon", label: "Melon", image: "./img/melon.png", group: "product" },
    { id: "melon_slice", label: "Melon Slice", image: "./img/melon_slice.png" },
];

const pump_melon_edges = [
    { from: "pump_melon", to: "pumpkin" },
    { from: "melon_slice", to: "melon" },
    { from: "pump_melon", to: "melon_slice" },
];

const cobble_1_nodes = [
    { id: "cobble_1", label: "Cobblestone Generator\n\nMarch 1, 2020", group: "farm" },
    { id: "cobblestone_1", label: "Cobblestone", image: "./img/cobblestone.png", group: "product" },
    { id: "stone_1", label: "Stone", image: "./img/stone.png", group: "product" },
];

const cobble_1_edges = [
    { from: "cobble_1", to: "cobblestone_1" },
    { from: "cobble_1", to: "stone_1" },
];

const super_boner_nodes = [
    { id: "super_boner", label: "The Super Boner\n\nJanuary 3, 2023", group: "machine" },
    { id: "bone_block", label: "Bone Block", image: "./img/bone_block.png", group: "product" },
    { id: "bone_meal_boner", label: "Bone Block", image: "./img/bone_meal.png"},
];

const super_boner_edges = [
    { from: "pumpkin", to: "super_boner" },
    { from: "melon", to: "super_boner" },
    { from: "sugarcane", to: "super_boner" },
    { from: "kelp", to: "super_boner" },
    { from: "poppy", to: "super_boner" },
    { from: "cactus", to: "super_boner" },
    { from: "sweet_berries", to: "super_boner" },
    { from: "super_boner", to: "bone_meal_boner" },
    { from: "bone_meal_kelp", to: "super_boner" },
    { from: "bone_meal_skeleton", to: "super_boner" },
    { from: "bone_meal_boner", to: "bone_block" },
    { from: "moss", to: "super_boner" },
    { from: "moss_carpet", to: "super_boner" },
    { from: "azalea", to: "super_boner" },
    { from: "flowering_azalea", to: "super_boner" },
    { from: "wheat_seeds_moss", to: "super_boner" },
    { from: "wheat_seeds_poss", to: "super_boner" },
    { from: "pale_moss", to: "super_boner" },
    { from: "pale_moss_carpet", to: "super_boner" },
    { from: "wheat", to: "super_boner" },
    { from: "carrot", to: "super_boner" },
    { from: "beetroot", to: "super_boner" },
    { from: "potato", to: "super_boner" },
    { from: "wheat_seeds_villager", to: "super_boner" },
    { from: "beetroot_seeds", to: "super_boner" },
    { from: "bone_meal_villager", to: "super_boner" },
    { from: "vines", to: "super_boner" },
    { from: "twisting_vines", to: "super_boner" },
    { from: "weeping_vines", to: "super_boner" },
    { from: "glow_berries", to: "super_boner" },
];

const cactus_nodes = [
    { id: "cactus_farm", label: "Cactus Farm No. 2\n\nJanuary 5, 2024", group: "farm" },
    { id: "cactus", label: "Cactus", image: "./img/cactus.png", group: "product" },
];

const cactus_edges = [
    { from: "cactus_farm", to: "cactus" },
];

const smelter_nodes = [
    { id: "smelter", label: "Corona Furnace Array\n\nMarch 13, 2020", group: "machine" },
    { id: "dried_kelp_block", label: "Dried Kelp Block", image: "./img/dried_kelp_block.png" },
];

const smelter_edges = [
    { from: "stone_1", to: "smelter" },
    { from: "cobblestone_1", to: "smelter" },
    { from: "raw_cod", to: "smelter" },
    { from: "smelter", to: "dried_kelp" },
    { from: "dried_kelp", to: "dried_kelp_block" },
];

const bamboo_1_nodes = [
    { id: "bamboo_farm_1", label: "Bamboo Farm No. 1\n\nDecember 5, 2019", group: "farm" },
    { id: "bamboo_1", label: "Bamboo", image: "./img/bamboo.png", group: "product" },
    { id: "bamboo_block_1", label: "Bamboo Block", image: "./img/bamboo_block.png", group: "product" },
];

const bamboo_1_edges = [
    { from: "bamboo_farm_1", to: "bamboo_1" },
    { from: "bamboo_1", to: "bamboo_block_1" },
];

const berry_nodes = [
    { id: "berry_farm", label: "Fox-Powered\nBerry Farm\n\nDecember 22, 2023", group: "farm" },
    { id: "sweet_berries", label: "Sweet Berries", image: "./img/sweet_berries.png", group: "product" },
];

const berry_edges = [
    { from: "berry_farm", to: "sweet_berries" },
];

const moss_nodes = [
    { id: "moss_machine", label: "Moss Machine\n\nFebruary 23, 2024", group: "farm" },
    { id: "moss", label: "Moss", image: "./img/moss.png", group: "product" },
    { id: "moss_carpet", label: "Moss Carpet", image: "./img/moss_carpet.png", group: "product" },
    { id: "azalea", label: "Azalea", image: "./img/azalea.png", group: "product" },
    { id: "flowering_azalea", label: "Flowering Azalea", image: "./img/flowering_azalea.png", group: "product" },
    { id: "wheat_seeds_moss", label: "Wheat Seeds", image: "./img/wheat_seeds.png" },
];

const moss_edges = [
    { from: "moss_machine", to: "moss" },
    { from: "moss_machine", to: "moss_carpet" },
    { from: "moss_machine", to: "azalea" },
    { from: "moss_machine", to: "flowering_azalea" },
    { from: "moss_machine", to: "wheat_seeds_moss" },
];

const poss_nodes = [
    { id: "poss_pachine", label: "Poss Pachine\n\nOctober 3, 2024", group: "farm" },
    { id: "pale_moss", label: "Pale Moss", image: "./img/pale_moss.png", group: "product" },
    { id: "pale_moss_carpet", label: "Pale Moss Carpet", image: "./img/pale_moss_carpet.png", group: "product" },
    { id: "wheat_seeds_poss", label: "Wheat Seeds", image: "./img/wheat_seeds.png" },
];

const poss_edges = [
    { from: "poss_pachine", to: "pale_moss" },
    { from: "poss_pachine", to: "pale_moss_carpet" },
    { from: "poss_pachine", to: "wheat_seeds_poss" },
];

const villager_crop_nodes = [
    { id: "villager_crops", label: "Villager Crop Farms\n\nDecember 14, 2023", group: "farm" },
    { id: "wheat", label: "Wheat", image: "./img/wheat.png", group: "product" },
    { id: "carrot", label: "Carrot", image: "./img/carrot.png", group: "product" },
    { id: "beet", label: "Beetroot", image: "./img/beetroot.png", group: "product" },
    { id: "potato", label: "Potato", image: "./img/potato.png", group: "product" },
    { id: "poison_potato", label: "Poison Potato", image: "./img/poison_potato.png" },
    { id: "beet_seeds", label: "Beetroot Seeds", image: "./img/beetroot_seeds.png" },
    { id: "wheat_seeds_villager", label: "Wheat Seeds", image: "./img/wheat_seeds.png" },
    { id: "bone_meal_villager", label: "Bone Meal", image: "./img/bone_meal.png" },
];

const villager_crop_edges = [
    { from: "villager_crops", to: "wheat" },
    { from: "villager_crops", to: "carrot" },
    { from: "villager_crops", to: "beet" },
    { from: "villager_crops", to: "potato" },
    { from: "villager_crops", to: "poison_potato" },
    { from: "villager_crops", to: "beet_seeds" },
    { from: "villager_crops", to: "wheat_seeds_villager" },
    { from: "villager_crops", to: "bone_meal_villager" },
];

const simple_bonemeal_nodes = [
    { id: "simple_bonemeal", label: "Simple Bone Meal Farms\n\nOctober 6, 2024", group: "farm" },
    { id: "grass", label: "Grass", image: "./img/grass.png", group: "product" },
    { id: "fern", label: "Fern", image: "./img/fern.png", group: "product" },
    { id: "hanging_roots", label: "Hanging Roots", image: "./img/hanging_roots.png", group: "product" },
    { id: "glow_lichen", label: "Glow Lichen", image: "./img/glow_lichen.png", group: "product" },
    { id: "pale_hanging_moss", label: "Pale Hanging Moss", image: "./img/pale_hanging_moss.png", group: "product" },
    { id: "big_dripleaf", label: "Big Dripleaf", image: "./img/big_dripleaf.png", group: "product" },
];

const simple_bonemeal_edges = [
    { from: "simple_bonemeal", to: "grass" },
    { from: "simple_bonemeal", to: "fern" },
    { from: "simple_bonemeal", to: "hanging_roots" },
    { from: "simple_bonemeal", to: "glow_lichen" },
    { from: "simple_bonemeal", to: "pale_hanging_moss" },
    { from: "simple_bonemeal", to: "big_dripleaf" },
    { from: "bone_block", to: "simple_bonemeal", dashes: [10, 10] },
];

const base_flower_nodes = [
    { id: "base_flowers", label: "2-Tall Flower Farm\n\nMarch 16, 2021", group: "farm" },
    { id: "lilac", label: "Lilac", image: "./img/lilac.png", group: "product" },
    { id: "peony", label: "Peony", image: "./img/peony.png", group: "product" },
    { id: "sunflower", label: "Sunflower", image: "./img/sunflower.png", group: "product" },
    { id: "rose", label: "Rose Bush", image: "./img/rose.png", group: "product" },
    { id: "pink_petals", label: "Pink Petals", image: "./img/pink_petals.png", group: "product" },
];

const base_flower_edges = [
    { from: "base_flowers", to: "lilac" },
    { from: "base_flowers", to: "peony" },
    { from: "base_flowers", to: "sunflower" },
    { from: "base_flowers", to: "rose" },
    { from: "base_flowers", to: "pink_petals" },
    { from: "bone_block", to: "base_flowers", dashes: [10, 10] },
];

const misc_base_nodes = [
    { id: "mushroom_farm", label: "Simple Passive\nMushroom Farm\n\nApril 23, 2022", group: "farm" },
    { id: "red_mushroom", label: "Red Mushroom", image: "./img/red_mushroom.png", group: "product" },
    { id: "brown_mushroom", label: "Brown Mushroom", image: "./img/brown_mushroom.png", group: "product" },
    { id: "nether_wart_farm", label: "Nether Wart Farm\n\nNovember 6, 2022", group: "farm" },
    { id: "nether_wart", label: "Nether Wart", image: "./img/nether_wart.png", group: "product" },
    
    { id: "resin_farm", label: "Creepy Creaky\nResin Farm\n\nOctober 31, 2024", group: "farm" },
    { id: "creaking", label: "Creaking", image: "./img/creaking.png", group: "mob" },
    { id: "resin", label: "Resin", image: "./img/resin.png" },
    { id: "resin_block", label: "Resin Block", image: "./img/resin_block.png", group: "product" },
    
    { id: "sherd_category", label: "Pottery Sherd\nCategory", group: "storage" },
    { id: "smithing_category", label: "Smithing Template\nCategory", group: "storage" },
    { id: "banner_category", label: "Banner\nCategory", group: "storage" },
    { id: "sand_category", label: "Sand/Gravel\nCategory", group: "storage" },
    { id: "bulk_category", label: "Bulk Storage \nCategory", group: "storage" },
    { id: "music_disc_filt", label: "Music Disc\nFilter", group: "storage" },
    // { id: "potion_filt", label: "Potion\nFilter", group: "storage" },
    // { id: "book_filt", label: "Book\nFilter", group: "storage" },
    // { id: "boat_filt", label: "Boat\nFilter", group: "storage" },
    // { id: "cart_filt", label: "Minecart\nFilter", group: "storage" },
    // { id: "armor_filt", label: "Armour\nFilter", group: "storage" },

    { id: "banner_crafting", label: "Banner Crafting Room\n\nFebruary 23, 2023", group: "machine" },
    { id: "bulk_storage", label: "Bulk Storage Annex\n\nApril 24, 2024", group: "machine" },
    { id: "ender_vacuum", label: "Ender Vacuum\n\nSeptember 2, 2023", group: "machine" },
];

const misc_base_edges = [
    { from: "mushroom_farm", to: "red_mushroom" },
    { from: "mushroom_farm", to: "brown_mushroom" },
    { from: "nether_wart_farm", to: "nether_wart" },
    { from: "resin_farm", to: "creaking" },
    { from: "creaking", to: "resin" },
    { from: "resin", to: "resin_block" },
    { from: "general_storage", to: "sherd_category" },
    { from: "general_storage", to: "smithing_category" },
    { from: "general_storage", to: "banner_category" },
    { from: "general_storage", to: "sand_category" },
    { from: "general_storage", to: "bulk_category" },
    { from: "general_storage", to: "music_disc_filt" },
    { from: "general_storage", to: "potion_filt" },
    // { from: "general_storage", to: "book_filt" },
    // { from: "general_storage", to: "boat_filt" },
    // { from: "general_storage", to: "cart_filt" },
    // { from: "general_storage", to: "armor_filt" },
    { from: "music_disc_filt", to: "music_disc_farm" },
    { from: "potion_filt", to: "potion_brewer" },
    { from: "sherd_category", to: "pottery_crafter" },
    { from: "smithing_category", to: "template_photocopier" },
    { from: "banner_category", to: "banner_crafting" },
    { from: "bulk_category", to: "bulk_storage" },
    { from: "sand_category", to: "ender_vacuum" },
];

const creeper_farm_nodes = [
    { id: "creeper_farm", label: "Creeper Farm\n\nApril 6, 2020", group: "farm" },
    { id: "music_disc_farm", label: "Music Disc Farm\n\nApril 9, 2022", group: "farm" },
    { id: "creeper", label: "Creeper", image: "./img/creeper.png", group: "mob" },
    { id: "gunpowder", label: "Gunpowder", image: "./img/gunpowder.png", group: "product" },
    { id: "music_disc", label: "Music Discs", image: "./img/music_disc.png", group: "product" },
    { id: "rocket_crafter", label: "Amazing Automatic\nRocket Crafter\n\nOctober 20, 2023", group: "machine" },
    { id: "rockets", label: "Firework Rockets", image: "./img/fireworks.png", group: "product" },
];

const creeper_farm_edges = [
    { from: "creeper_farm", to: "creeper" },
    { from: "creeper", to: "gunpowder" },
    { from: "creeper", to: "music_disc_farm" },
    { from: "music_disc_farm", to: "music_disc" },
    { from: "gunpowder", to: "rocket_crafter" },
    { from: "paper", to: "rocket_crafter" },
    { from: "rocket_crafter", to: "rockets" },
];

const potion_brewer_nodes = [
    { id: "potion_brewer", label: "Potion Brewery\n\nNovember 5, 2022", group: "machine" },
];

const potion_brewer_edges = [
    { from: "nether_wart", to: "potion_brewer", dashes: [10, 10], physics: false },
    { from: "gunpowder", to: "potion_brewer", dashes: [10, 10], physics: false },
    { from: "stone_1", to: "potion_brewer", dashes: [10, 10], physics: false },
    { from: "sugar", to: "potion_brewer", dashes: [10, 10], physics: false },
];

const west_wing_nodes = [
    { id: "skeleton_grinder", label: "Skeleton Grinder\n\nDecember 29, 2019", group: "farm" },
    { id: "dispenser_crafter", label: "Dispenser Auto Crafter\n\nOctober 22, 2023", group: "machine" },
    { id: "skeleton", label: "Skeleton", image: "./img/skeleton.png", group: "mob" },
    { id: "bone", label: "Bone", image: "./img/bone.png" },
    { id: "arrow", label: "Arrow", image: "./img/arrow.png", group: "product" },
    { id: "bow", label: "Bow", image: "./img/bow.png" },
    { id: "bone_meal_skeleton", label: "Bone Meal", image: "./img/bone_meal.png" },
    { id: "dispenser", label: "Dispenser", image: "./img/dispenser.png", group: "product" },
    { id: "super_slimer", label: "The Super Slimer\n\nJanuary 24, 2022", group: "farm" },
    { id: "slime", label: "Slime", image: "./img/slime.png", group: "mob" },
    { id: "bee", label: "Bee", image: "./img/bee.png", group: "mob" },
    { id: "dripstone_dripzone", label: "Dripstone Dripzone\n\nJanuary 29, 2024", group: "farm" },
    { id: "honey_farm_2", label: "New Honey Farm\n\nFebruary 1, 2023", group: "farm" },
    { id: "amethyst_farm", label: "Janky Amethyst\nCrystal Farm\n\nMay 29, 2022", group: "farm" },
    { id: "slimeball", label: "Slimeball", image: "./img/slimeball.png" },
    { id: "amethyst_shard", label: "Amethyst Shard", image: "./img/amethyst_shard.png", group: "product" },
    { id: "amethyst_block", label: "Amethyst Block", image: "./img/amethyst_block.png", group: "product" },
    { id: "slime_block", label: "Slime Block", image: "./img/slime_block.png", group: "product" },
    { id: "honey_block", label: "Honey Block", image: "./img/honey_block.png", group: "product" },
    { id: "honey_bottle", label: "Honey Bottle", image: "./img/honey_bottle.png" },
    { id: "dripstone", label: "Dripstone", image: "./img/dripstone.png", group: "product" },
    { id: "dripstone_block", label: "Dripstone Block", image: "./img/dripstone_block.png", group: "product" },
    { id: "vine_farm", label: "Vine Farms\n\nJanuary 21, 2024", group: "farm" },
    { id: "vines", label: "Vines", image: "./img/vines.png", group: "product" },
    { id: "weeping_vines", label: "Weeping Vines", image: "./img/weeping_vines.png", group: "product" },
    { id: "twisting_vines", label: "Twisting Vines", image: "./img/twisting_vines.png", group: "product" },
    { id: "glow_berries", label: "Glow Berries", image: "./img/glow_berries.png", group: "product" },
    { id: "fireworks_factory", label: "Fireworks Factory\n\nNovember 4, 2023", group: "machine" },
];

const west_wing_edges = [
    { from: "super_slimer", to: "slime" },
    { from: "slime", to: "slimeball" },
    { from: "honey_farm_2", to: "bee" },
    { from: "bee", to: "honey_bottle" },
    { from: "honey_bottle", to: "honey_block" },
    { from: "slimeball", to: "slime_block" },
    { from: "slimeball", to: "potion_brewer", dashes: [10, 10], physics: false },
    { from: "dripstone_dripzone", to: "dripstone" },
    { from: "amethyst_farm", to: "amethyst_shard" },
    { from: "amethyst_shard", to: "amethyst_block" },
    { from: "dripstone", to: "dripstone_block" },
    { from: "vine_farm", to: "vines" },
    { from: "vine_farm", to: "weeping_vines" },
    { from: "vine_farm", to: "twisting_vines" },
    { from: "vine_farm", to: "glow_berries" },
    { from: "gunpowder", to: "fireworks_factory", dashes: [10, 10], physics: false },
    { from: "paper", to: "fireworks_factory", dashes: [10, 10], physics: false },
    { from: "skeleton_grinder", to: "skeleton" },
    { from: "skeleton", to: "bone" },
    { from: "skeleton", to: "arrow" },
    { from: "skeleton", to: "bow" },
    { from: "bone", to: "bone_meal_skeleton" },
    { from: "bow", to: "dispenser_crafter" },
    { from: "cobblestone_1", to: "dispenser_crafter", dashes: [10, 10] },
    { from: "redstone_block_witch", to: "dispenser_crafter", dashes: [10, 10], physics: false },
    { from: "dispenser_crafter", to: "dispenser" },
];

const east_wing_nodes = [
    { id: "brickmaker", label: "The Brickmaker\n\nDecember 19, 2024", group: "machine" },
    { id: "pottery_crafter", label: "Pottery Crafter\n\nJuly 19, 2023", group: "machine" },
    { id: "template_photocopier", label: "Template Photocopier\n\nMarch 4, 2024", group: "machine" },
    { id: "snowman_shredder", label: "The Snowman Shredder\n\nApril 10, 2023", group: "farm" },
    { id: "chorus_farm", label: "Chorus Fruit Farm\n\nApril 9, 2023", group: "farm" },
    { id: "bamboo_farm_2", label: "Bamboo Farm No. 2\n\nFebruary 10, 2024", group: "farm" },
    { id: "cobble_blaster", label: "Cobblestone Blast Chamber\n\nMarch 18, 2024", group: "farm" },
    { id: "bamboo_2", label: "Bamboo", image: "./img/bamboo.png" },
    { id: "cobblestone_2", label: "Cobblestone", image: "./img/cobblestone.png", group: "product" },
    { id: "bamboo_block_2", label: "Bamboo Block", image: "./img/bamboo_block.png" },
    { id: "bamboo_planks", label: "Bamboo Planks", image: "./img/bamboo_planks.png", group: "product" },
    { id: "snowman", label: "Snowman", image: "./img/snowman.png", group: "mob" },
    { id: "snow_layer", label: "Snow Layer", image: "./img/snow_layer.png", group: "product" },
    { id: "snow_block", label: "Snow Block", image: "./img/snow_block.png", group: "product" },
    { id: "chorus_fruit", label: "Chorus Fruit", image: "./img/chorus_fruit.png", group: "product" },
    { id: "chorus_flower", label: "Chorus Flower", image: "./img/chorus_flower.png", group: "product" },
    { id: "snowball", label: "Snowball", image: "./img/snowball.png" },
    { id: "brick", label: "Brick", image: "./img/brick.png" },
    { id: "pot", label: "Pot", image: "./img/pot.png", group: "product" },
    { id: "bricks", label: "Bricks", image: "./img/bricks.png", group: "product" },
    { id: "terracotta", label: "Terracotta", image: "./img/terracotta.png", group: "product" },
    { id: "clay_ball", label: "Clay Ball", image: "./img/clay_ball.png" },
    { id: "clay", label: "Clay", image: "./img/clay.png", group: "product" },
    { id: "mud", label: "Mud", image: "./img/mud.png", group: "product" },
    { id: "oak_log", label: "Oak Log", image: "./img/oak_log.png" },
    { id: "oak_planks", label: "Oak Planks", image: "./img/oak_planks.png" },
    { id: "rooted_dirt", label: "Rooted Dirt", image: "./img/rooted_dirt.png", group: "product" },
    { id: "dirt", label: "Dirt", image: "./img/dirt.png", group: "product" },
    { id: "hanging_roots_brick", label: "Hanging Roots", image: "./img/hanging_roots.png" },
];

const east_wing_edges = [
    { from: "brickmaker", to: "clay_ball" },
    { from: "clay_ball", to: "terracotta" },
    { from: "oak_log", to: "terracotta" },
    { from: "brickmaker", to: "rooted_dirt" },
    { from: "rooted_dirt", to: "dirt" },
    { from: "rooted_dirt", to: "hanging_roots_brick" },
    { from: "brickmaker", to: "mud" },
    { from: "brickmaker", to: "oak_log" },
    { from: "oak_log", to: "oak_planks" },
    { from: "oak_planks", to: "brick" },
    { from: "clay_ball", to: "clay" },
    { from: "clay_ball", to: "brick" },
    { from: "brick", to: "bricks" },
    { from: "brick", to: "pot" },
    { from: "bone_block", to: "brickmaker", dashes: [10, 10] },
    { from: "brick", to: "pottery_crafter", dashes: [10, 10] },
    { from: "snowman_shredder", to: "snowman" },
    { from: "snowman", to: "snow_layer" },
    { from: "snowman", to: "snowball" },
    { from: "snowball", to: "snow_block" },
    { from: "chorus_farm", to: "chorus_fruit" },
    { from: "chorus_farm", to: "chorus_flower" },
    { from: "bamboo_farm_2", to: "bamboo_2" },
    { from: "cobble_blaster", to: "cobblestone_2" },
    { from: "bamboo_2", to: "bamboo_block_2" },
    { from: "bamboo_block_2", to: "bamboo_planks" },
];


const factory_nodes = [
    { id: "factory", label: "The Wacky Factory\n\nNovember 30, 2024", group: "machine" },
    { id: "stick", label: "Stick", image: "./img/stick.png", group: "product" },
    { id: "chest", label: "Chest", image: "./img/chest.png", group: "product" },
    { id: "dropper", label: "Dropper", image: "./img/dropper.png", group: "product" },
    { id: "crafting_table", label: "Crafting Table", image: "./img/crafting_table.png", group: "product" },
    { id: "redstone_torch", label: "Redstone Torch", image: "./img/redstone_torch.png", group: "product" },
    { id: "bamboo_plank_slab", label: "Bamboo Plank Slab", image: "./img/plank_slab.png", group: "product" },
    { id: "stone_pressure_plate", label: "Stone Pressure Plate", image: "./img/stone_pressure_plate.png", group: "product" },
    { id: "stone_2", label: "Stone", image: "./img/stone.png", group: "product" },
    { id: "smooth_stone", label: "Smooth Stone", image: "./img/smooth_stone.png", group: "product" },
    { id: "smooth_stone_slab", label: "Smooth Stone Slab", image: "./img/smooth_stone_slab.png", group: "product" },
    { id: "piston", label: "Piston", image: "./img/piston.png", group: "product" },
    { id: "sticky_piston", label: "Sticky Piston", image: "./img/sticky_piston.png", group: "product" },
    { id: "diorite", label: "Diorite", image: "./img/diorite.png", group: "product" },
    { id: "glowstone_block", label: "Glowstone", image: "./img/glowstone.png", group: "product" },
    { id: "furnace", label: "Furnace", image: "./img/furnace.png", group: "product" },
    { id: "note_block", label: "Note Block", image: "./img/note_block.png", group: "product" },
    { id: "rail", label: "Rail", image: "./img/rail.png", group: "product" },
    { id: "powered_rail", label: "Powered Rail", image: "./img/powered_rail.png", group: "product" },
    { id: "detector_rail", label: "Detector Rail", image: "./img/detector_rail.png", group: "product" },
    { id: "activator_rail", label: "Activator Rail", image: "./img/activator_rail.png", group: "product" },
    { id: "hopper", label: "Hopper", image: "./img/hopper.png", group: "product" },
    { id: "observer", label: "Observer", image: "./img/observer.png", group: "product" },
    { id: "tripwire", label: "Tripwire", image: "./img/tripwire.png", group: "product" },
    { id: "fence_gate", label: "Fence Gate", image: "./img/fence_gate.png", group: "product" },
    { id: "fence", label: "Fence", image: "./img/fence.png", group: "product" },
    { id: "chiseled_bookshelf", label: "Chiseled Bookshelf", image: "./img/chiseled_bookshelf.png", group: "product" },
    { id: "stone_bricks", label: "Stone Bricks", image: "./img/stone_bricks.png", group: "product" },
    { id: "composter", label: "Composter", image: "./img/composter.png", group: "product" },
    { id: "barrel", label: "Barrel", image: "./img/barrel.png", group: "product" },
    { id: "repeater", label: "Repeater", image: "./img/repeater.png", group: "product" },
    { id: "comparator", label: "Comparator", image: "./img/comparator.png", group: "product" },
    { id: "andesite", label: "Andesite", image: "./img/andesite.png", group: "product" },
    { id: "granite", label: "Granite", image: "./img/granite.png", group: "product" },
    { id: "stonecutter", label: "Stonecutter", image: "./img/stonecutter.png", group: "product" },
    { id: "copper_trapdoor", label: "Copper Trapdoor", image: "./img/copper_trapdoor.png", group: "product" },
    { id: "copper_door", label: "Copper Door", image: "./img/copper_door.png", group: "product" },
    { id: "iron_trapdoor", label: "Iron Trapdoor", image: "./img/iron_trapdoor.png", group: "product" },
    { id: "iron_door", label: "Iron Door", image: "./img/iron_door.png", group: "product" },
    { id: "lever", label: "Lever", image: "./img/lever.png", group: "product" },
    { id: "stone_button", label: "Stone Button", image: "./img/stone_button.png", group: "product" },
    { id: "wood_button", label: "Wood Button", image: "./img/wood_button.png", group: "product" },
    { id: "crafter", label: "Crafter", image: "./img/crafter.png", group: "product" },
    { id: "lightning_rod", label: "Lightning Rod", image: "./img/lightning_rod.png", group: "product" },
    { id: "cauldron", label: "Cauldron", image: "./img/cauldron.png", group: "product" },
    { id: "bucket", label: "Bucket", image: "./img/bucket.png", group: "product" },
    { id: "redstone_lamp", label: "Redstone Lamp", image: "./img/redstone_lamp.png", group: "product" },
    { id: "copper_bulb", label: "Copper Bulb", image: "./img/copper_bulb.png", group: "product" },
    { id: "copper_block", label: "Copper Block", image: "./img/copper_block.png", group: "product" },


    { id: "cobblestone_factory", label: "Cobblestone", image: "./img/cobblestone.png", group: "factory" },
    { id: "planks_factory", label: "Bamboo Planks", image: "./img/bamboo_planks.png", group: "factory" },
    { id: "redstone_factory", label: "Redstone Dust", image: "./img/redstone.png", group: "factory" },
    { id: "iron_factory", label: "Iron Ingot", image: "./img/iron_ingot.png", group: "factory" },
    { id: "gold_factory", label: "Gold Ingot", image: "./img/gold_ingot.png", group: "factory" },
    { id: "copper_factory", label: "Copper Ingot", image: "./img/copper_ingot.png", group: "factory" },
    { id: "quartz_factory", label: "Quartz", image: "./img/quartz.png", group: "factory" },
    { id: "slime_factory", label: "Slimeball", image: "./img/slimeball.png", group: "factory" },
    { id: "glowstone_factory", label: "Glowstone Dust", image: "./img/glowstone_dust.png", group: "factory" },
    { id: "blaze_rod_factory", label: "Blaze Rod", image: "./img/blaze_rod.png", group: "factory" },
];

const factory_edges = [
    { from: "cobblestone_2", to: "factory" },
    { from: "bamboo_planks", to: "factory" },
    { from: "iron_block", to: "factory", dashes: [10, 10] },
    { from: "slime_block", to: "factory", dashes: [10, 10] },

    { from: "factory", to: "cobblestone_factory" },
    { from: "factory", to: "planks_factory" },
    { from: "factory", to: "redstone_factory" },
    { from: "factory", to: "iron_factory" },
    { from: "factory", to: "gold_factory" },
    { from: "factory", to: "copper_factory" },
    { from: "factory", to: "quartz_factory" },
    { from: "factory", to: "slime_factory" },
    { from: "factory", to: "glowstone_factory" },
    { from: "factory", to: "blaze_rod_factory" },

    { from: "cobblestone_factory", to: "furnace" },
    { from: "planks_factory", to: "note_block" },
    { from: "redstone_factory", to: "note_block" },
    { from: "iron_factory", to: "rail" },
    { from: "stick", to: "rail" },
    { from: "stick", to: "powered_rail" },
    { from: "gold_factory", to: "powered_rail" },
    { from: "redstone_factory", to: "powered_rail" },
    { from: "redstone_torch", to: "activator_rail" },
    { from: "stick", to: "activator_rail" },
    { from: "iron_factory", to: "activator_rail" },
    { from: "redstone_factory", to: "detector_rail" },
    { from: "stone_pressure_plate", to: "detector_rail" },
    { from: "iron_factory", to: "hopper" },
    { from: "chest", to: "hopper" },
    { from: "cobblestone_factory", to: "observer" },
    { from: "redstone_factory", to: "observer" },
    { from: "quartz_factory", to: "observer" },
    { from: "iron_factory", to: "tripwire" },
    { from: "planks_factory", to: "tripwire" },
    { from: "stick", to: "tripwire" },
    { from: "stick", to: "fence_gate" },
    { from: "planks_factory", to: "fence_gate" },
    { from: "stick", to: "fence" },
    { from: "planks_factory", to: "fence" },
    { from: "planks_factory", to: "chiseled_bookshelf" },
    { from: "bamboo_plank_slab", to: "chiseled_bookshelf" },
    { from: "stone_2", to: "stone_bricks" },
    { from: "bamboo_plank_slab", to: "composter" },
    { from: "bamboo_plank_slab", to: "barrel" },
    { from: "planks_factory", to: "barrel" },
    { from: "smooth_stone", to: "smooth_stone_slab" },
    { from: "stone_2", to: "repeater" },
    { from: "redstone_factory", to: "repeater" },
    { from: "redstone_torch", to: "repeater" },
    { from: "redstone_torch", to: "comparator" },
    { from: "stone_2", to: "comparator" },
    { from: "quartz_factory", to: "comparator" },
    { from: "cobblestone_factory", to: "andesite" },
    { from: "diorite", to: "andesite" },
    { from: "diorite", to: "granite" },
    { from: "quartz_factory", to: "granite" },
    { from: "stone_2", to: "stonecutter" },
    { from: "iron_factory", to: "stonecutter" },
    { from: "copper_factory", to: "copper_trapdoor" },
    { from: "copper_factory", to: "copper_door" },
    { from: "iron_factory", to: "iron_trapdoor" },
    { from: "iron_factory", to: "iron_door" },
    { from: "stick", to: "lever" },
    { from: "cobblestone_factory", to: "lever" },
    { from: "stone_2", to: "stone_button" },
    { from: "planks_factory", to: "wood_button" },
    { from: "iron_factory", to: "crafter" },
    { from: "redstone_factory", to: "crafter" },
    { from: "crafting_table", to: "crafter" },
    { from: "dropper", to: "crafter" },
    { from: "copper_factory", to: "lightning_rod" },
    { from: "iron_factory", to: "cauldron" },
    { from: "iron_factory", to: "bucket" },
    { from: "glowstone_factory", to: "redstone_lamp" },
    { from: "redstone_factory", to: "redstone_lamp" },
    { from: "slime_factory", to: "sticky_piston" },
    { from: "piston", to: "sticky_piston" },
    { from: "copper_factory", to: "copper_block" },
    { from: "copper_block", to: "copper_bulb" },
    { from: "blaze_rod_factory", to: "copper_bulb" },
    { from: "redstone_factory", to: "copper_bulb" },
    { from: "planks_factory", to: "stick" },
    { from: "planks_factory", to: "chest" },
    { from: "cobblestone_factory", to: "dropper" },
    { from: "redstone_factory", to: "dropper" },
    { from: "planks_factory", to: "crafting_table" },
    { from: "redstone_factory", to: "redstone_torch" },
    { from: "stick", to: "redstone_torch" },
    { from: "planks_factory", to: "bamboo_plank_slab" },
    { from: "stone_2", to: "stone_pressure_plate" },
    { from: "stone_2", to: "smooth_stone" },
    { from: "planks_factory", to: "smooth_stone" },
    { from: "planks_factory", to: "piston" },
    { from: "cobblestone_factory", to: "piston" },
    { from: "redstone_factory", to: "piston" },
    { from: "iron_factory", to: "piston" },
    { from: "cobblestone_factory", to: "diorite" },
    { from: "quartz_factory", to: "diorite" },
    { from: "glowstone_factory", to: "glowstone_block" },
    { from: "planks_factory", to: "stone_2" },
    { from: "cobblestone_factory", to: "stone_2" },
];

const spawn_nodes = [
    { id: "honey_farm_1", label: "Greenhouse &\nBee Farm\n\nFebruary 15, 2020", group: "farm" },
    { id: "bee1", label: "Bee", image: "./img/bee.png", group: "mob" },
    { id: "honeycomb", label: "Honeycomb", image: "./img/honeycomb.png", group: "product" },
    { id: "honeycomb_block", label: "Honeycomb Block", image: "./img/honeycomb_block.png", group: "product" },
    
    { id: "chicken_cooker", label: "Bootleg Chicken Cooker\n\nFebruary 15, 2020", group: "farm" },
    { id: "chicken", label: "Chicken", image: "./img/chicken.png", group: "mob" },
    { id: "cooked_chicken", label: "Cooked Chicken", image: "./img/cooked_chicken.png", group: "product" },
    { id: "feather", label: "Feather", image: "./img/feather.png" },
    
    { id: "pie_shop", label: "Three Witches\nPie Shop\n\nNovember 1, 2023", group: "farm" },
    { id: "sugarcane_pie", label: "Sugarcane", image: "./img/sugarcane.png" },
    { id: "chicken_pie", label: "Chicken", image: "./img/chicken.png", group: "mob" },
    { id: "sugar_pie", label: "Sugarcane", image: "./img/sugar.png" },
    { id: "egg", label: "Egg", image: "./img/egg.png" },
    { id: "pumpkin_for_pie", label: "Pumpkin", image: "./img/pumpkin.png" },
    { id: "pumpkin_pie", label: "Pumpkin Pie", image: "./img/pumpkin_pie.png", group: "product" },
    
    { id: "sniffer_farm", label: "The Farm of\n8000 Sniffs\n\nJune 18, 2023", group: "farm" },
    { id: "sniffer", label: "Sniffer", image: "./img/sniffer.png", group: "mob" },
    { id: "villager", label: "Farmer", image: "./img/farmer.png", group: "mob" },
    { id: "torchflower_seeds", label: "Torchflower Seeds", image: "./img/torchflower_seeds.png" },
    { id: "pitcher_pod", label: "Pitcher Pod", image: "./img/pitcher_pod.png" },
    { id: "torchflower", label: "Torchflower", image: "./img/torchflower.png", group: "product" },
    { id: "pitcher_plant", label: "Pitcher Plant", image: "./img/pitcher_plant.png", group: "product" },
    
    { id: "mushroom_manor", label: "Mushroom Manor\n\nJuly 24, 2023", group: "farm" },
    { id: "red_mushroom_block", label: "Red Mushroom Block", image: "./img/red_mushroom_block.png", group: "product" },
    { id: "brown_mushroom_block", label: "Brown Mushroom Block", image: "./img/brown_mushroom_block.png", group: "product" },
    { id: "mushroom_stem", label: "Mushroom Stem", image: "./img/mushroom_stem.png", group: "product" },
    
    { id: "turtle_farm", label: "Turtle Breeding\nCentre\n\nNovember 30, 2022", group: "farm" },
    { id: "turtle_scute", label: "Turtle Scute", image: "./img/turtle_scute.png", group: "product" },
    { id: "turtle_egg", label: "Turtle Egg", image: "./img/turtle_egg.png", group: "product" },
    { id: "seagrass", label: "Seagrass", image: "./img/seagrass.png" },
    { id: "turtle", label: "Turtle", image: "./img/turtle.png", group: "mob" },
    
    { id: "armadillo_farm", label: "Organic Hockey\nPuck Farm\n\nApril 10, 2024", group: "farm" },
    { id: "armadillo", label: "Armadillo", image: "./img/armadillo.png", group: "mob" },
    { id: "armadillo_scute", label: "Armadillo Scute", image: "./img/armadillo_scute.png", group: "product" },

    { id: "qp_central", label: "Quick Post Central Sorting\n\nApril 15, 2023", group: "postal" },
    { id: "qp_bulk_storage", label: "Quick Post\nBulk Storage\n\nJuly 2, 2023", group: "machine" },
    { id: "general_storage", label: "Automatic\nStorage Room\n\nMay 18, 2020", group: "machine" },
];

const spawn_edges = [
    { from: "honey_farm_1", to: "bee1" },
    { from: "bee1", to: "honeycomb" },
    { from: "honeycomb", to: "honeycomb_block" },

    { from: "chicken_cooker", to: "chicken" },
    { from: "chicken", to: "cooked_chicken" },
    { from: "chicken", to: "feather" },
    { from: "feather", to: "fireworks_factory", dashes: [10, 10] },

    { from: "pie_shop", to: "chicken_pie" },
    { from: "pie_shop", to: "sugarcane_pie" },
    { from: "sugarcane_pie", to: "sugar_pie" },
    { from: "chicken_pie", to: "egg" },
    { from: "pie_shop", to: "pumpkin_for_pie" },
    { from: "pumpkin_for_pie", to: "pumpkin_pie" },
    { from: "egg", to: "pumpkin_pie" },
    { from: "sugar_pie", to: "pumpkin_pie" },

    { from: "sniffer_farm", to: "sniffer" },
    { from: "sniffer", to: "torchflower_seeds" },
    { from: "sniffer", to: "pitcher_pod" },
    { from: "torchflower_seeds", to: "villager" },
    { from: "pitcher_pod", to: "villager" },
    { from: "villager", to: "torchflower" },
    { from: "villager", to: "pitcher_plant" },

    { from: "mushroom_manor", to: "red_mushroom_block" },
    { from: "mushroom_manor", to: "brown_mushroom_block" },
    { from: "mushroom_manor", to: "mushroom_stem" },
    { from: "red_mushroom", to: "mushroom_manor", dashes: [10, 10] },
    { from: "brown_mushroom", to: "mushroom_manor", dashes: [10, 10] },
    { from: "bone_block", to: "mushroom_manor", dashes: [10, 10] },
    
    { from: "turtle_farm", to: "seagrass" },
    { from: "seagrass", to: "turtle" },
    { from: "turtle", to: "turtle_egg" },
    { from: "turtle", to: "turtle_scute" },
    { from: "turtle_scute", to: "potion_brewer", dashes: [10, 10], physics: false },
    { from: "bone_block", to: "turtle_farm", dashes: [10, 10] },

    { from: "armadillo_farm", to: "armadillo" },
    { from: "armadillo", to: "armadillo_scute" },

    { from: "qp_central", to: "qp_bulk_storage" },
    { from: "qp_bulk_storage", to: "general_storage" },
];

const mushroom_point_nodes = [
    { id: "dark_oak_farm", label: "Dark Oak\nTree Farm\n\nDecember 22, 2022", group: "farm" },
    { id: "dark_oak_log", label: "Dark Oak Log", image: "./img/dark_oak_log.png", group: "product" },
    { id: "pale_oak_log", label: "Pale Oak Log", image: "./img/pale_oak_log.png", group: "product" },

    { id: "nether_tree_farm", label: "Nether Tree\nFarm\n\nSeptember 16, 2022", group: "farm" },
    { id: "crimson_stem", label: "Crimson Stem", image: "./img/crimson_stem.png", group: "product" },
    { id: "warped_stem", label: "Warped Stem", image: "./img/warped_stem.png", group: "product" },

    { id: "ice_farm", label: "Ice Farm\n\nDecember 27, 2023", group: "farm" },
    { id: "ice", label: "Ice", image: "./img/ice.png", group: "product" },
    { id: "packed_ice", label: "Packed Ice", image: "./img/packed_ice.png", group: "product" },
    { id: "blue_ice", label: "Blue Ice", image: "./img/blue_ice.png", group: "product" },

    { id: "mushroom_point_qp", label: "Mushroom Point\nPost Office\n\nApril 22, 2023", group: "postal" },
];

const mushroom_point_edges = [
    { from: "ice_farm", to: "ice" },
    { from: "ice", to: "packed_ice" },
    { from: "packed_ice", to: "blue_ice" },
    { from: "ice", to: "mushroom_point_qp" },
    { from: "packed_ice", to: "mushroom_point_qp" },
    { from: "blue_ice", to: "mushroom_point_qp" },

    { from: "dark_oak_farm", to: "dark_oak_log" },
    { from: "dark_oak_farm", to: "pale_oak_log" },
    { from: "nether_tree_farm", to: "crimson_stem" },
    { from: "nether_tree_farm", to: "warped_stem" },
    { from: "dark_oak_log", to: "mushroom_point_qp", dashes: [10, 10] },
    { from: "pale_oak_log", to: "mushroom_point_qp", dashes: [10, 10] },
    { from: "crimson_stem", to: "mushroom_point_qp", dashes: [10, 10] },
    { from: "warped_stem", to: "mushroom_point_qp", dashes: [10, 10] },


    { from: "mushroom_point_qp", to: "qp_central", arrows: 'to;from', width: 5, physics: false },
];


const linhir_nodes = [
    { id: "shulker_farm", label: "Shulker Farm\n\nFebruary 8, 2023", group: "farm" },
    { id: "shulker", label: "Shulker", image: "./img/shulker.png", group: "mob" },
    { id: "shulker_shell", label: "Shulker Shell", image: "./img/shulker_shell.png", group: "product" },
    
    { id: "squid_farm", label: "Squid Farm\n\nSeptember 4, 2023", group: "farm" },
    { id: "squid", label: "Squid", image: "./img/squid.png", group: "mob" },
    { id: "glow_squid", label: "Glow Squid", image: "./img/glow_squid.png", group: "mob" },
    { id: "ink_sac", label: "Ink Sac", image: "./img/ink_sac.png", group: "product" },
    { id: "glow_ink_sac", label: "Glow Ink Sac", image: "./img/glow_ink_sac.png", group: "product" },
    
    { id: "sand_duper", label: "Sand Duper\n\nMay 3, 2021", group: "farm" },
    { id: "sand", label: "Sand", image: "./img/sand.png", group: "product" },
    { id: "red_sand", label: "Red Sand", image: "./img/red_sand.png", group: "product" },
    { id: "gravel", label: "Gravel", image: "./img/gravel.png", group: "product" },
    { id: "concrete_powder", label: "All Concrete Powder", image: "./img/concrete_powder.png", group: "product" },
    
    { id: "moo_moo_melter", label: "Double Action\nMoo Moo Melter\n\nJanuary 25, 2023", group: "farm" },
    { id: "cow", label: "Cow", image: "./img/cow.png", group: "mob" },
    { id: "steak", label: "Steak", image: "./img/steak.png", group: "product" },
    { id: "leather_cow", label: "Leather", image: "./img/leather.png", group: "product" },

    { id: "linhir_qp", label: "Linhir\nPost Office\n\nJune 2, 2023", group: "postal" },

];

const linhir_edges = [
    { from: "shulker_farm", to: "shulker" },
    { from: "shulker", to: "shulker_shell" },
    { from: "shulker_shell", to: "linhir_qp" },
    
    { from: "squid_farm", to: "squid" },
    { from: "squid_farm", to: "glow_squid" },
    { from: "squid", to: "ink_sac" },
    { from: "glow_squid", to: "glow_ink_sac" },
    { from: "ink_sac", to: "linhir_qp" },
    { from: "glow_ink_sac", to: "linhir_qp" },

    { from: "moo_moo_melter", to: "cow" },
    { from: "cow", to: "steak" },
    { from: "cow", to: "leather_cow" },

    { from: "sand_duper", to: "sand" },
    { from: "sand_duper", to: "red_sand" },
    { from: "sand_duper", to: "gravel" },
    { from: "sand_duper", to: "concrete_powder" },
    { from: "concrete_powder", to: "ender_vacuum", physics: false },
    { from: "sand", to: "ender_vacuum", physics: false },
    { from: "red_sand", to: "ender_vacuum", physics: false },
    { from: "gravel", to: "ender_vacuum", physics: false },
    { from: "wheat", to: "moo_moo_melter", dashes: [10,10], physics: false },

    { from: "linhir_qp", to: "qp_central", arrows: 'to;from', width: 5, physics: false },
];

const westport_nodes = [
    { id: "wool_farm", label: "Wool Farm\n\nMarch 28, 2021", group: "farm" },
    { id: "sheep", label: "Sheep", image: "./img/sheep.png", group: "mob"},
    { id: "wool", label: "Wool", image: "./img/wool.png", group: "product"},
    
    { id: "westport_tree_farm", label: "Tree Farm\n\nFebruary 2, 2022", group: "farm" },
    { id: "oak_log_2", label: "Oak Log", image: "./img/oak_log.png", group: "product"},
    { id: "spruce_log", label: "Spruce Log", image: "./img/spruce_log.png", group: "product"},
    { id: "jungle_log", label: "Jungle Log", image: "./img/jungle_log.png", group: "product"},
    { id: "birch_log", label: "Birch Log", image: "./img/birch_log.png", group: "product"},

    { id: "westport_qp", label: "Westport\nPost Office\n\nApril 18, 2023", group: "postal" },
];

const westport_edges = [
    { from: "wool_farm", to: "sheep" },
    { from: "sheep", to: "wool" },

    { from: "westport_tree_farm", to: "oak_log_2" },
    { from: "westport_tree_farm", to: "spruce_log" },
    { from: "westport_tree_farm", to: "birch_log" },
    { from: "westport_tree_farm", to: "jungle_log" },
    { from: "jungle_log", to: "westport_qp" },
    { from: "oak_log_2", to: "westport_qp" },
    { from: "spruce_log", to: "westport_qp" },
    { from: "birch_log", to: "westport_qp" },

    { from: "westport_qp", to: "qp_central", arrows: 'to;from', width: 5, physics: false },
];

const peakside_nodes = [
    { id: "spider_farm", label: "Tower of\nthe Arachnids\n\nMarch 18, 2021", group: "farm" },
    { id: "spider", label: "Spider", image: "./img/spider.png", group: "mob"},
    { id: "cave_spider", label: "Cave Spider", image: "./img/cave_spider.png", group: "mob"},
    { id: "string", label: "String", image: "./img/string.png", group: "product"},
    { id: "spider_eye", label: "Spider Eye", image: "./img/spider_eye.png", group: "product"},
    
    { id: "cobweb_farm", label: "Cobweb\nGenerator\n\nDecember 26, 2024", group: "farm" },
    { id: "allay_web", label: "Allay", image: "./img/allay.png", group: "mob"},
    { id: "silverfish_web", label: "Silverfish", image: "./img/silverfish.png", group: "mob"},
    { id: "cobweb", label: "Cobweb", image: "./img/cobweb.png", group: "product"},
    { id: "infested_web", label: "Infested Potion", image: "./img/infested.png"},
    { id: "weaving_web", label: "Weaving Potion", image: "./img/weaving.png"},
    
    { id: "cherry_castle", label: "Cherry Castle\n\nApril 1, 2023", group: "farm" },
    { id: "cherry_log", label: "Cherry Log", image: "./img/cherry_log.png", group: "product"},
    { id: "acacia_log", label: "Acacia Log", image: "./img/acacia_log.png", group: "product"},

    { id: "peakside_qp", label: "Peakside\nPost Office\n\nApril 18, 2023", group: "postal" },
];

const peakside_edges = [
    { from: "spider_farm", to: "spider" },
    { from: "spider_farm", to: "cobweb_farm" },
    { from: "spider_farm", to: "cave_spider" },
    { from: "spider", to: "spider_eye" },
    { from: "cave_spider", to: "spider_eye" },
    { from: "spider", to: "string" },
    { from: "cave_spider", to: "string" },
    { from: "string", to: "peakside_qp", dashes: [10,10] },
    { from: "spider_eye", to: "peakside_qp", dashes: [10,10] },
    { from: "spider_eye", to: "potion_brewer", dashes: [10,10], physics: false },
    { from: "cobweb_farm", to: "allay_web" },
    { from: "cobweb_farm", to: "infested_web" },
    { from: "cobweb_farm", to: "weaving_web" },
    { from: "infested_web", to: "silverfish_web" },
    { from: "allay_web", to: "silverfish_web" },
    { from: "allay_web", to: "silverfish_web" },
    { from: "silverfish_web", to: "cobweb" },
    { from: "weaving_web", to: "cobweb" },
    
    { from: "cherry_castle", to: "cherry_log" },
    { from: "cherry_castle", to: "acacia_log" },
    { from: "cherry_log", to: "peakside_qp" },
    { from: "acacia_log", to: "peakside_qp" },

    { from: "peakside_qp", to: "qp_central", arrows: 'to;from', width: 5, physics: false},
];

const dunederry_nodes = [
    { id: "mangrove_farm", label: "Mangrove Farm\n\nDecember 18, 2022", group: "farm" },
    { id: "mangrove_log", label: "Mangrove Log", image: "./img/mangrove_log.png", group: "product" },
    { id: "mangrove_propagule", label: "Mangrove Propagule", image: "./img/mangrove_propagule.png" },
    
    { id: "miracle_gro", label: "Miracle-Gro\nFactory\n\nMarch 22, 2023", group: "farm" },
    { id: "bone_meal_dunederry", label: "Bone Meal", image: "./img/bone_meal.png" },
    
    { id: "cocoa_bean_farm", label: "Cocoa Bean Farm\n\nJanuary 22, 2023", group: "farm" },
    { id: "cocoa_beans", label: "Cocoa Beans", image: "./img/cocoa_beans.png", group: "product" },

    { id: "infested_slime", label: "Ooze Factory\n\nMay 12, 2024", group: "farm" },
    { id: "allay", label: "Allay", image: "./img/allay.png", group: "mob" },
    { id: "silverfish", label: "Silverfish", image: "./img/silverfish.png", group: "mob" },
    { id: "slime_2", label: "Slime", image: "./img/slime.png", group: "mob" },
    { id: "slimeball_2", label: "Slimeball", image: "./img/slimeball.png", },
    { id: "slime_block_2", label: "Slime Block", image: "./img/slime_block.png", group:"product" },
    { id: "infested_potion", label: "Infested Potion", image: "./img/infested.png" },
    { id: "oozing_potion", label: "Oozing Potion", image: "./img/oozing.png" },


    { id: "dunederry_qp", label: "Dunederry City\nPost Office\n\nApril 17, 2023", group: "postal" },
];

const dunederry_edges = [
    { from: "miracle_gro", to: "bone_meal_dunederry" },
    { from: "bone_meal_dunederry", to: "mangrove_farm" },
    { from: "mangrove_farm", to: "mangrove_propagule" },
    { from: "mangrove_farm", to: "mangrove_log" },
    { from: "cocoa_bean_farm", to: "cocoa_beans" },
    { from: "mangrove_log", to: "dunederry_qp", dashes: [10,10] },
    
    { from: "infested_slime", to: "allay" },
    { from: "infested_slime", to: "infested_potion" },
    { from: "infested_slime", to: "oozing_potion" },
    { from: "allay", to: "silverfish" },
    { from: "infested_potion", to: "silverfish" },
    { from: "silverfish", to: "slime_2" },
    { from: "oozing_potion", to: "slime_2" },
    { from: "slime_2", to: "slimeball_2" },
    { from: "slimeball_2", to: "slime_block_2" },

    { from: "dunederry_qp", to: "qp_central", arrows: 'to;from', width: 5, physics: false },
];


const far_west_nodes = [
    { id: "witch_farm", label: "Witch Farm\n\nNovember 11, 2022", group: "farm" },
    { id: "witch", label: "Witch", image: "./img/witch.png", group: "mob" },
    { id: "redstone_dust_witch", label: "Redstone Dust", image: "./img/redstone.png" },
    { id: "redstone_block_witch", label: "Redstone Block", image: "./img/redstone_block.png", group:"product" },
    { id: "gunpowder_witch", label: "Gunpowder", image: "./img/gunpowder.png", group:"product" },
    { id: "glowstone_dust_witch", label: "Glowstone Dust", image: "./img/glowstone_dust.png", group:"product" },
    { id: "sugar_witch", label: "Sugar", image: "./img/sugar.png", group:"product" },
    { id: "spider_eye_witch", label: "Spider Eye", image: "./img/spider_eye.png", group:"product" },
    { id: "glass_bottle", label: "Glass Bottle", image: "./img/glass_bottle.png", group:"product" },
    { id: "stick_witch", label: "Stick", image: "./img/stick.png", group:"product" },
    
    { id: "phantom_farm", label: "Phantom Farm\n\nNovember 25, 2022", group: "farm" },
    { id: "phantom", label: "Phantom", image: "./img/phantom.png", group: "mob" },
    { id: "phantom_membrane", label: "Phantom Membrane", image: "./img/phantom_membrane.png", group:"product" },
];

const far_west_edges = [
    { from: "witch_farm", to: "witch" },
    { from: "witch", to: "redstone_dust_witch" },
    { from: "witch", to: "gunpowder_witch" },
    { from: "witch", to: "glowstone_dust_witch" },
    { from: "witch", to: "sugar_witch" },
    { from: "witch", to: "spider_eye_witch" },
    { from: "witch", to: "glass_bottle" },
    { from: "witch", to: "stick_witch" },
    { from: "redstone_dust_witch", to: "redstone_block_witch" },
    { from: "phantom_farm", to: "phantom" },
    { from: "phantom", to: "phantom_membrane" },

    { from: "phantom_membrane", to: "potion_brewer", dashes: [10,10], physics: false },
    { from: "glowstone_dust_witch", to: "potion_brewer", dashes: [10,10], physics: false },
    { from: "glowstone_dust_witch", to: "factory", dashes: [10,10], physics: false },
    { from: "glowstone_dust_witch", to: "fireworks_factory", dashes: [10,10], physics: false },
    { from: "redstone_block_witch", to: "factory", dashes: [10,10], physics: false },
    { from: "glass_bottle", to: "potion_brewer", dashes: [10,10], physics: false },
    { from: "redstone_block_witch", to: "potion_brewer", dashes: [10,10], physics: false },
];

const meadowgrace_nodes = [
    { id: "trading_hall", label: "Villager\nTrading Hall\n\nApril 16, 2024", group: "machine" },
    { id: "axolotl_farm", label: "Tropical Fish Farm\n\nApril 28, 2024", group: "farm" },
    { id: "tropical_fish", label: "Tropical Fish", image: "./img/tropical_fish.png", group:"product" },
    { id: "axolotl", label: "Axolotl", image: "./img/axolotl.png", group:"mob" },
    
    { id: "meadowgrace_qp", label: "Meadowgrace\nPost Office\n\nNovember 6, 2023", group: "postal" },
    
    
    { id: "dye_farm", label: "The Omnidye\nContraption\n\nMay 19, 2024", group: "farm" },
    { id: "bone_meal_dye", label: "Bone Meal", image: "./img/bone_meal.png" },
    { id: "white_dye", label: "White Dye", image: "./img/white_dye.png", group:"product" },

    { id: "pink_dye", label: "Pink Dye", image: "./img/pink_dye.png", group:"product" },
    { id: "peony_dye", label: "Peony", image: "./img/peony.png" },

    { id: "red_dye", label: "Red Dye", image: "./img/red_dye.png", group:"product" },
    { id: "rose_dye", label: "Rose Bush", image: "./img/rose.png" },

    { id: "yellow_dye", label: "Yellow Dye", image: "./img/yellow_dye.png", group:"product" },
    { id: "sunflower_dye", label: "Sunflower", image: "./img/sunflower.png" },

    { id: "magenta_dye", label: "Magenta Dye", image: "./img/magenta_dye.png", group:"product" },
    { id: "lilac_dye", label: "Lilac", image: "./img/lilac.png" },

    { id: "blue_dye", label: "Blue Dye", image: "./img/blue_dye.png", group:"product" },
    { id: "cornflower", label: "Cornflower", image: "./img/cornflower.png" },

    { id: "light_grey_dye", label: "Light Grey Dye", image: "./img/light_grey_dye.png", group:"product" },
    { id: "oxeye_daisy", label: "Oxeye Daisy", image: "./img/oxeye_daisy.png" },

    { id: "brown_dye", label: "Brown Dye", image: "./img/brown_dye.png", group:"product" },
    { id: "cocoa_bean_dye", label: "Cocoa Beans", image: "./img/cocoa_beans.png" },

    { id: "green_dye", label: "Green Dye", image: "./img/green_dye.png", group:"product" },
    { id: "cactus_dye", label: "Cactus", image: "./img/cactus.png" },
    { id: "kelp_dye", label: "Kelp", image: "./img/kelp.png" },
    { id: "dried_kelp_dye", label: "Dried Kelp", image: "./img/dried_kelp.png" },
    { id: "dried_kelp_block_dye", label: "Dried Kelp Block", image: "./img/dried_kelp_block.png" },


    { id: "lime_dye", label: "Lime Dye", image: "./img/lime_dye.png", group:"product" },
    { id: "grey_dye", label: "Grey Dye", image: "./img/grey_dye.png", group:"product" },
    { id: "orange_dye", label: "Orange Dye", image: "./img/orange_dye.png", group:"product" },
    { id: "purple_dye", label: "Purple Dye", image: "./img/purple_dye.png", group:"product" },
    { id: "light_blue_dye", label: "Light Blue Dye", image: "./img/light_blue_dye.png", group:"product" },
    { id: "cyan_dye", label: "Cyan Dye", image: "./img/cyan_dye.png", group:"product" },

    { id: "black_dye", label: "Black Dye", image: "./img/black_dye.png", group:"product" },
    { id: "allay_dye", label: "Allay", image: "./img/allay.png", group:"mob" },
    { id: "silverfish_dye", label: "Silverfish", image: "./img/silverfish.png", group:"mob" },
    { id: "wither", label: "Wither", image: "./img/wither.png", group:"mob" },
    { id: "infested_dye", label: "Infested Potion", image: "./img/infested.png" },
    { id: "wither_rose", label: "Wither Rose", image: "./img/wither_rose.png" },
    
    { id: "sniffer_dye", label: "Sniffer", image: "./img/sniffer.png", group:"mob" },
    { id: "farmer_dye", label: "Farmer", image: "./img/farmer.png", group:"mob" },
    { id: "torchflower_seed_dye", label: "Torchflower Seeds", image: "./img/torchflower_seeds.png" },
    { id: "pitcher_pod_dye", label: "Pitcher Pod", image: "./img/pitcher_pod.png" },
    { id: "pitcher_plant_dye", label: "Pitcher Plant", image: "./img/pitcher_plant.png" },
    { id: "torchflower_dye", label: "Torchflower", image: "./img/torchflower.png" },

    { id: "all_dyes", label: "All Dyes", image: "./img/red_dye.png", group: "factory" },

];

const meadowgrace_edges = [
    { from: "meadowgrace_qp", to: "qp_central", arrows: 'to;from', width: 5, physics: false },
    { from: "meadowgrace_qp", to: "trading_hall", arrows: 'to;from', width: 5 },
    { from: "axolotl_farm", to: "axolotl" },
    { from: "axolotl_farm", to: "tropical_fish" },
    
    
    { from: "dye_farm", to: "bone_meal_dye" },
    { from: "dye_farm", to: "kelp_dye" },
    { from: "dye_farm", to: "cactus_dye" },
    { from: "kelp_dye", to: "dried_kelp_dye" },
    { from: "dried_kelp_dye", to: "dried_kelp_block_dye" },
    { from: "bone_meal_dye", to: "peony_dye" },
    { from: "bone_meal_dye", to: "rose_dye" },
    { from: "bone_meal_dye", to: "sunflower_dye" },
    { from: "bone_meal_dye", to: "lilac_dye" },
    { from: "bone_meal_dye", to: "cornflower" },
    { from: "bone_meal_dye", to: "oxeye_daisy" },
    { from: "bone_meal_dye", to: "white_dye" },
    { from: "bone_meal_dye", to: "cocoa_bean_dye" },

    { from: "peony_dye", to: "pink_dye" },
    { from: "rose_dye", to: "red_dye" },
    { from: "sunflower_dye", to: "yellow_dye" },
    { from: "lilac_dye", to: "magenta_dye" },
    { from: "cornflower", to: "blue_dye" },
    { from: "oxeye_daisy", to: "light_grey_dye" },
    { from: "cocoa_bean_dye", to: "brown_dye" },
    { from: "cactus_dye", to: "green_dye" },
    { from: "dried_kelp_block_dye", to: "green_dye" },
    { from: "green_dye", to: "lime_dye" },
    { from: "white_dye", to: "lime_dye" },
    { from: "white_dye", to: "grey_dye" },
    { from: "black_dye", to: "grey_dye" },
    { from: "yellow_dye", to: "orange_dye" },
    { from: "red_dye", to: "orange_dye" },
    { from: "red_dye", to: "purple_dye" },
    { from: "blue_dye", to: "purple_dye" },
    { from: "blue_dye", to: "light_blue_dye" },
    { from: "white_dye", to: "light_blue_dye" },
    { from: "green_dye", to: "cyan_dye" },
    { from: "blue_dye", to: "cyan_dye" },

    { from: "dye_farm", to: "allay_dye" },
    { from: "dye_farm", to: "infested_dye" },
    { from: "dye_farm", to: "wither" },
    { from: "allay_dye", to: "silverfish_dye" },
    { from: "infested_dye", to: "silverfish_dye" },
    { from: "wither", to: "wither_rose" },
    { from: "silverfish_dye", to: "wither_rose" },
    { from: "wither_rose", to: "black_dye" },

    { from: "dye_farm", to: "sniffer_dye" },
    { from: "sniffer_dye", to: "torchflower_seed_dye" },
    { from: "sniffer_dye", to: "pitcher_pod_dye" },
    { from: "pitcher_pod_dye", to: "farmer_dye" },
    { from: "torchflower_seed_dye", to: "farmer_dye" },
    { from: "farmer_dye", to: "torchflower_dye" },
    { from: "farmer_dye", to: "pitcher_plant_dye" },
    { from: "pitcher_plant_dye", to: "cyan_dye" },
    { from: "torchflower_dye", to: "orange_dye" },

    { from: "white_dye", to: "all_dyes" },
    { from: "light_grey_dye", to: "all_dyes" },
    { from: "grey_dye", to: "all_dyes" },
    { from: "black_dye", to: "all_dyes" },
    { from: "brown_dye", to: "all_dyes" },
    { from: "pink_dye", to: "all_dyes" },
    { from: "red_dye", to: "all_dyes" },
    { from: "orange_dye", to: "all_dyes" },
    { from: "yellow_dye", to: "all_dyes" },
    { from: "lime_dye", to: "all_dyes" },
    { from: "green_dye", to: "all_dyes" },
    { from: "cyan_dye", to: "all_dyes" },
    { from: "light_blue_dye", to: "all_dyes" },
    { from: "blue_dye", to: "all_dyes" },
    { from: "purple_dye", to: "all_dyes" },
    { from: "magenta_dye", to: "all_dyes" },
    { from: "all_dyes", to: "fireworks_factory", dashes: [10,10], physics: false },
    { from: "all_dyes", to: "banner_crafting", dashes: [10,10], physics: false },
];

const eastport_nodes = [
    { id: "eastport_qp", label: "Eastport\nPost Office\n\nTBA", group: "postal" },

    { id: "goat_horn_farm", label: "Goat Horn Farm\n\nNovember 27, 2022", group: "farm" },
    { id: "goat", label: "Goat", image: "./img/goat.png", group:"mob" },
    { id: "goat_horn", label: "Goat Horns", image: "./img/goat_horn.png", group:"product" },
    
    { id: "guardian_farm", label: "Guardian Farm\n\nNovember 11, 2020", group: "farm" },
    { id: "guardian", label: "Guardian", image: "./img/guardian.png", group:"mob" },
    { id: "prismatic_shard", label: "Prismatic Shard", image: "./img/prismarine_shard.png" },
    { id: "prismatic_crystals", label: "Prismatic Crystals", image: "./img/prismarine_crystals.png" },
    { id: "ink_sac_guardian", label: "Ink Sac", image: "./img/ink_sac.png" },
    { id: "black_dye_guardian", label: "Black Dye", image: "./img/black_dye.png" },
    
    { id: "prismarine", label: "Prismarine", image: "./img/prismarine.png", group:"product" },
    { id: "prismarine_bricks", label: "Prismarine Bricks", image: "./img/prismarine_bricks.png", group:"product" },
    { id: "dark_prismarine", label: "Dark Prismarine", image: "./img/dark_prismarine.png", group:"product" },
    { id: "sea_lantern", label: "Sea Lantern", image: "./img/sea_lantern.png", group:"product" },
    

];

const eastport_edges = [
    { from: "goat_horn_farm", to: "goat" },
    { from: "goat", to: "goat_horn" },

    { from: "guardian_farm", to: "guardian" },
    { from: "guardian_farm", to: "ink_sac_guardian" },
    { from: "ink_sac_guardian", to: "black_dye_guardian" },
    { from: "guardian", to: "prismatic_shard" },
    { from: "guardian", to: "prismatic_crystals" },
    { from: "prismatic_shard", to: "prismarine" },
    { from: "prismarine", to: "eastport_qp" },
    { from: "prismarine_bricks", to: "eastport_qp" },
    { from: "dark_prismarine", to: "eastport_qp" },
    { from: "sea_lantern", to: "eastport_qp" },
    { from: "eastport_qp", to: "qp_central", arrows: 'to;from', width: 5, physics: false },
    { from: "prismatic_shard", to: "prismarine_bricks" },
    { from: "prismatic_shard", to: "dark_prismarine" },
    { from: "black_dye_guardian", to: "dark_prismarine" },
    { from: "prismatic_shard", to: "sea_lantern" },
    { from: "prismatic_crystals", to: "sea_lantern" },
];


const nether_nodes = [
    { id: "basalt_farm", label: "Basalt Blaster\n\nJune 28, 2024", group: "farm" },
    { id: "basalt", label: "Basalt", image: "./img/basalt.png", group:"product" },
    { id: "polished_basalt", label: "Polished Basalt", image: "./img/polished_basalt.png", group:"product" },
    
    { id: "blaze_farm", label: "Blaze Farm\n\nNovember 12, 2022", group: "farm" },
    { id: "blaze", label: "Blaze", image: "./img/blaze.png", group:"mob" },
    { id: "blaze_rod", label: "Blaze Rod", image: "./img/blaze_rod.png", group:"product" },
    
    { id: "ghast_farm", label: "Ghast Farm\n\nNovember 22, 2022", group: "farm" },
    { id: "ghast", label: "Ghast", image: "./img/ghast.png", group:"mob" },
    { id: "ghast_tear", label: "Ghast Tear", image: "./img/ghast_tear.png", group:"product" },
    { id: "gunpowder_ghast", label: "Gunpowder", image: "./img/gunpowder.png" },
    
    { id: "magma_farm", label: "Frog-Powered\nMagma Cube Farm\n\nMarch 17, 2022", group: "farm" },
    { id: "magma_cube", label: "Magma Cube", image: "./img/magma_cube.png", group:"mob" },
    { id: "frog", label: "Frogs", image: "./img/frog.png", group:"mob" },
    { id: "pearl_froglight", label: "Pearlescent Froglight", image: "./img/pearlescent_froglight.png", group:"product" },
    { id: "ochre_froglight", label: "Ochre Froglight", image: "./img/ochre_froglight.png", group:"product" },
    { id: "verdant_froglight", label: "Verdant Froglight", image: "./img/verdant_froglight.png", group:"product" },
    { id: "magma_cream", label: "Magma Cream", image: "./img/magma_cream.png", group:"product" },
    { id: "magma", label: "Magma", image: "./img/magma.png", group:"product" },
    
    { id: "gold_farm", label: "Gold Farm\n\nMarch 27, 2020", group: "farm" },
    { id: "pigman", label: "Zombified Piglin", image: "./img/zombified_piglin.png", group:"mob" },
    { id: "gold_nugget", label: "Gold Nugget", image: "./img/gold_nugget.png" },
    { id: "gold_ingot", label: "Gold Ingot", image: "./img/gold_ingot.png", group: "product" },
    { id: "piglin_trading", label: "Piglin Bartering\n\nMarch 29, 2021", group: "machine" },
    { id: "piglin", label: "Piglin", image: "./img/piglin.png", group:"mob" },
    { id: "obsidian", label: "Obsidian", image: "./img/obsidian.png", group: "product" },
    { id: "crying_obsidian", label: "Crying Obsidian", image: "./img/crying_obsidian.png", group: "product" },
    { id: "blackstone", label: "Blackstone", image: "./img/blackstone.png", group: "product" },
    { id: "gravel_pig", label: "Gravel", image: "./img/gravel.png", group: "product" },
    { id: "soul_sand", label: "Soul Sand", image: "./img/soul_sand.png", group: "product" },
    { id: "nether_brick", label: "Nether Brick", image: "./img/nether_brick.png", group: "product" },
    { id: "quartz", label: "Quartz", image: "./img/quartz.png", group: "product" },
    { id: "iron_ingot_pig", label: "Iron Ingot", image: "./img/iron_ingot.png", group: "product" },
    { id: "ender_pearl_pig", label: "Ender Pearl", image: "./img/ender_pearl.png", group: "product" },
    { id: "leather_pig", label: "Leather", image: "./img/leather.png", group: "product" },
    { id: "fire_charge", label: "Fire Charge", image: "./img/fire_charge.png", group: "product" },
    { id: "string_pig", label: "String", image: "./img/string.png", group: "product" },
    { id: "spectral_arrow", label: "Spectral Arrow", image: "./img/spectral_arrow.png", group: "product" },
    
    { id: "hoglin_farm", label: "Hoglin Farm\n\nMarch 20, 2020", group: "farm" },
    { id: "hoglin", label: "Hoglin", image: "./img/hoglin.png", group:"mob" },
    { id: "cooked_pork", label: "Cooked Porkchop", image: "./img/cooked_porkchop.png", group: "product" },
    { id: "leather", label: "Leather", image: "./img/leather.png", group: "product" },
];

const nether_edges = [
    { from: "basalt_farm", to: "basalt" },
    { from: "basalt", to: "polished_basalt" },
    { from: "blaze_farm", to: "blaze" },
    { from: "blaze", to: "blaze_rod" },
    { from: "blaze_rod", to: "potion_brewer", dashes: [10,10], physics: false },
    { from: "blaze_rod", to: "factory", dashes: [10,10], physics: false },
    { from: "ghast_farm", to: "ghast" },
    { from: "ghast", to: "ghast_tear" },
    { from: "ghast", to: "gunpowder_ghast" },
    { from: "ghast_tear", to: "potion_brewer", dashes: [10,10], physics: false },
    { from: "magma_farm", to: "magma_cube" },
    { from: "magma_cube", to: "frog" },
    { from: "frog", to: "pearl_froglight" },
    { from: "frog", to: "ochre_froglight" },
    { from: "frog", to: "verdant_froglight" },
    { from: "frog", to: "magma_cream" },
    { from: "magma_cream", to: "magma", dashes: [10, 10] },
    { from: "magma_cream", to: "potion_brewer", dashes: [10,10], physics: false },
    { from: "gold_ingot", to: "factory", dashes: [10,10], physics: false },
    { from: "gold_ingot", to: "fireworks_factory", dashes: [10,10], physics: false },
    { from: "fire_charge", to: "fireworks_factory", dashes: [10,10], physics: false },
    { from: "quartz", to: "factory", dashes: [10,10], physics: false },
    { from: "gold_farm", to: "pigman" },
    { from: "pigman", to: "gold_nugget" },
    { from: "gold_nugget", to: "gold_ingot" },
    { from: "gold_ingot", to: "piglin_trading" },
    { from: "piglin_trading", to: "piglin" },
    { from: "piglin", to: "obsidian" },
    { from: "piglin", to: "crying_obsidian" },
    { from: "piglin", to: "blackstone" },
    { from: "piglin", to: "gravel_pig" },
    { from: "piglin", to: "soul_sand" },
    { from: "piglin", to: "nether_brick" },
    { from: "piglin", to: "quartz" },
    { from: "piglin", to: "iron_ingot_pig" },
    { from: "piglin", to: "ender_pearl_pig" },
    { from: "piglin", to: "leather_pig" },
    { from: "piglin", to: "fire_charge" },
    { from: "piglin", to: "string_pig" },
    { from: "piglin", to: "spectral_arrow" },
    { from: "hoglin_farm", to: "hoglin" },
    { from: "hoglin", to: "leather" },
    { from: "hoglin", to: "cooked_pork" },
    
];

const end_nodes = [
    { id: "copper_farm", label: "Copper Farm\n\nApril 14, 2023", group: "farm" },
    { id: "drowned", label: "Drowned", image: "./img/drowned.png", group:"mob" },
    { id: "copper_ingot", label: "Copper", image: "./img/copper_ingot.png", group: "product" },
    
    { id: "enderman_farm", label: "Copper Farm\n\nAugust 7, 2024", group: "farm" },
    { id: "enderman", label: "Enderman", image: "./img/enderman.png", group:"mob" },
    { id: "ender_pearl", label: "Ender Pearl", image: "./img/ender_pearl.png", group: "product" },
    { id: "interdimenson", label: "Quick Post\nInterdimensional Transfer", group: "postal" },


];

const end_edges = [
    { from: "copper_farm", to: "drowned" },
    { from: "drowned", to: "copper_ingot" },
    { from: "copper_ingot", to: "interdimenson" },
    { from: "copper_ingot", to: "factory", dashes: [10,10], physics: false },
    { from: "interdimenson", to: "qp_central", width: 5, physics: false },
    { from: "enderman_farm", to: "enderman" },
    { from: "enderman", to: "ender_pearl" },
];

const stoneholt_castle_nodes = [
    { id: "dragon_egg_duper", label: "Dragon Egg Duper\n\nMay 7, 2021", group: "farm" },
    { id: "dragon_egg", label: "Dragon Egg", image: "./img/dragon_egg.png", group: "product" },
]

const stoneholt_castle_edges = [
    { from: "dragon_egg_duper", to: "dragon_egg" },
    { from: "dragon_egg", to: "ender_vacuum", dashes: [10, 10], physics: false }
]

const nodes = new vis.DataSet([...location_nodes, ...sugarcane_farm_nodes, ...iron_farm_nodes, ...kelp_farm_nodes, ...pump_melon_nodes, ...cobble_1_nodes, ...super_boner_nodes, ...cactus_nodes, ...smelter_nodes, ...bamboo_1_nodes, ...berry_nodes, ...moss_nodes, ...poss_nodes, ...villager_crop_nodes, ...simple_bonemeal_nodes, ...base_flower_nodes, ...misc_base_nodes, ...creeper_farm_nodes, ...potion_brewer_nodes, ...west_wing_nodes, ...east_wing_nodes, ...factory_nodes, ...spawn_nodes, ...mushroom_point_nodes, ...linhir_nodes, ...westport_nodes, ...peakside_nodes, ...dunederry_nodes, ...far_west_nodes, ...meadowgrace_nodes, ...eastport_nodes, ...nether_nodes, ...end_nodes, ...stoneholt_castle_nodes]);

const edges = new vis.DataSet([...location_edges, ...sugarcane_farm_edges, ...iron_farm_edges, ...kelp_farm_edges, ...pump_melon_edges, ...cobble_1_edges, ...super_boner_edges, ...cactus_edges, ...smelter_edges, ...bamboo_1_edges, ...berry_edges, ...moss_edges, ...poss_edges, ...villager_crop_edges, ...simple_bonemeal_edges, ...base_flower_edges, ...misc_base_edges, ...creeper_farm_edges, ...potion_brewer_edges, ...west_wing_edges, ...east_wing_edges, ...factory_edges, ...spawn_edges, ...mushroom_point_edges, ...linhir_edges, ...westport_edges, ...peakside_edges, ...dunederry_edges, ...far_west_edges, ...meadowgrace_edges, ...eastport_edges, ...nether_edges, ...end_edges, ...stoneholt_castle_edges]);


const data = {
    nodes: nodes,
    edges: edges
}


const network = new vis.Network(container, data, options);