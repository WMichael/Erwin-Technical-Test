$(document).ready(function() {

  // Update user interface on start
  updateUI();

  // Event listeners
  $("#shuffleBtn").on("click", function(){
    shuffleDeck();
    updateUI();
  });

  $("#sortDeckBtn").on("click", function(){
    sortCards(deckOfCards);
    updateUI();
  });

  $("#sortHandBtn").on("click", function(){
    sortCards(hand);
    updateUI();
  });

  $("#drawCardsBtn").on("click", function(){
    drawCards($("select#cardsToDraw").val(),false)
    updateUI();
  });

  $("#drawSortCardsBtn").on("click", function(){
    drawCards($("select#cardsToDraw").val(),true)
    updateUI();
  });

  $("#resetBtn").on("click", function(){
    setupDeck();
    updateUI();
  });

});


// Function clears the two lists of cards and then starts adding cards from the two arrays.
function updateUI(){
  // Clear lists of cards
  $("#deckOfCards").html("<h2>Deck of Cards (" + deckOfCards.length +"):</h2>");
  $("#hand").html("<h2>Hand (" + hand.length + "):</h2>");

  // List each card from the deck of cards and the hand.
  if (deckOfCards.length > 0) {
    $.each(deckOfCards, function(key, card){
      $("#deckOfCards").append("<img class='card' src='images/" + card.value + card.suit +  ".png' alt='" +  card.value + " of " + card.suit + "'>");
    });
  }

  if (hand.length > 0) {
    $.each(hand, function(key, card){
      $("#hand").append("<img class='card' src='images/" + card.value + card.suit +  ".png' alt='" +  card.value + " of " + card.suit + "'>");
    });
  }

}
