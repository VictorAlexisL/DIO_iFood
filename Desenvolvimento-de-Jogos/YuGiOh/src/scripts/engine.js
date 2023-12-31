const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById("score_points")
  },
  cardSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  fieldCards: {
    player: document.getElementById("player-field-card"),
    computer: document.getElementById("computer-field-card"),
  },
  actions: {
    button: document.getElementById("next-duel"),
  },
};

const players = {
  player1: "player-cards",
};

const cardData = [
  {
    id: 0,
    name: "Blue Eyes White Dragon",
    type: "Paper",
    img: "./src/assets/icons/dragon.png",
    WinOf: [1],
    LoseOf: [2],
  },

  {
    id: 1,
    name: "Dark Magician",
    type: "Rock",
    img: "./src/assets/icons/magician.png",
    WinOf: [2],
    LoseOf: [0],
  },

  {
    id: 2,
    name: "Exodia",
    type: "Scissors",
    img: "./src/assets/icons/exodia.png",
    WinOf: [0],
    LoseOf: [1],  
  }

];

const playerSides = {
  player1: "player-cards",
  computer: "computer-cards",
}

function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length)
  console.log(cardData[randomIndex].id);
  return cardData[randomIndex].id;
};

function checkDuelResults(playerCardId, computerCardId) {
  let duelResults = "Empate";

  let playerCard = cardData[playerCardId];
  if(playerCard.WinOf.includes(computerCardId)) {
    duelResults = "Ganhou";
    playAudio("win");
    state.score.playerScore++;
  } else if (playerCard.LoseOf.includes(computerCardId)){
    duelResults = "Perdeu";
    playAudio("lose");
    state.score.computerScore++;
  }

  return duelResults;
}


function drawButton(text) {
  state.actions.button.innerText = text;
  state.actions.button.style.display = "block";
};

async function updateScore() {
  state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`
};

async function setCardsField(cardId) {
  await removeAllCardsImages();

  let computerCardId = getRandomCardId();

  state.fieldCards.player.src = cardData[cardId].img;
  state.fieldCards.computer.src = cardData[computerCardId].img;

  state.fieldCards.player.style.display = "inline";
  state.fieldCards.computer.style.display = "inline";

  console.log(computerCardId);

  let duelResults = checkDuelResults(cardId, computerCardId);

  await updateScore();
  drawButton(duelResults);
};


function createCardImage(randomIdCard, fieldSide) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100");
  cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
  cardImage.setAttribute("data-id", randomIdCard);

  if(fieldSide === playerSides.player1) {
    cardImage.classList.add("card");
    cardImage.addEventListener("click", () => {setCardsField(cardImage.getAttribute("data-id"));});
    cardImage.addEventListener("mouseover", () => {drawSelectCard(cardImage.getAttribute("data-id"));});
  };

  document.getElementById(fieldSide).appendChild(cardImage);

  return cardImage;
}

function drawCards(cardNumbers, fieldSide) {
  for(let i = 0; i < cardNumbers; i++) {
    const randomIdCard = getRandomCardId();
    const cardImage = createCardImage(randomIdCard, fieldSide);
  };
};

async function drawSelectCard(index){
  state.cardSprites.avatar.src = cardData[index].img;
  state.cardSprites.name.innerText = cardData[index].name;
  state.cardSprites.type.innerText = "Attribute : " + cardData[index].type;
}

async function removeAllCardsImages() {
  let cards = document.getElementById("computer-cards");
  let imgElements = cards.querySelectorAll("img");
  imgElements.forEach((img) => img.remove());

  cards = document.getElementById("player-cards");
  imgElements = cards.querySelectorAll("img");
  imgElements.forEach((img) => img.remove());
}

async function resetDuel() {
  state.cardSprites.avatar.src = "";
  state.actions.button.style.display = "none";
  state.fieldCards.player.style.display = "none";
  state.fieldCards.computer.style.display = "none";
  state.cardSprites.name.innerText = "Escolha uma carta";
  state.cardSprites.type.innerText = "É hora do duelo!";

  init();
}

function playAudio(status) {
  const audio = new Audio(`./src/assets/audios/${status}.wav`);
  audio.play();
}

function init() {
  drawCards(5, "player-cards");
  drawCards(5, "computer-cards");

  const bgm = document.getElementById("bgm");
  bgm.play();
};

init();