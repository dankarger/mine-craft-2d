import {createRandomNumber} from "./gameboard.js";
const audioObject = document.querySelector('#music-player')
// const track1 = document.querySelector(".track1")
// const track2 = document.querySelector(".track2")

const playList = [
    "./sounds/music2.mp3",
    "./sounds/scnd_theme.mp3"
]



export function playSound(sound) {
    let audio = new Audio(sound);
    audio.play();
}

export function playMusic() {
    randomizePlayList(playList)
    setTimeout(()=>{
        audioObject.play()

    },3500)
}

function randomizePlayList(tracks) {
    let randomNumber = createRandomNumber(2)
    console.log('r',randomNumber)
      randomNumber<1
        ? audioObject.innerHTML=`  <source  class="track1" src="${playList[0]}" type="audio/ogg" data-track-number="1">
         <source class="track2"  src="${playList[1]}" type="audio/wav" data-track-number="2">
         `
        : audioObject.innerHTML=`  <source  class="track1" src="${playList[1]}" type="audio/ogg" data-track-number="1">
         <source class="track2"  src="${playList[0]}" type="audio/wav" data-track-number="2">
         `;

}
audioObject.addEventListener('ended',function(){
    const track2 = document.querySelector(".track2")

    track2.play()
});
