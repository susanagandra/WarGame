function setSymbol(card) {
  const elements = document.getElementsByClassName("symbol");
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = card;
  }
}
setSymbol("&diams;");

function changeColor(card) {
  const elements = document.getElementsByClassName("card");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = 'green';
  }
}
changeColor();

const createCard = (id, suit, value) => {
  return {
    id: id,
    suit: suit,
    value: value
  }
}

const id = ["two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten", "J", "Q", "K", "A"];
const suit = ["&diams;", "&hearts;", "&clubs;", "&spades;"];

const deck = [];

function creatDeck(card) {
  let value = 1;

  id.forEach(function(id) {
    value++;
    suit.forEach(function(suit) {
      deck.push(createCard(id, suit, value));
    });
  });
}

creatDeck(deck);
console.log(deck)

function shuffle(deck) {
  deck.forEach(function(card, i) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  });
}
shuffle(deck);

const halfDeckLength = Math.floor(deck.length / 2);
const player1Deck = deck.slice(0, halfDeckLength);
const player2Deck = deck.slice(halfDeckLength);

console.log(player1Deck);
console.log(player2Deck);