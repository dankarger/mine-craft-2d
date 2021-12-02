##tools = {
- ###1: { 
    -     name: "shovel",
    -     img: "shovel.jpg",
- ###2: { 
    -      name: "axe",
    -      img: "axe.jpg}
- ###3: {
    -      name:"pickaxe,
    -      img:"pickaxe.jpg}
}

##tiles = {
- ###sky: { 
  -     type: "sky",
  -     img: images["sky"],
  -     tool: "none",
  -     position: [x,y]}
- ###ground: { 
   -     type: "ground",
   -     img: images["ground"],
   -     tool: "tools[1]",
   -     position: [x,y] }
- ###grass: { 
    -     type: "grass",
    -     img: images["grass"],
    -     tool: "tools[1]",
    -     position: [x,y] }
- ###tree: { 
    -     type: "tree",
    -     img: images["tree"],
    -     tool: "tools[2]",
    -     position: [x,y] }
- ###wood: { 
    -     type: "wood",
    -     img: images["wood"],
    -     tool: "tools[2]",
    -     position: [x,y] }
- ###rock: { 
    -     type: "rock",
    -     img: images["wood"],
    -     tool: "tools[3]",
    -     position: [x,y] }

-}

##images = {
  -     sky: "sky.jpg",
  -     ground: "ground.jpg",
  -     grass : "grass.jpg",
  -     tree : "tree.jpg",
  -     wood : "wood.jpg",
  -     rock : "rock.jpg"
}

## inventory = {
  -      selectedTool: null,
  -      slot1 = "tile"
  
}


