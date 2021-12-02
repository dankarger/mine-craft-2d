import {Tile, tileGrass, tileGround, tileRock, tileSky} from "./tile.js";
const gameBoard = document.querySelector('#gameBoard');



export function injectCell2(tile) {
    let currentTile = document.createElement('div')
    currentTile.style.background =tile.img + "no-repeat center center/cover"
    currentTile.style.gridRowStart = tile.position.y
    currentTile.style.gridColumnStart = tile.position.x
    // currentTile.classList.add(`${tile.type}`)
    gameBoard.appendChild(currentTile)
}


export function populate() {
    for (let i = 1; i < 21; i++) {
        for (let j = 1; j < 21; j++) {
            let currentTile={};
            if(j <= 13) currentTile = new Tile(tileSky);
            if(j >13 && j<15) currentTile = new Tile(tileGrass);
            if(j ===15)Math.floor(Math.random()*2)<1?currentTile = new Tile(tileGrass):currentTile = new Tile(tileGround);
            if(j>15) Math.floor(Math.random()*2)<1?currentTile = new Tile(tileGround):currentTile = new Tile(tileRock);
             currentTile.position = {x: i, y: j}
             injectCell2(currentTile);
        }
    }
}