
// Entity function declarations (Card, Deck, Player)

function Card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function Deck() {
	this.cards = [];
}

function Player(name) {
	this.name = name;
	this.hand = [];
}


// Deck prototype functions

Deck.prototype.makeDeck = function() {

	var names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	var suits = ['Hearts','Diamonds','Spades','Clubs'];
    
    for( var s = 0; s < suits.length; s++ ) {
        for( var n = 0; n < names.length; n++ ) {
            this.cards.push( new Card( n+1, names[n], suits[s] ) );
        }
    }
    return this;
}

// n is how many times you want to shuffle.

Deck.prototype.shuffle = function(n) {  
	var i, n, j, temp;
    for (i = 0; i < n; i++) {
        for (j = 0; j < this.cards.length; j++) {
            k = Math.floor(Math.random() * this.cards.length);
            temp = this.cards[j];
            this.cards[j] = this.cards[k];
            this.cards[k] = temp;
        }
    }
    return this;
}  

Deck.prototype.reset = function() {
	this.makeDeck();
	return this;
}

Deck.prototype.deal = function() {
	if (this.cards.length > 0) {
        return this.cards.shift();
    }
    else {
    	return null;
    }
}


// Player prototype functions

Player.prototype.takeCard = function(deck) {
	this.hand.push(deck.deal());
	return this;
}

Player.prototype.discardCard = function(deck) {
	deck.cards.push(this.hand.shift());
	return this;
}  // discards card at the top of the player's stack


// Gameplay code

var deck = new Deck();
var justin = new Player("Justin");

deck.makeDeck().shuffle(1);

console.log(deck.cards.length); // total of 52 cards

justin.takeCard(deck).takeCard(deck);

console.log(justin.hand); // two cards taken
console.log(deck.cards.length); // 50 cards on the deck

justin.discardCard(deck);

console.log(justin.hand); // one card left
console.log(deck.cards.length); // 51 cards on the deck

