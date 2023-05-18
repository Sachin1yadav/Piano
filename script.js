const pianoKeys = document.querySelectorAll(".piano-keys .key");
const valumeSlider = document.querySelector(".valume-slider input");
const check = document.querySelector(".keys-checkbox input");

let allKeys=[]
let audio = new Audio("./tunes/tunes/a.wav");

const playTune = (key) => {
  audio.src=`./tunes/tunes/${key}.wav`
  audio.play();
// console.log("k",key)
// console.log(allKeys)
  const clickedKey=document.querySelector(`[data-key="${key}"]`)
  // console.log("key",clickedKey)
  clickedKey?.classList.add("active")
  setTimeout(()=>{
    clickedKey.classList.remove("active")
  },1000)
};

pianoKeys.forEach( key  => {
  allKeys.push(key.dataset.key)
  key.addEventListener("click", () => playTune(key.dataset.key));
});



const handelVolume=(e)=>{
audio.volume=e.target.value
}


const Tooglekey=()=>{
  pianoKeys.forEach(key=>
    key.classList.toggle("hide"))
}
const pressedkey=(e)=>{
  // console.log(e)
  if(allKeys.includes(e.key))
  playTune(e.key)
}

document.addEventListener("keydown",pressedkey)

valumeSlider.addEventListener("input",handelVolume)
check.addEventListener("click",Tooglekey)
