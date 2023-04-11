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
    elements[i].style.color = 'blue';
  }
}

changeColor();

const card = {
  id : ["two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten", "J", "Q", "K", "A"],
  suit : ["&diams;", "&hearts;", "&clubs;", "&spades;"]
};

const deck = [];

for (let i = 0; i < card.id.length; i++) {
  for (let j = 0; j < card.suit.length; j++) {
    let value = i + 2;
    let cardObj = { id: card.id[i], suit: card.suit[j], value: value };
    deck.push(cardObj);
  }
}

console.log(deck);