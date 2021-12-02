const gameBoard = document.querySelector('#gameBoard');

const images = {
    ground:"./images/ground.jpg",
    sky:"./images/shovel.jpg"
}

let  tileSky = {
            type: "sky",
            img: images["sky"],
            tool: "none",
            position:null
             }
let  tileGround= {
    type: "ground",
    img: images["ground"],
    tool: "none",
    position: null
}
const tilesList = {
    sky: tileSky,
    ground: tileGround,
}

function injectCell(tile,pos) {
    gameBoard.innerHTML =   ` <div class="${tile.type}">
                           <img src="${tile.img}" alt="">
                           </div>`


}
injectCell(tileSky,[1,1])