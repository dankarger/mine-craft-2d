import {tools} from "./inventory.js";

const images = {
    ground:"url('../images/ground.jpg')",
    sky:"url('../images/sky.png')",
    grass:"url('../images/grass.jpg')",
    wood:"url('../images/wood.png')",
    rock:"url('../images/rock.png')",
    gold:"url('../images/gold.png')",
    cloud:"url('../images/cloud.png')",
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
    // position:null
}
export const  tileGround = {
    type: "tileGround",
    tool: tools['shovel'],
    img: images["ground"],
    // position: {x:null,y:null}
}
export const tileGrass = {
    type: "tileGrass",
    tool: tools['shovel'],
    img:images['grass'],
    // position: {x:null,y:null}
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