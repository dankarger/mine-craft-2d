import {currentTool,currentTileinInventory} from "./main.js";
export let slot1 = document.querySelector('.slot1')
// export let currentTool
// export let currentTileinInventory='none'
export const tools = {
    shovel:{name:'shovel',
            img:'../images/shovel.jpg'
                },
    axe:{name:"axe",
    img:'../images/axe2.jpg'},
    pickaxe:{name:"pickaxe",
            img:'../images/pickaxe2.jpg\'}'
    }
}

export function wrongTools() {
    if(!currentTool)return
    currentTool.classList.toggle('wrong-tool-animation')
    setTimeout(()=>{
        currentTool.classList.toggle('wrong-tool-animation')
    },200)
}
//
// export function slot1Update(tile) {
//     slot1.style.background = tile.style.background
//     currentTileinInventory= tile
// }
// export function slot1Empty(tile,target) {
//     slot1.style.background = 'transparent'
//     // let neigbourPosition = [target.dataset.positionX,(parseInt(target.dataset.positionY)+1)]
//     // let bottomNeighbourTile = gameBoard.querySelector(`[data-position-y="${neigbourPosition[1]}"]+[data-position-x="${neigbourPosition[0]}"]`)
//     // console.log(bottomNeighbourTile)
//     if(currentTileinInventory!=='none' ) {
//         playSound("../sounds/short_whoosh1.wav")
//         if (target.dataset.type === tileGrass.type)   replaceTile(tile, tileGrass)
//         if (target.dataset.type === tileGround.type) replaceTile(tile, tileGround)
//         if (target.dataset.type === tileRock.type) replaceTile(tile, tileRock)
//         if (target.dataset.type === tileRockUp.type) replaceTile(tile, tileRockUp)
//         if (target.dataset.type === tileWood.type)  replaceTile(tile, tileWood)
//         if (target.dataset.type === tileBush.type)  replaceTile(tile, tileBush)
//     }
//     currentTileinInventory = 'none'
//     console.log(currentTileinInventory)
// }
