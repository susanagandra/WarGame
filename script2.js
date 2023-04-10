/*function createCard (card, suit){
    const cardSymbol = document.getElementById(card);
    const cardSymbolLength = cardSymbol.getElementsByClassName("symbol").length;

    for(i = 0; i < cardSymbolLength; i++){
        cardSymbol.getElementsByClassName("symbol")[i].innerHTML = suit;
    }
}*/

function setSymbol(suit) {
    const elements = document.querySelectorAll(".card .symbol");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = suit;
    }
}
  setSymbol("&hearts;");
  setSymbol("&diams;");
  setSymbol("&clubs;");
  setSymbol("&spades;")



function createDeck() {
    const suits = ["&hearts;", "&diamonds;", "&clubs;", "&spades;"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const deck = [];
  
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<span class="symbol">${suits[i]}</span><span class="value">${values[j]}</span>`;
        setSymbol(suits[i], card);
        changeColor(card);
        deck.push(card);
      }
    }
    return deck;
  }
  const deck = createDeck();
  console.log(deck);


  function changeColor(card) {
    const symbol = card.querySelector('.symbol').textContent;
    const number = card.querySelector('.number').textContent;
    if (symbol === "&hearts;" || symbol === "&diamonds;") {
      card.style.color = "red";
      card.querySelector('.symbol').style.color = "red";
      card.querySelector('.number').style.color = "red";
    } else {
      card.style.color = "black";
      card.querySelector('.symbol').style.color = "black";
      card.querySelector('.number').style.color = "black";
    }
  }