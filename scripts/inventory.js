import {currentTool,currentTileinInventory} from "./main.js";
export let slot1 = document.querySelector('.slot1')
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
