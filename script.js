function createCard (card, suit){
    const cardSymbol = document.getElementById(card);
    const cardSymbolLength = cardSymbol.getElementsByClassName("symbol").length;

    for(i = 0; i < cardSymbolLength; i++){
        cardSymbol.getElementsByClassName("symbol")[i].innerHTML = suit;
    }
}
createCard("ace","&diamond;")


function changeCardColor(symbol) {
    
    const card = document.getElementById(symbol);

    card.addClass("red");

  
    //cardSymbol.getElementById("symbol").html("&"+symbol+";") === "hearts" || cardSymbol.getElementById("symbol").html("&"+symbol+";") === "diamond" ) {
        //cardSymbol.addClass("red");
        
  //}
  //$("body").append(cardSymbol);
}

changeCardColor("ace");

