includeHTML();

const id = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
const suit = ["&diams;", "&hearts;", "&clubs;", "&spades;"];
const deck = [];
let players = {
    player1: {},
    player2: {},
};
const playerRound = document.getElementsByClassName("player");
const overlay = document.getElementById("overlay");
let cardBack = document.getElementsByClassName("card-back");
const cardBackLength = cardBack.length-1;

let gameOver = false;
let counter = 0;


const playGame = () => {
    overlay.style.display = "none";
    cardBack[0].style.visibility = "visible";
    cardBack[cardBackLength].style.visibility = "visible";
    cardBack[0].classList.add('card-animation-flyin');
    cardBack[cardBackLength].classList.add('card-animation-flyin');

    startGame();
}

const startGame = () => {
    createDeck();
    createPlayersDeck();
    createPlayer();
}

const createDeck = () => {
    let value = 1;

    id.forEach(function(id) {
        value++;
        suit.forEach(function(suit) {
            deck.push(cardObject(id, suit, value));
        });
    });

    shuffle(deck);
}

const createPlayersDeck = () => {
    const halfDeckLength = deck.length / 2;
    playerDeck1 = deck.slice(0, halfDeckLength);
    playerDeck2 = deck.slice(halfDeckLength);
}

const createPlayer = () => {

    //players.player1.id = "player1";
    players.player1.deck = playerDeck1;

    //players.player2.id = "player2";
    players.player2.deck = playerDeck2;

    console.log(players.player1.deck);
    console.log(players.player1.deck[0]);
    console.log(players.player2.deck);
    console.log(players.player2.deck[0]);

    let nr = 1;

    //Object.values(players).forEach(element => element.id = "player" + nr);
    //Object.values(players).forEach(element => element.deck = playerDeck1);

    Object.values(players).forEach(function (element){
        element.id = "player" + nr;
        //element.deck = 
        nr++;
    });
}

const playCard = (event) => {
    counter++;

    const player = event.id;
    const nrPlayer = String(player).charAt(player.length-1);
    const cardToPlay = document.getElementById('card' + nrPlayer);
    
    cardToPlay.style.visibility = 'visible';

    player === "player1" ? animation(cardToPlay, 20, -100) : animation(cardToPlay, -20, 100);
    //player === "player1" ? cardToPlay.classList.add('card-animation-flyup') : cardToPlay.classList.add('card-animation-flydown');

    console.log(cardToPlay);
    createCard(cardToPlay, nrPlayer);
    event.style.pointerEvents = "none";

    if (counter === 2){
        Array.from(playerRound).forEach(el => el.style.pointerEvents = "initial");
        counter = 0;
        checkPlay();

        const teste = document.getElementsByClassName('playerCards');
        Array.from(teste).forEach(el => el.children.style.visibility = "hidden");

        //cardToPlay.style.visibility = 'hidden';
    }
};

const animation = (cardToPlay, x, y) => {
    cardToPlay.animate([
        {transform: 'translate(' + x +'%, ' + y +'%)', opacity: '0'},
        {transform: 'translate(0%, 0%)', opacity: '1'}
    ],
        {
            duration: 1000, easing: 'ease-in-out'
        });
}

const createCard = (card, nr) => {

    const cardId = players["player" + nr].deck[0].id;
    const suit = players["player" + nr].deck[0].suit;
    const cardObject = document.getElementById(cardId);
    
    const symbol = document.getElementById(cardId).getElementsByClassName("symbol");

    Array.from(symbol).forEach(symbol => setSymbol(symbol, suit));

    changeColor(card, suit);

    card.innerHTML = "";
    card.appendChild(cardObject.cloneNode(true));
}


const checkWinner = () => {}

const war = () => {

}

const checkPlay = () => {
    let score1 = document.getElementById("box1");
    let score2 = document.getElementById("box2");

    let winner = 0;

    const valuePlayer1 = players.player1.deck[0].value;
    const valuePlayer2 = players.player2.deck[0].value;

    //Object.values(players).forEach(element => element.deck[0].value);

    if (valuePlayer1 === valuePlayer2) {
        war();
        //return;
    }
    if (valuePlayer1 > valuePlayer2) {
        score1.innerHTML++;
        winner=1;
    } else {
        score2.innerHTML++;
        winner=2;
    }
    incrementDeck(winner);
    deleteCardFromDeck();
}

const incrementDeck = (winner) => {
    players["player" + winner].deck.push(players.player1.deck[0], players.player2.deck[0]);
}

const deleteCardFromDeck = () => {
    Object.values(players).forEach(element => element.deck.shift(0));

    let cardScore1 = document.getElementById("cardbox1");
    let cardScore2 = document.getElementById("cardbox2");

    cardScore1.innerHTML = players.player1.deck.length;
    cardScore2.innerHTML = players.player2.deck.length;
}


////////////////

const cardObject = (id, suit, value) => {
    return {
        id: id,
        suit: suit,
        value: value
    }
}

const setSymbol = (symbol, suit) => {
    symbol.innerHTML = suit;
}

const changeColor = (card, suit) => {

    switch (suit) {
        case "&hearts;":
        case "&diams;":
            card.style.color = "red";
            break;

        default: card.style.color = "black";
    }
}

const shuffle = (deck) => {
    deck.forEach(function(card, i) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    });
}

const endGame = () => {
    if (player1Deck.length === 0 || player2Deck.length === 0) {
        return true;
    } else {
        return false;
    }
}

//MOUSEOVER AND OUT OF PLAYERS

cardBack[0].addEventListener("mouseover", (event) => {
    event.target.classList.add('card-back-hover');
});

cardBack[0].addEventListener("mouseout", (event) => {
    event.target.classList.remove('card-back-hover');
});

cardBack[cardBackLength].addEventListener("mouseover", (event) => {
    event.target.classList.add('card-back-hover');
});

cardBack[cardBackLength].addEventListener("mouseout", (event) => {
    event.target.classList.remove('card-back-hover');
});



//CALL EXERNAL HTML
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}