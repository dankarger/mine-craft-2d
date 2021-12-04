import {isDrawMode} from "./main.js";
import {currentTool,replaceTile, drawModeEnd} from "./main.js";
import {Tile,tileGrass,tileGround,tileSky,tileRockUp} from "./tile.js";
import {playSound} from "./sound.js";

const drawModeTools = document.querySelector('.draw-mode-tools')
const tools = document.querySelectorAll('.tools')
const slot1 = document.querySelector('.slot1')
const score =document.querySelector('.score')
const playButton = document.querySelector('.play-button-in-draw-mode')
const instructions = document.querySelector('.draw-mode-text')
const playModInstructionsnstructions = document.querySelector('.play-mode-text')
const tilesList = {
    'tileGrass':tileGrass,
    'tileGround':tileGround,
    'tileSky':tileSky,
    'tileRockUp':tileRockUp,
}

playButton.addEventListener('click',()=>{
    drawModeActivate()
    drawModeEnd()
})

export function  drawModeActivate() {
        tools.forEach(tool=>{
            tool.classList.toggle('draw-mode-off');
        })
         slot1.classList.toggle('draw-mode-off');
         score.classList.toggle('draw-mode-off');
         playButton.classList.toggle('draw-mode-off');
         drawModeTools.classList.toggle('draw-mode-off');
         instructions.classList.toggle('draw-mode-off');
         playModInstructionsnstructions.classList.toggle('draw-mode-off');
}

export function drawModeInjectTile(tile) {
    let currentToolTile = tilesList[currentTool.dataset.tool]
    replaceTile(tile,currentToolTile)
    playSound('../sounds/round_pop_click2.wav')

}

