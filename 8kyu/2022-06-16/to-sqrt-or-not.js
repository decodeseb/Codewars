//Write a method, that will get an integer array as parameter and will process every number from this array.
//Return a new array with processing every number of the input-array like this:
//If the number has an integer square root, take this, otherwise square the number.


//Parameters : An array of non-negative integers that is never empty.

//Return : An arry of integers which each respect this rule : If the number of the original array has an integer square root
//take it, otherwise square the number.

//Example: [4,3,9,7,2,1] -> [2,9,3,49,4,1]

//Pseudocode: We use the map method in the array to generate a new array for which each of
//its elements are the result of the rule mentioned above.

function squareOrSquareRoot(array) {
    return array.map(num => Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num * num);
  }