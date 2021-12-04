import {Tile, tileSky, tileGround, tileGrass, tileRock,
        tileWood, tileRockUp, tileBush,tileTree,tileCloud,tileGold,tileMerchant} from "./tile.js";
import {createMerchant, createRandomNumber, injectCell2, populate, createGold} from "./gameboard.js"
import {playMusic, playSound} from "./sound.js";
import {wrongTools, slot1 } from "./inventory.js";
import {drawModeActivate, drawModeInjectTile} from "./draw-mode.js";

export let currentTool
export let currentTileinInventory='none'
const gameBoard = document.querySelector('#gameBoard');
const toolsList = document.querySelectorAll('.tools')
const tooldDiv = document.querySelector('.tools-div')
const body = document.querySelector('body')
const playButton = document.querySelector('.play-button')
const drawModeButton =document.querySelector('.draw-button')
const homePage = document.querySelector('#home-page')
let score = 0;
export let isDrawMode = false;

// Home-page

playButton.addEventListener('click',()=>{
    playSound('../sounds/round_pop_click2.wav')
    homePage.classList.add('display-none')
    populate()
    updateScore()
    playMusic()
})

drawModeButton.addEventListener('click',()=>{
    playSound('../sounds/round_pop_click2.wav')
    homePage.classList.add('display-none')
    isDrawMode = true
    drawModeActivate()
    populate()
    updateScore()
    // playMusic()
})

// tools

tooldDiv.addEventListener('click',(event)=> {
    let selectedTool = event.target;
    if(selectedTool!==tooldDiv) {
        currentTool=selectedTool
        playSound('../sounds/switch.wav')
        toolsList.forEach(tool => tool.classList.remove("selected-tool"))
        slot1.classList.remove("selected-tool")
        selectedTool.classList.toggle('selected-tool')
    }
})

// GameBoard interaction
gameBoard.addEventListener('click',(event)=> {
    if (!event.target.dataset) return
    let tile = event.target;
    if (event.target !== gameBoard) {
        if(isDrawMode) return drawModeInjectTile(tile)
        if ((tile.dataset.type === tileGrass.type||tile.dataset.type === tileGround.type )
              && currentTool.dataset.tool === tileGround.tool) {
            return toolAction(tile,"../sounds/round_pop_click.wav")
        }
        if ((tile.dataset.type === tileWood.type ||tile.dataset.type === tileBush.type||tile.dataset.type === tileTree.type)
            && currentTool.dataset.tool === tileWood.tool) {
                 return toolAction(tile,"../sounds/round_pop_click2.wav")
        }
        if ((tile.dataset.type === tileRock.type || tile.dataset.type === tileRockUp.type||tile.dataset.type  === tileGold.type)
            && currentTool.dataset.tool === tileRock.tool) {
                return toolAction(tile,"../sounds/round_pop_click2.wav")
        }
            if ((tile.dataset.type === tileSky.type ||tile.dataset.type === tileMerchant.type )&& currentTool.dataset.tool === "slot1") {
                if(currentTool.style.background==='white') return
                return slot1Empty(tile, currentTileinInventory)
        }else{
                playSound("../sounds/melodic1_click.wav")
                wrongTools()
        }
    }
    function toolAction(tile,sound) {
        slot1Update(tile)
        playSound("../sounds/round_pop_click.wav")
        return replaceTile(tile, tileSky)
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
    if(tile.dataset.type===tileGold.type) score+=50;
    if(tile.dataset.type===tileRock.type||tile.dataset.type===tileRockUp.type ) score+=3;
    if(tile.dataset.type===tileGrass.type||tile.dataset.type===tileGrass.type
                            ||tile.dataset.type===tileWood.type|| tile.dataset.type===tileTree.type) score+=2;
    if(tile.dataset.type===tileGround.type) score+=1;
    if(tile.dataset.type===tileGround.type ||tile.dataset.type===tileGrass.type||tile.dataset.type===tileWood.type ) score+=2;
    updateScore()
}

export function slot1Empty(tile,target) {
    if(tile.dataset.type === tileMerchant.type)  return validateTrade(target,tile)
    slot1.style.background = 'transparent'
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

function validateTrade(tile,merchant) {
    if (tile.dataset.type === tileGold.type) {
        currentTileinInventory='none'
        slot1.style.background = 'transparent'
        score+=100;
        updateScore()
        replaceTile(merchant, tileSky)
        createMerchant()
        createGold()
        return  playSound('../sounds/cash.wav')
    }else{
       return playSound('../sounds/electric_alert.wav')
    }
}

function updateScore (){
    const scoreBoard = document.querySelector('.score')
    scoreBoard.innerHTML = `$ ${score}`
}

export  function drawModeEnd() {
    isDrawMode = false;
    createGold()
    createMerchant()
    playMusic()
}
