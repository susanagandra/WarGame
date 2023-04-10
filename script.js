function setSymbol(card) {
  const elements = document.getElementsByClassName("symbol");
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = card;
  }
}
setSymbol("&clubs;");

  
function changeColor(card) {
  const elements = document.getElementsByClassName("card");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = 'blue';
  }
}

changeColor();