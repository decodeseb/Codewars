/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
 */


function gimme (triplet) {
    //param: an array of numbers where a < b < c
    //return: the index position of b
    //example: [2 , 1, 3] --> 0
    //pseudo: 1. identify number in the middle. 2;. return its index in the original array. 
    
    //find middle
    let sorted = triplet.slice().sort((a, b) => a - b);
    return triplet.findIndex(elem => elem === sorted[1]);
  }