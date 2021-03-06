// Arrays for holding the order of the suits and values.
var suits = ["clubs","spades","hearts","diamonds"];
var values = ["two","three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"];

// Deck of cards and hand array.
var deckOfCards = new Array();
var hand = new Array();


// Main functions used to manipulate the card arrays and card objects.
function setupDeck() {
  deckOfCards = [];
  hand = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      deckOfCards.push(new Card(suits[i],values[j]))
    }
  }
}

// Randomly shuffles the deck of cards.
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
  if (amountOfCards <= deckOfCards.length) {
    for (var i = 0; i < amountOfCards; i++) {
      hand.push(deckOfCards.shift());
    }
    if (sort) {
      sortCards(hand);
    }
  }
}

// Prints list of cards in console.
function listCards(arr) {
  for (i in arr) {
    console.log(i + ": " + arr[i].value + " of " + arr[i].suit);
  }
}

// Deck of Cards is set up at the start.
setupDeck();
listCards(deckOfCards);
