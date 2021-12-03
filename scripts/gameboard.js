import {Tile, tileGrass, tileGround, tileRock, tileSky, tileRockUp, tileWood} from "./tile.js";
import {replaceTile} from "./main.js";

const gameBoard = document.querySelector('#gameBoard');



export function injectCell2(tile) {
    let currentTile = document.createElement('div')
    currentTile.style.background =tile.img + "no-repeat center center/cover"
    currentTile.style.gridRowStart = tile.position.y
    currentTile.style.gridColumnStart = tile.position.x
    currentTile.dataset.positionX  = tile.position.x
    currentTile.dataset.positionY  = tile.position.y
    currentTile.dataset.type = tile.type
   return gameBoard.appendChild(currentTile)
}


export function populate() {
    for (let i = 1; i < 21; i++) {
        // console.log('i',i)
        for (let j = 1; j < 21; j++) {
            // console.log('i',i,'j',j)
            let currentTile={};
            if(j <= 13) currentTile = new Tile(tileSky);
            // if(j===13) Math.floor(Math.random()*10+1)<9.5?currentTile = new Tile(tileSky):currentTile = new Tile(tileRockUp);

            if(j >13 && j<15) currentTile = new Tile(tileGrass);
            // if(j ===15)Math.floor(Math.random()*2)<1?currentTile = new Tile(tileGrass):currentTile = new Tile(tileGround);
            // if(j ===15)Math.floor(Math.random()*2)<1?currentTile = new Tile(tileGrass):currentTile = new Tile(tileGround);
            if(j >=15&& j<18) currentTile = new Tile(tileGround);

            if(j>=18) Math.floor(Math.random()*10+1)<8?currentTile = new Tile(tileGround):currentTile = new Tile(tileRock);
             currentTile.position = {x: i, y: j}
             injectCell2(currentTile);
        }
    }
    createRock()
}

function createRock() {
    let allSkyTiles = gameBoard.querySelectorAll('[data-type=tileSky]')
    console.log('tilt',allSkyTiles.dataset)
    let randomtile = allSkyTiles[44]
     let bottomRowSkyTiles = gameBoard.querySelectorAll('[data-position-y="13"]')
    replaceTile(bottomRowSkyTiles[2],new Tile(tileRockUp))
    console.log('bottom',bottomRowSkyTiles)
    // })
    // console.log(bottomRowSkyTiles)
    // let positionY = tile.dataset.positionY
    // let positionX =tile.dataset.positionX
    // for(let i =positionX;i <positionX+2;i++){
    //     let newTile= new Tile(tileRock)
    //     newTile.position={x:i,y:positionY}
    //     replaceTile(tile,newTile)
    // }

}