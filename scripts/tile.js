import {tools} from "./inventory.js";

const images = {
    ground:"url('../images/ground.jpg')",
    sky:"url('../images/sky.png')",
    grass:"url('../images/grass.png')",
    wood:"url('../images/wood.png')",
    rock:"url('../images/rock.png')",
    rockUp:"url('../images/rock3.png')",
    gold:"url('../images/gold.png')",
    cloud:"url('../images/cloud.png')",
    tree:"url('../images/tree.png')"
}

export class Tile {
    constructor(tile,position) {
        this.type= tile.type
        this.img = tile.img
        this.tool = tile.tool
        this.position = position
    }
}

export const tileSky = {
    type: "tileSky",
    img: images["sky"],
    tool: "none",
}
export const  tileGround = {
    type: "tileGround",
    tool: tools['shovel'],
    img: images["ground"],
}
export const tileGrass = {
    type: "tileGrass",
    tool: tools['shovel'],
    img:images['grass'],
}

export const tileWood = {
    type: "tileWood",
    tool: tools['axe'],
    img:images['wood'],
 }

export const tileRock = {
    type: "tileRock",
    tool: tools['pickaxe'],
    img:images['rock'],
}

export const tileRockUp = {
    type: "tileRockUp",
    tool: tools['pickaxe'],
    img:images['rockUp'],
}