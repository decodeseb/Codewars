/* Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
Examples ( Input --> Output )

121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square
 */

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    // perfect square: n is integer and sq(n) is also integer
    // verify if sq is an integer. If it is, return next number that is a perfect square, if it isnt, return falsy
    
    
    if(Number.isInteger(sq) && Number.isInteger(Math.sqrt(sq))){
      let next = sq + 1;
      while(!Number.isInteger(Math.sqrt(next))){
        next++; 
      }
      return next;
    } else return -1;
  }

  //Better solution

  