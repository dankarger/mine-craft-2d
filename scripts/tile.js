const images = {
    ground:"../images/ground.jpg",
    sky:"../images/sky.png",
    grass:"url('../images/grass.jpg')"
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
    type: "sky",
    img: images["sky"],
    tool: "none",
    position:null
}
export const  tileGround = {
    type: "ground",
    tool: "none",
    img: images["ground"],
    position: {x:null,y:null}
}
export const tileGrass = {
    type: "grass",
    tool: "shovel",
    img:images['grass'],
    position: {x:null,y:null}
}
