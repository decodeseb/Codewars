//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

//Example: ('3♣') -> return 'clubs'
//('3♦') -> return 'diamonds'
//('3♠') -> return 'spades'


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