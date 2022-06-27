//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

//Parameters: A string containing a the number and the symbol matching a card from a deck of cards.
//Return: a string with the name of the suit of the card.
//Example: ('3♣') -> return 'clubs'
//('3♠') -> return 'spades'
//Pseudo-code: Check to see if each of the 4 suits exist in the string provided, then return the name of the suit as a string.

function defineSuit(card) {
    if (card.indexOf('♣') > -1 ) {
      return 'clubs';
    } else if (card.indexOf('♦') > -1) {
      return 'diamonds';
    } else if (card.indexOf('♥') > -1) {
      return 'hearts';
    } else if (card.indexOf('♠') >-1) {
      return 'spades';
    }
  }