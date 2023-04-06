function createCard (card, value, suit){
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

createCard("ace", "10", "&hearts;");