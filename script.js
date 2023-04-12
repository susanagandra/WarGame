let gameOver = false;

/*while(!gameOver){

    
}*/

const startGame = () => {}
const createCard = (cenas) => {}
const checkWinner = () => {}

const playButton = document.getElementById("playBtn");
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

    //const player = document.getElementById(event.id);
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const player = event.id;

    const nrPlayer = player.chartAt(player.length);
    console.log(nrPlayer);

    if (player === "player1") {
        card1.style.visibility = 'visible';
        card1.classList.add('card-animation-flyup');

        createCard(player1Deck);

        checkWinner();

    } else {
        card2.style.visibility = 'visible';
        card2.classList.add('card-animation-flydown');
    }

    createCard('player' + nrPlayer + 'Deck');

    

    console.log(event.id);
};


//MOUSEOVER AND OUT OF PLAYERS

cardBack[0].addEventListener("mouseover", (event) => {
    event.target.classList.add('card-back-hover');
    console.log(event);
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











/*function createCard (card, value, suit){
    const cardSymbol = document.getElementById(card);
    const cardSymbolLength = cardSymbol.getElementsByClassName("symbol").length;
    const cardNumberLength = cardSymbol.getElementsByClassName("number").length;

    for(i = 0; i < cardSymbolLength; i++){
        cardSymbol.getElementsByClassName("symbol")[i].innerHTML = suit;
    }

    for(i = 0; i < cardNumberLength; i++){
        cardSymbol.getElementsByClassName("number")[i].innerHTML = value;
    }
}

createCard("ace", "10", "&hearts;");*/