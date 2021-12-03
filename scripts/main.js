import {Tile,tileSky,tileGround,tileGrass} from "./tile.js";
import {injectCell2, populate} from "./gameboard.js"
// import {tools} from "./inventory.js";

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
        if ((tile.dataset.type === "tileGrass"||tile.dataset.type === "tileGround" )&& currentTool.dataset.tool === "shovel") {
            slot1Update(tile)
            playSound("../sounds/round_pop_click.wav")
           return  replaceTile(tile, tileSky)
        }
        if (tile.dataset.type === "tileWood" && currentTool.dataset.tool === "axe") {
            playSound("../sounds/round_pop_click2.wav")
            slot1Update(tile)
            return  replaceTile(tile, tileSky)
        }
        if (tile.dataset.type === "tileRock" && currentTool.dataset.tool === "pickaxe") {
            playSound("../sounds/round_pop_click2.wav")
            slot1Update(tile)
           return replaceTile(tile, tileSky)
        }
            if (tile.dataset.type === "tileSky" && currentTool.dataset.tool === "slot1") {
                if(currentTool.style.background==='white') return
                playSound("../sounds/short_whoosh1.wav")
           return   slot1Empty(tile, currentTileinInventory)
                // console.log('c',currentTileinInventory)
                // return  replaceTile(tile, currentTileinInventory.dataset.type)
        }else{
            playSound("../sounds/melodic1_click.wav")
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
    console.log(target.dataset)
    let newTile = new Tile(target.dataset.type)
    newTile.position = {x: tile.dataset.positionX, y: tile.dataset.positionY}
    tile.remove(tile)
    injectCell2(newTile);
    slot1.style.background = 'white'
}

function playSound(sound) {
    let audio = new Audio(sound);
    audio.play();
}
populate()

// setTimeout(()=>{playSound("../sounds/scnd theme  keyscape 4  monster sleeping.wav")},3000)


// TODO: remmove const tools from inventory.sj

