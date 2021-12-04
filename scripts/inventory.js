import {currentTool,currentTileinInventory} from "./main.js";
export let slot1 = document.querySelector('.slot1')
export const tools = {
    shovel:'shovel',
    axe:"axe",
    pickaxe:"pickaxe"
}

export function wrongTools() {
    if(!currentTool)return
    currentTool.classList.toggle('wrong-tool-animation')
    setTimeout(()=>{
        currentTool.classList.toggle('wrong-tool-animation')
    },200)
}
