const audioObject = document.querySelector('#music-player')
export function playSound(sound) {
    let audio = new Audio(sound);
    audio.play();
}
export function playMusic() {
    setTimeout(()=>{audioObject.play()},3000)
}