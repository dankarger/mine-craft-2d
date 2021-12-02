const gameBoard = document.querySelector('#gameBoard');
//
const images = {
    // ground:"./images/ground.jpg",
    // sky:"./images/shovel.jpg"
}

let  tileSky = {
            type: "sky",
            img: images["sky"],
            tool: "none",
            // position:null
             }
const  tileGround = {
    type: "ground",
    tool: "none",
    position: {x:null,y:null}
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

function injectCell2(tile,pos) {
     let currentTile = document.createElement('div')
    currentTile.style.backgroundImage =tile.img
    currentTile.style.gridRowStart = pos.y
    currentTile.style.gridColumnStart = pos.x
    currentTile.classList.add(`${tile.type}`)
    gameBoard.appendChild(currentTile)
}

injectCell2(tileGround,{x:2,y:3})

function populate(){
  for(let i =1;i<20;i++) {
      for(let j=1;j<20)
  }

}
populate()