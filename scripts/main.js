import {Tile, tileSky, tileGround, tileGrass, tileRock, tileWood, tileRockUp, tileBush,tileTree} from "./tile.js";
import {injectCell2, populate} from "./gameboard.js"
// import {tools} from "./inventory.js";

const gameBoard = document.querySelector('#gameBoard');
const toolsList = document.querySelectorAll('.tools')
const tooldDiv = document.querySelector('.tools-div')
const slot1 = document.querySelector('.slot1')
const body = document.querySelector('body')
let currentTool
let currentTileinInventory='none'




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
        if ((tile.dataset.type === "tileGrass"||tile.dataset.type === "tileGround" )&& currentTool.dataset.tool === "shovel") {
            slot1Update(tile)
            playSound("../sounds/round_pop_click.wav")
            return replaceTile(tile, tileSky)
        }
        if ((tile.dataset.type === "tileWood" ||tile.dataset.type === "tileBush"||tile.dataset.type === "tileTree")  && currentTool.dataset.tool === "axe") {
            playSound("../sounds/round_pop_click2.wav")
            slot1Update(tile)
            return replaceTile(tile, tileSky)
        }
        if ((tile.dataset.type === "tileRock" || tile.dataset.type === "tileRockUp")&& currentTool.dataset.tool === "pickaxe") {
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
    slot1.style.background = 'transparent'
    // let neigbourPosition = [target.dataset.positionX,(parseInt(target.dataset.positionY)+1)]
    // let bottomNeighbourTile = gameBoard.querySelector(`[data-position-y="${neigbourPosition[1]}"]+[data-position-x="${neigbourPosition[0]}"]`)
    // console.log(bottomNeighbourTile)
    if(currentTileinInventory!=='none' ) {
        playSound("../sounds/short_whoosh1.wav")
        if (target.dataset.type === tileGrass.type)   replaceTile(tile, tileGrass)
        if (target.dataset.type === tileGround.type) replaceTile(tile, tileGround)
        if (target.dataset.type === tileRock.type) replaceTile(tile, tileRock)
        if (target.dataset.type === tileRockUp.type) replaceTile(tile, tileRockUp)
        if (target.dataset.type === tileWood.type)  replaceTile(tile, tileWood)
        if (target.dataset.type === tileBush.type)  replaceTile(tile, tileBush)
    }

     currentTileinInventory = 'none'
    console.log(currentTileinInventory)



}

function playSound(sound) {
    let audio = new Audio(sound);
    audio.play();
}
function playMusic() {
    setTimeout(()=>{playSound("../sounds/Sweden_-_Minecraft_Piano_Tutorial_Synthesia_Torby_Brand[grabfrom.com].mp3")},3000)

}
populate()
// window.onload = (event) => {
//     let firstInteraction = false
//     body.addEventListener('click',()=>{
//         firstInteraction=true
//     })
//     // while(!firstInteraction){ }
//     //    if(firstInteraction) playMusic()
// };

  // setTimeout(()=>{playSound("../sounds/Sweden_-_Minecraft_Piano_Tutorial_Synthesia_Torby_Brand[grabfrom.com].mp3")},3000)


// TODO: remove const tools from inventory.sj
// TODO: add a simple audio mixer
// TODO:change sounds
// TODO: add meta tags