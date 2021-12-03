import {Tile,tileSky,tileGround,tileGrass} from "./tile.js";
import {injectCell2, populate} from "./gameboard.js"
import {tools} from "./inventory.js";

const gameBoard = document.querySelector('#gameBoard');
const toolsList = document.querySelectorAll('.tools')
const tooldDiv = document.querySelector('.tools-div')
const slot1 = document.querySelector('.slot1')

let currentTool
let currentTileinInventory
tooldDiv.addEventListener('click',(event)=> {
    let selectedTool = event.target;
    if(selectedTool!==tooldDiv) {
        currentTool=selectedTool
        toolsList.forEach(tool => tool.classList.remove("selected-tool"))
        selectedTool.classList.toggle('selected-tool')
        console.log(currentTool)
    }
})

gameBoard.addEventListener('click',(event)=> {
    if (!event.target.dataset) return
    let tile = event.target;
    if (event.target !== gameBoard) {
        if ((tile.dataset.type === "grass"||tile.dataset.type === "ground" )&& currentTool.dataset.tool === "shovel") {
            slot1Update(tile)
           return  replaceTile(tile, tileSky)
        }
        if (tile.dataset.type === "wood" && currentTool.dataset.tool === "axe") {
            slot1Update(tile)
            return  replaceTile(tile, tileSky)
        }
        if (tile.dataset.type === "rock" && currentTool.dataset.tool === "pickaxe") {
            slot1Update(tile)
           return replaceTile(tile, tileSky)
        }
            if (tile.dataset.type === "sky" && currentTool.dataset.tool === "slot1") {
                if(currentTool.style.background==='white') return
           return   slot1Empty(tile, currentTileinInventory.dataset.type)
                // console.log('c',currentTileinInventory)
                // return  replaceTile(tile, currentTileinInventory.dataset.type)
        }else{
            wrongTools()
        }
    }
})

function replaceTile(tile, target) {
        let newTile = new Tile(target)
        newTile.position = {x: tile.dataset.positionX, y: tile.dataset.positionY}
        tile.remove(tile)
        injectCell2(newTile);
    }

function wrongTools() {
    if(!currentTool)return
    currentTool.classList.toggle('wrong-tool-animation')
    setTimeout(()=>{
        currentTool.classList.toggle('wrong-tool-animation')
    },200)
}



 function slot1Update(tile) {
    slot1.style.background = tile.style.background
    currentTileinInventory= tile
}
function slot1Empty(tile,target) {
    let newTile = new Tile(target)
    newTile.position = {x: tile.dataset.positionX, y: tile.dataset.positionY}
    tile.remove(tile)
    injectCell2(newTile);
    slot1.style.background = 'white'
}


populate()






