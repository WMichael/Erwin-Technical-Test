$(document).ready(function() {
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
    moveCards(deckOfCards,hand, $("select#cardsToDraw").val(),false)
    updateUI();
  });

  $("#drawSortCardsBtn").on("click", function(){
    moveCards(deckOfCards,hand, $("select#cardsToDraw").val(),true)
    updateUI();
  });

  $("#resetBtn").on("click", function(){
    setupDeck();
    updateUI();
  });

});

function updateUI(){
  // Clear lists of cards
  $("#deckOfCards").html("<h2>Deck of Cards:</h2>");
  $("#hand").html("<h2>Hand:</h2>");

  // List each card from the deck of cards and the hand.
  if (deckOfCards.length > 0) {
    $.each(deckOfCards, function(key, value){
      $("#deckOfCards").append((key + 1) + ": " + value.value + " of " + value.suit + "</br>");
    });
  }

  if (hand.length > 0) {
    $.each(hand, function(key, value){
      $("#hand").append((key + 1) + ": " + value.value + " of " + value.suit + "</br>");
    });
  }

}
