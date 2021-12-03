import {Tile, tileGrass, tileGround, tileRock, tileSky, tileRockUp, tileWood, tileBush,tileTree} from "./tile.js";
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
    createBush()
    createTree()
}

function createRock() {
     let bottomRowSkyTiles = gameBoard.querySelectorAll('[data-position-y="13"]')
    let randomIndex = Math.floor(Math.random()*20 )
    let offset = Math.floor(Math.random()*2+1)
    replaceTile(bottomRowSkyTiles[randomIndex],new Tile(tileRockUp))
    if(offset===1)replaceTile(bottomRowSkyTiles[randomIndex+offset],new Tile(tileRockUp))
    console.log('bottom',bottomRowSkyTiles)
}
function createBush() {
    let bottomRowSkyTiles = gameBoard.querySelectorAll('[data-position-y="13"]')
    let randomIndex = Math.floor(Math.random()*20 )
    let offset = Math.floor(Math.random()*2+1)
    console.log('r',randomIndex)
    replaceTile(bottomRowSkyTiles[randomIndex],new Tile(tileBush))
    if(offset===1)replaceTile(bottomRowSkyTiles[randomIndex+offset],new Tile(tileBush))
    console.log('bottom',bottomRowSkyTiles)
}

function createTree() {
    const bottomRowSkyTiles = gameBoard.querySelectorAll('[data-position-y="13"]')
    const randomIndex = Math.floor(Math.random() *15 +1)
    const positionX = bottomRowSkyTiles[randomIndex].dataset.positionX
    if (bottomRowSkyTiles[randomIndex].dataset.type !== 'tileSky') return  createTree()
    replaceTile(bottomRowSkyTiles[randomIndex], new Tile(tileWood))
    const upperTrunk = gameBoard.querySelector(`[data-position-x="${positionX}"] + [data-position-y="12"]`)
    console.log('t', upperTrunk)
    replaceTile(upperTrunk, new Tile(tileWood))
    const upperTrunk2 = gameBoard.querySelector(`[data-position-x="${positionX}"] + [data-position-y="11"]`)
    replaceTile(upperTrunk2, new Tile(tileWood))
    let branches = []
    for (let i=3 ; i>0;i--) {
        let offsetX = parseInt(positionX-2) +i

        for(let j=3;j>0;j--) {
            let offsetY = 7+j
            let branch = gameBoard.querySelector(`[data-position-x="${offsetX}"] + [data-position-y="${offsetY}"]`)
            branches.push(branch)
        }
}
    branches.forEach(branch=>{
        replaceTile(branch,tileTree)
    })
    console.log('br', branches)

}