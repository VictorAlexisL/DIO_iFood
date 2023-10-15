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

function init() {
  drawCards(5, "player-cards");
  drawCards(5, "computer-cards");

};

init();