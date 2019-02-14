var suits = ["clubs","spades","hearts","diamonds"];
var values = ["two","three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"];
var deckOfCards = new Array();
var hand = new Array();

function setupDeck() {
  deckOfCards = [];
  hand = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      deckOfCards.push(new Card(suits[i],values[j]))
    }
  }
}

// Array shuffle could be improved.
function shuffleDeck() {
  deckOfCards.sort(function(a,b){
    return 0.5 - Math.random()
  });
}

// Sort by suit and value with Ace as high.
function sortCards(arr) {
  arr.sort(function(a,b){
    // If both cards have the same suit
    if (suits.indexOf(a.suit) == suits.indexOf(b.suit)) {
      // If Card A has a lower value than Card B
      // Return Card A, else return Card B
      if (values.indexOf(a.value) < values.indexOf(b.value)) {
        return -1;
      }
      else {
        return 1;
      }
    }

    // Else if Card A has a lower suit than Card B
    // Return Card A, else return Card B
    else if (suits.indexOf(a.suit) < suits.indexOf(b.suit)) {
      return -1;
    }
    else {
      return 1;
    }
  });
}

// Draw cards function takes in the amount of cards to be drawn
// and whether the drawn cards should be sorted or not.
// Cards are drawn from the start of the deck of cards and are added to the end of hand.
function drawCards(amountOfCards,sort) {
  let drawnCards = new Array();
  if (amountOfCards <= deckOfCards.length) {
    for (var i = 0; i < amountOfCards; i++) {
      drawnCards.push(deckOfCards.shift());
    }

    for (var i = 0; i < drawnCards.length; i++) {
      hand.push(drawnCards[i]);
    }

    if (sort) {
      sortCards(hand);
    }
  }

}

// Prints list of cards in console.
function listCards(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + ": " + arr[i].suit + " " + arr[i].value);
  }
}
