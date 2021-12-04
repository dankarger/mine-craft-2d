import {Tile, tileGrass, tileGround, tileRock, tileSky, tileRockUp,
        tileWood, tileBush,tileTree,tileCloud, tileGold,tileMerchant} from "./tile.js";
import {replaceTile} from "./main.js";
import {playSound} from "./sound.js";

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
        for (let j = 1; j < 21; j++) {
            let currentTile={};
            if(j <= 13) currentTile = tileSky;
            // if(j===13) Math.floor(Math.random()*10+1)<9.5?currentTile = new Tile(tileSky):currentTile = new Tile(tileRockUp);
            if(j >13 && j<15) currentTile = tileGrass;
            if(j >=15&& j<18) currentTile = tileGround;
            if(j>=18) createRandomNumber(11) < 8
                    ? currentTile = tileGround
                    : currentTile = tileRock;
             currentTile.position = {x: i, y: j}
             injectCell2(currentTile);
        }
    }
    createRock()
    createRock()
    createBush()
    createTree()
    creatClouds()
    createGold()
    createMerchant()

}

function selectBottomRowSkyTile(){
    let bottomRowSkyTiles = gameBoard.querySelectorAll('[data-position-y="13"]')
    let randomIndex = createRandomNumber(18)+1
    let offset = createRandomNumber(3)
    return [bottomRowSkyTiles,randomIndex,offset]
}
function createRock() {
    let [bottomRowSkyTiles,randomIndex,offset] = selectBottomRowSkyTile()
    replaceTile(bottomRowSkyTiles[randomIndex],tileRockUp)
    if(offset===1)replaceTile(bottomRowSkyTiles[randomIndex+offset],tileRockUp)
}

function createBush() {
    let [bottomRowSkyTiles,randomIndex,offset] = selectBottomRowSkyTile()
    replaceTile(bottomRowSkyTiles[randomIndex],tileBush)
    if(offset===1)replaceTile(bottomRowSkyTiles[randomIndex+offset],tileBush)
}

function createTree() {
    const bottomRowSkyTiles = gameBoard.querySelectorAll('[data-position-y="13"]')
    const randomIndex = createRandomNumber(15)+1
    console.log('random',randomIndex)
    const positionX = bottomRowSkyTiles[randomIndex].dataset.positionX
    if (bottomRowSkyTiles[randomIndex].dataset.type !== 'tileSky'||bottomRowSkyTiles[randomIndex].dataset.positionX >18 ) return  createTree()
    replaceTile(bottomRowSkyTiles[randomIndex], tileWood)
    const upperTrunk = gameBoard.querySelector(`[data-position-x="${positionX}"] + [data-position-y="12"]`)
    replaceTile(upperTrunk,tileWood)
    const upperTrunk2 = gameBoard.querySelector(`[data-position-x="${positionX}"] + [data-position-y="11"]`)
    replaceTile(upperTrunk2,tileWood)
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
}

function creatClouds() {
    let topRows= []
    for(let i=1;i<6;i++){
        let topRowSky = gameBoard.querySelectorAll(` [data-position-y="${i}"]`)
        topRows.push(topRowSky)
    }
    let randomPositionIndex = createRandomNumber(17)
    replaceTile(topRows[2][randomPositionIndex+3],tileCloud)
    replaceTile(topRows[1][randomPositionIndex+2],tileCloud)
    replaceTile(topRows[4][14],tileCloud)
    for(let i = 1;i<=3;i++){
        replaceTile(topRows[2][randomPositionIndex+i],tileCloud)
        replaceTile(topRows[1][randomPositionIndex], tileCloud)
        replaceTile(topRows[1][randomPositionIndex+1],tileCloud)
        replaceTile(topRows[2][Math.floor(randomPositionIndex/2)], tileCloud)
    }
}

function createGold(){
    let random1  =createRandomNumber(17)+1
    let  random2 =18-createRandomNumber(4)
    let randomTile = gameBoard.querySelector(`[data-position-x="${random1}"]+[data-position-y="${random2}"]`)
    replaceTile(randomTile,tileGold)

}

function createMerchant() {
    let random1  =createRandomNumber(18)+1
    let randomTile = gameBoard.querySelector(`[data-position-x="${random1}"]+[data-position-y="13"]`);
    // if (randomTile.dataset.type!==tileSky.type) return createMerchant()
    setTimeout(()=>{
        replaceTile(randomTile,tileMerchant)
        playSound("../sounds/melodic5_affirm.wav")
    },7000)

}
export function createRandomNumber(range) {
    return Math.floor(Math.random()*range)
}