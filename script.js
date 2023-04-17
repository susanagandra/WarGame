const id = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
const suit = ["&diams;", "&hearts;", "&clubs;", "&spades;"];
const deck = [];
let players = { player1: {}, player2: {},};
const playerRound = document.getElementsByClassName("player");
const playerCards = document.getElementsByClassName("playerCards");
const overlay = document.getElementById("overlay");
const cardBack = document.getElementsByClassName("card-back");
const cardToPlay1 = document.getElementById('card1');
const cardToPlay2 = document.getElementById('card2');
const cardWar1 = document.getElementById('cardWar1');
const cardWar2 = document.getElementById('cardWar2');
let cardScore1 = document.getElementById("cardbox1");
let cardScore2 = document.getElementById("cardbox2");
let score1 = document.getElementById("box1");
let score2 = document.getElementById("box2");
const cardBackLength = cardBack.length-1;
let warArray = [];

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

const cardObject = (id, suit, value) => {
    return {
        id: id,
        suit: suit,
        value: value
    }
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

    players.player1.deck = playerDeck1;
    players.player2.deck = playerDeck2;

    //Object.values(players).forEach(element => element.id = "player" + nr);
    //Object.values(players).forEach(element => element.deck = playerDeck1);
    
    let nr = 1;
    Object.values(players).forEach(function (element){
        element.id = "player" + nr;
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

    event.style.pointerEvents = "none";

    createCard(cardToPlay, nrPlayer);

    if (counter === 2){
        counter = 0;
        checkPlay(cardToPlay1, cardToPlay2);
    }
};

const createCard = (card, nr) => {

    const cardId = players["player" + nr].deck[0].id;
    const suit = players["player" + nr].deck[0].suit;
    const cardObject = document.getElementById(cardId);
    
    const symbol = document.getElementById(cardId).getElementsByClassName("symbol");

    Array.from(symbol).forEach(symbol => setSymbol(symbol, suit));

    changeColor(card, suit);

    card.innerHTML = "";
    card.appendChild(cardObject.cloneNode(true));

    //war();
}

const checkPlay = (card1, card2) => {
    let winnerCard = "";
    let winner = 0;

    const valuePlayer1 = players.player1.deck[0].value;
    const valuePlayer2 = players.player2.deck[0].value;

    //Object.values(players).forEach(element => element.deck[0].value);

    if (valuePlayer1 === valuePlayer2) {
        setTimeout(() => {
            war();
            checkPlay(cardWar1, cardWar2);
        }, 1500);
    } else {
        if (valuePlayer1 > valuePlayer2) {
            winnerCard = card1;
            score1.innerHTML++;
            winner = 1;
            //war();
        } else {
            winnerCard = card2;
            score2.innerHTML++;
            winner = 2;
        }

        removeCards(winnerCard);
        incrementDeck(winner);
        deleteCardFromDeck();
    }
    setScore();
}

const removeCards = (card) => {

    setTimeout(() => {
        scale(card);
    }, 1000);
}

const incrementDeck = (winner) => {
    players["player" + winner].deck.push(players.player1.deck[0], players.player2.deck[0]);
    players["player" + winner].deck = players["player" + winner].deck.concat(warArray);
    warArray = [];
}

const deleteCardFromDeck = () => {
    Object.values(players).forEach(element => element.deck.shift(0));
}

const setScore = () => {
    cardScore1.innerHTML = players.player1.deck.length;
    cardScore2.innerHTML = players.player2.deck.length;
}

const war = () => {
    const warCards = document.getElementsByClassName("card-war");

    if (players.player1.deck.length < 3 || players.player2.deck.length < 3) {
        checkWinner();
    } else {
        Object.values(players).forEach(element => {
            for(let i = 0; i < 3; i++){
                warArray.push(element.deck[i]);
            }
            //arrayTemp.push(element.deck.slice(0, 3));
            element.deck.splice(0, 3);
        });
    }

    for (let i = 0; i < warCards.length; i++) {
        warCards[i].style.visibility = "visible";
        warCards[i].style.opacity = "1";
        fadeIn(warCards[i]);
    }

    createCard(cardWar1, 1);
    createCard(cardWar2, 2);
}

const checkWinner = () => {
    if (players.player1.deck.length === 0 || players.player2.deck.length < 3) {
       // return ("Player 2 wins the game!");
      };
    if (players.player2.deck.length === 0 || players.player1.deck.length < 3) {
        //return ("Player 2 wins the game!");
      };
}

const animation = (cardToPlay, x, y) => {
    cardToPlay.animate([
        {transform: 'translate(' + x +'%, ' + y +'%)', opacity: '0'},
        {transform: 'translate(0%, 0%)', opacity: '1'}
    ],
        {
            duration: 500, easing: 'ease-in-out'
        });
}

const fadeOut = (cardToPlay) => {
    cardToPlay.animate([
        {opacity: '1'},
        {opacity: '0'}
    ],
        {
            duration: 500, easing: 'ease-in-out'
        }).onfinish = () => {
            const playerCardsDivs = document.querySelectorAll('.playerCards');

            playerCardsDivs.forEach(div => {
                const allDivs = div.querySelectorAll('div');
                
                allDivs.forEach(div => {
                    div.style.visibility = 'hidden';
                });
            });

            Array.from(playerRound).forEach(el => el.style.pointerEvents = "initial");
        };
}

const fadeIn = (cardsToFade) => {
    cardsToFade.animate([
        {opacity: '0'},
        {opacity: '1'}
    ],
        {
            duration: 1000, easing: 'ease-in-out'
        });
}

const scale = (cardToPlay) => {
    cardToPlay.animate([
        {transform: 'scale(1.1)'}
    ],
        {
            duration: 500, easing: 'ease-in-out'
        }).onfinish = () => {
            Array.from(playerCards).forEach(element => fadeOut(element));
        };
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
includeHTML();
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