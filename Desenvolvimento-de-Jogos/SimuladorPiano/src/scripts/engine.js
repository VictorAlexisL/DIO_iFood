const pianoKeys = document.querySelectorAll(".key");

let mappedKeys = [];

pianoKeys.forEach((key)=>{
  key.addEventListener("click", () => playTune(key.dataset.key))
  mappedKeys.push(key.dataset.key);
  console.log(mappedKeys);
});

const volumeSlider = document.getElementById("volume");
const keysCheck = document.getElementById("keys-checkbox");

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

document.addEventListener("keydown", (e) => {
  if(mappedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

const showHideKeys = () => {pianoKeys.forEach(key => key.classList.toggle("hide"))};


volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);