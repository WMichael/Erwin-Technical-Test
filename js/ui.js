document.addEventListener("DOMContentLoaded", function(event){

  // Update user interface on start
  updateUI();

  // Event listeners
  document.getElementById("shuffleBtn").addEventListener("click", function(){
    shuffleDeck();
    updateUI();
  });

  document.getElementById("sortDeckBtn").addEventListener("click", function(){
    sortCards(deckOfCards);
    updateUI();
  });

  document.getElementById("sortHandBtn").addEventListener("click", function(){
    sortCards(hand);
    updateUI();
  });

  document.getElementById("drawCardsBtn").addEventListener("click", function(){
    drawCards(document.getElementById("cardsToDraw").value,false);
    updateUI();
  });

  document.getElementById("drawSortCardsBtn").addEventListener("click", function(){
    drawCards(document.getElementById("cardsToDraw").value,true)
    updateUI();
  });

  document.getElementById("resetBtn").addEventListener("click", function(){
    setupDeck();
    updateUI();
  });

});


// Function clears the two lists of cards and then starts adding cards from the two arrays.
function updateUI(){
  // Clear lists of cards
  document.getElementById("deckOfCards").innerHTML = "<h2>Deck of Cards (" + deckOfCards.length +"):</h2>";
  document.getElementById("hand").innerHTML = "<h2>Hand (" + hand.length + "):</h2>";

  // List each card from the deck of cards and the hand.
  if (deckOfCards.length > 0) {
    deckOfCards.forEach(card => {
      $("#deckOfCards").append("<img class='card' src='images/" + card.value + card.suit +  ".png' alt='" +  card.value + " of " + card.suit + "'>");
    });
  }

  if (hand.length > 0) {
    hand.forEach(card => {
      $("#hand").append("<img class='card' src='images/" + card.value + card.suit +  ".png' alt='" +  card.value + " of " + card.suit + "'>");
    });
  }

}
