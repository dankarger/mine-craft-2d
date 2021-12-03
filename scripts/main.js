import {Tile,tileSky,tileGround,tileGrass} from "./tile.js";
import {injectCell2, populate} from "./gameboard.js"
import {tools} from "./inventory.js";

const gameBoard = document.querySelector('#gameBoard');
const toolsList = document.querySelectorAll('.tools')
const tooldDiv = document.querySelector('.tools-div')
let currentTool

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

        if((tile.dataset.type === "grass"||tile.dataset.type === "ground" )&& currentTool.dataset.tool === "shovel") {
           return  replaceTile(tile, tileSky)

        // }else{
        //     wrongTools();
        }
        if(tile.dataset.type === "rock" && currentTool.dataset.tool === "pickaxe") {
           return replaceTile(tile, tileSky)

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
        // console.log(newTile)

    }

function wrongTools() {
    if(!currentTool)return
    currentTool.classList.toggle('wrong-tool-animation')
    setTimeout(()=>{
        currentTool.classList.toggle('wrong-tool-animation')
    },200)
}
populate()









//
// const images = {
//     ground:"../images/ground.jpg",
//     sky:"../images/sky.png",
//     grass:"url('../images/grass.jpg')"
// }

// const tileSky = {
//             type: "sky",
//             img: images["sky"],
//             tool: "none",
//             position:null
//              }
// const  tileGround = {
//     type: "ground",
//     tool: "none",
//     img: images["ground"],
//     position: {x:null,y:null}
// }
// const tileGrass = {
//     type: "grass",
//     tool: "shovel",
//     img:images['grass'],
//     position: {x:null,y:null}
// }

// const tilesList = {
//     sky: tileSky,
//     ground: tileGround,
// }
// function injectCell(tile,pos) {
//     gameBoard.innerHTML =   ` <div class="${tile.type}">
//                            <img src="${tile.img}" alt="">
//                            </div>`
//
//
// }

// class Tile {
//     constructor(tile,position) {
//         this.type= tile.type
//         this.img = tile.img
//         this.tool = tile.tool
//         this.position = position
//     }
// }
//
// function injectCell2(tile) {
//      let currentTile = document.createElement('div')
//     currentTile.style.background =tile.img + "no-repeat center center/cover"
//     currentTile.style.gridRowStart = tile.position.y
//     currentTile.style.gridColumnStart = tile.position.x
//     // currentTile.classList.add(`${tile.type}`)
//     gameBoard.appendChild(currentTile)
// }

// injectCell2(tileGround,{x:2,y:3})
//
// function populate(){
//   for(let i =1;i<21;i++) {
//       for(let j=1;j<21;j++) {
//           let currentTile = new Tile(tileGrass)
//           currentTile.position = {x:i,y:j}
//           injectCell2( currentTile)
//       }
//   }
    // let tile1 = new Tile(tileGround,{x:1,y:1})
    // injectCell2(tile1,tile1.position)

// }




// let tile1 = new Tile(tileGround,{x:1,y:1})