const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.getElementById('timer'),
    score: document.getElementById('score'),
    livesDisplay: document.getElementById('lives-left'),
  },
  values: {
    timerId: null,
    gameSpeed: 1000,
    countdownTimer: setInterval(countdown, 1000),
    ralphPosition: 0,
    livesLeft: 3,
    score: 0,
    currentTime: 60,
  }
}

function randomizeSquare() {
  state.view.squares.forEach((square) =>
  {square.classList.remove("enemy");
});
  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
  state.values.ralphPosition = randomSquare.id;
}

function moveRalph() {
    state.values.timerId = setInterval(randomizeSquare, state.values.gameSpeed);
}


function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.values.ralphPosition) {
        state.values.score++;
        playSound("hit");
      } else {
        state.values.livesLeft--;
        if (state.values.livesLeft < 0) {
          alert(`Game over! Sua pontuação foi ${state.values.score}. Tentar de novo?`)
          window.location.reload();
        }
      }
      state.view.livesDisplay.innerHTML = state.values.livesLeft;
      state.view.score.innerHTML = state.values.score;
      }
    )}
  )
}

function playSound(audioName) {
  let audio = new Audio(`./src/audio/${audioName}.m4a`);
  audio.volume = 0.2;
  audio.play();
}

function countdown() {
  state.values.currentTime--;
  state.view.timeLeft.innerHTML = state.values.currentTime;
  if (state.values.currentTime <= 0) {
    alert(`Game over! Sua pontuação foi ${state.values.score}. Tentar de novo?`) 
  }
}

function initialize() {
  addListenerHitBox();
  moveRalph();
}

initialize();