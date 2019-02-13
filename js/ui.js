$(document).ready(function() {
  updateUI();
});

function updateUI(){
  // Clear lists of cards
  $("#deckOfCards").html("<h2>Deck of Cards:</h2>");
  $("#hand").html("<h2>Hand:</h2>");

  // List each card from the deck of cards and the hand.
  $.each(deckOfCards, function(key, value){
    $("#deckOfCards").append(value.value + " of " + value.suit + "</br>");
  });

  $.each(hand, function(key, value){
    $("#hand").append(value.value + " of " + value.suit + "</br>");
  });
}
