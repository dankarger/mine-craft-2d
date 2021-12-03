import {Tile, tileSky, tileGround, tileGrass, tileRock,
        tileWood, tileRockUp, tileBush,tileTree,tileCloud,tileGold,tileMerchant} from "./tile.js";
import {createRandomNumber, injectCell2, populate} from "./gameboard.js"
import {playMusic, playSound} from "./sound.js";
import {wrongTools, slot1 } from "./inventory.js";
export let currentTool
export let currentTileinInventory='none'
const gameBoard = document.querySelector('#gameBoard');
const toolsList = document.querySelectorAll('.tools')
const tooldDiv = document.querySelector('.tools-div')
const body = document.querySelector('body')

tooldDiv.addEventListener('click',(event)=> {
    let selectedTool = event.target;
    if(selectedTool!==tooldDiv) {
        currentTool=selectedTool
        toolsList.forEach(tool => tool.classList.remove("selected-tool"))
        slot1.classList.remove("selected-tool")
        selectedTool.classList.toggle('selected-tool')
    }
})

gameBoard.addEventListener('click',(event)=> {
    if (!event.target.dataset) return
    let tile = event.target;
    if (event.target !== gameBoard) {
        if ((tile.dataset.type === "tileGrass"||tile.dataset.type === "tileGround" )
              && currentTool.dataset.tool === "shovel") {
                slot1Update(tile)
                playSound("../sounds/round_pop_click.wav")
                return replaceTile(tile, tileSky)
        }
        if ((tile.dataset.type === "tileWood" ||tile.dataset.type === "tileBush"||tile.dataset.type === "tileTree")
            && currentTool.dataset.tool === "axe") {
                playSound("../sounds/round_pop_click2.wav")
                slot1Update(tile)
                return replaceTile(tile, tileSky)
        }
        if ((tile.dataset.type === "tileRock" || tile.dataset.type === "tileRockUp"||tile.dataset.type  === 'tileGold')
            && currentTool.dataset.tool === "pickaxe") {
                playSound("../sounds/round_pop_click2.wav")
                slot1Update(tile)
                return replaceTile(tile, tileSky)
        }
            if (tile.dataset.type === "tileSky" && currentTool.dataset.tool === "slot1") {
                if(currentTool.style.background==='white') return
                return slot1Empty(tile, currentTileinInventory)
        }else{
                playSound("../sounds/melodic1_click.wav")
                wrongTools()
        }
    }
})

export function replaceTile(tile, target) {
        let newTile = new Tile(target)
        newTile.position = {x: tile.dataset.positionX, y: tile.dataset.positionY}
        tile.remove(tile)
        injectCell2(newTile);
        }

export function slot1Update(tile) {
    slot1.style.background = tile.style.background
    currentTileinInventory= tile
}

export function slot1Empty(tile,target) {
    slot1.style.background = 'transparent'
    // let neigbourPosition = [target.dataset.positionX,(parseInt(target.dataset.positionY)+1)]
    // let bottomNeighbourTile = gameBoard.querySelector(`[data-position-y="${neigbourPosition[1]}"]+[data-position-x="${neigbourPosition[0]}"]`)
    // console.log(bottomNeighbourTile)
    if(currentTileinInventory!=='none' ) {
        playSound("../sounds/short_whoosh1.wav")
        if (target.dataset.type === tileGrass.type)  replaceTile(tile, tileGrass)
        if (target.dataset.type === tileGround.type) replaceTile(tile, tileGround)
        if (target.dataset.type === tileRock.type)   replaceTile(tile, tileRock)
        if (target.dataset.type === tileRockUp.type) replaceTile(tile, tileRockUp)
        if (target.dataset.type === tileWood.type)   replaceTile(tile, tileWood)
        if (target.dataset.type === tileBush.type)   replaceTile(tile, tileBush)
        if (target.dataset.type === tileTree.type)   replaceTile(tile, tileTree)
        if (target.dataset.type === tileGold.type)   replaceTile(tile, tileGold)
    }
    currentTileinInventory = 'none'
    console.log(currentTileinInventory)
}

populate()
playMusic()

// TODO: remove const tools from inventory.sj
// TODO:change sounds
