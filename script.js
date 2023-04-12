var extern = document.getElementsByTagName("link")[0].import;

const id = ["two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten", "J", "Q", "K", "A"];
const suit = ["&diams;", "&hearts;", "&clubs;", "&spades;"];
const deck = [];
let playerDeck1 = [];
let playerDeck2 = [];
let gameOver = false;

/*while(!gameOver){

    
}*/



const overlay = document.getElementById("overlay");
let cardInner = document.getElementsByClassName("card-inner");
let cardBack = document.getElementsByClassName("card-back");
const cardBackLength = cardBack.length-1;


const playGame = () => {
    overlay.style.display = "none";
    cardBack[0].style.visibility = "visible";
    cardBack[cardBackLength].style.visibility = "visible";
    cardBack[0].classList.add('card-animation-flyin');
    cardBack[cardBackLength].classList.add('card-animation-flyin');

    startGame();
}


const playCard = (event) => {

    const player = event.id;
    const nrPlayer = String(player).charAt(player.length-1);
    const cardToPlay = document.getElementById('card' + nrPlayer);
    
    cardToPlay.style.visibility = 'visible';

    player === "player1" ? cardToPlay.classList.add('card-animation-flyup') : cardToPlay.classList.add('card-animation-flydown');

        
    createCard(cardToPlay, nrPlayer);
};

const startGame = () => {
    createDeck();
    createPlayersDeck();
}
const checkWinner = () => {}



////////////////

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
    const halfDeckLength = Math.floor(deck.length / 2);
    playerDeck1 = deck.slice(0, halfDeckLength);
    playerDeck2 = deck.slice(halfDeckLength);
}

const createCard = (card, nr) => {

    const playerDeck = "playerDeck" + nr;
    const playerCard = document.getElementById("card" + nr);
    const teste = document.getElementById("ace");

    playerCard.appendChild(teste);

    //playerDeck[0].id

    //playCard.appendChild(playerDeck[0].id); 

    //playerDeck[0]


}


const setSymbol = (card) => {
    const elements = document.getElementsByClassName("symbol");
    Array.from(elements).forEach((element) => {
        element.innerHTML = card;
    });
}

const changeColor = () => {
    const elements = document.getElementsByClassName("card");
    Array.from(elements).forEach((element) => {
        element.style.color = color;
    });
}

const shuffle = (deck) => {
    deck.forEach(function(card, i) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    });
}
shuffle(deck);




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