describe('Deck of Cards', function() {

  // Reset deck so all 52 cards are back in the deck of cards.
  beforeEach(function(){
    setupDeck();
  });

  describe("Suits and Values Array", function() {
    it("Suits should return an array", function() {
      chai.assert.isArray(suits);
    });
    it("Suits should be of length 4", function() {
      chai.assert.lengthOf(suits, 4);
    });
    it("Suits should include Clubs, Spades, Hearts and Diamonds", function() {
      chai.assert.include(suits, "clubs");
      chai.assert.include(suits, "spades");
      chai.assert.include(suits, "hearts");
      chai.assert.include(suits, "diamonds");
    });
    it("Values should return an array", function() {
      chai.assert.isArray(values);
    });
    it("Values should be of length 13", function() {
      chai.assert.lengthOf(values, 13);
    });
    it("Values should contain Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten,Jack,Queen,King and Ace", function() {
      chai.assert.include(values, "two");
      chai.assert.include(values, "three");
      chai.assert.include(values, "four");
      chai.assert.include(values, "five");
      chai.assert.include(values, "six");
      chai.assert.include(values, "seven");
      chai.assert.include(values, "eight");
      chai.assert.include(values, "nine");
      chai.assert.include(values, "ten");
      chai.assert.include(values, "jack");
      chai.assert.include(values, "queen");
      chai.assert.include(values, "king");
      chai.assert.include(values, "ace");
    });
  });

  describe('#setupDeck()', function() {
    it("DeckOfCards should return an array",function(){
      chai.assert.isArray(deckOfCards);
    });
    it("DeckOfCards should initially contain 52 cards",function() {
      chai.assert.lengthOf(deckOfCards,52);
    });
    it("DeckOfCards should initially be sorted. Sorted cards are sorted by suit: Clubs, Spades, Hearts, Diamonds; then by value: Ace is high.", function(){
      let i = 0;
      // Check through each card in deck, making sure it matches the correct suit and value for it's position.
      for (var s = 0; s < suits.length; s++) {
        for (var v = 0; v < values.length; v++) {
          chai.assert.equal(deckOfCards[i].suit, suits[s]);
          chai.assert.equal(deckOfCards[i].value, values[v]);
          i++;
        }
      }
    });
    it("Hand should return an array",function(){
      chai.assert.isArray(hand);
    });
    it("Hand should initially be empty",function() {
      chai.assert.isEmpty(hand);
    });

  });

  describe('#shuffleDeck()', function() {
    it("ShuffleDeck() should return deckOfCards as an unordered array of cards",function() {
      shuffleDeck();
      // Initially boolean set to false, if one of the first 13 cards values is not in order then the unordered boolean is set to true.
      let unordered = false;
      for (var i = 0; i < 13; i++) {
        if (deckOfCards[i].value != values[i]) {
          unordered = true;
        }
      }
      chai.assert.isTrue(unordered);
    });
  });

  describe('#sortCards()', function() {
    it("After sorting a shuffled deck the deckOfCards should be sorted again", function() {
      shuffleDeck();
      sortCards(deckOfCards);
      let i = 0;
      // Check through each card in deck, making sure it matches the correct suit and value for it's position.
      for (var s = 0; s < suits.length; s++) {
        for (var v = 0; v < values.length; v++) {
          chai.assert.equal(deckOfCards[i].suit, suits[s]);
          chai.assert.equal(deckOfCards[i].value, values[v]);
          i++;
        }
      }
    });
  });

  describe('#drawCards()', function() {

    it("deckOfCards should be length of 47 after 5 cards are drawn", function(){
      drawCards(5,false);
      chai.assert.lengthOf(deckOfCards,47);
    });

    it("Hand should be length of 5 after 5 cards are drawn", function() {
      drawCards(5,false);
      chai.assert.lengthOf(hand,5);
    });

    it("Drawing 10 cards should take the first 10 cards from the start of deckOfCards", function() {
      shuffleDeck();
      let firstTenArr = deckOfCards.slice(0,10);
      drawCards(10,false);
      for (var i = 0; i < firstTenArr.length; i++) {
        console.log(firstTenArr[i].value);
        console.log(deckOfCards[i].value);
      }
      chai.assert.sameOrderedMembers(firstTenArr,hand.slice(0,10));
    });


    it("If length of deckOfcards is 10 then drawing 20 cards isn't possible",function() {
      drawCards(42,false);
      let initialLengthOfDeckOfCards = deckOfCards.length;
      drawCards(20,false);
      chai.assert.equal(initialLengthOfDeckOfCards,deckOfCards.length);
    });

  });
});
