var suits = ["Clubs","Spades","Hearts","Diamonds"];
var values = ["Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King","Ace"];
var deckOfCards = new Array();
var hand = new Array();

function setupDeck() {
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

// Move cards from one array to another. Function takes in start and destination array, amount of cards
// and whether the drawn cards should be sorted or not.
// Cards are drawn from the start of the start array and added to the end of destination array.
function moveCards(startArr,destinationArr,amountOfCards,sort) {
  let drawnCards = new Array();
  for (var i = 0; i < amountOfCards; i++) {
    drawnCards.push(startArr.shift());
  }
  if (sort) {
    sortCards(drawnCards);
  }
  for (var i = 0; i < drawnCards.length; i++) {
    destinationArr.push(drawnCards[i]);
  }
}

// Prints list of cards in console.
function listCards(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + ": " + arr[i].suit + " " + arr[i].value);
  }
}

// Testing
setupDeck();
shuffleDeck();
moveCards(deckOfCards,hand,5,true);
console.log("Deck of Cards:");
listCards(deckOfCards);
console.log("Hand:");
listCards(hand);
