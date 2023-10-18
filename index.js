let cards = [];
let sum = 0;
let hasBLackJack = false;
let isAlive = false;
let message = "";
console.log(cards);
let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.querySelector("#sum-el");
console.log(sumEl);

let cardEl = document.getElementById("card-el");
console.log(cardEl);

let player = {
  name: "Rutaba",
  chips: 140,
};
let playerName = document.getElementById("player-el");
playerName.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let sum = firstCard + secondCard;

  renderGame();
}

for (let i = 0; i < cards.length; i++) {
  cardEl.textContent += cards[i] + " ";
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Black Jack!";
    hasBLackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: " + cards;
}
function newCard() {
  if (isAlive === true && hasBLackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
  }
  renderGame();
}
