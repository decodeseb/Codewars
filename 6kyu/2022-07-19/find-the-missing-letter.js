//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

//You will always get an valid array. And it will be always exactly one letter be missing. 
//The length of the array will always be at least 2.
//The array will always contain letters in only one case.

//Parameters: an array of string characters
//Return: the character that is missing form the consecutive sequence of alphabetic letters.
//Example:  ['a','b','c','d','f'] -> 'e'  ['O','Q','R','S'] -> 'P'
//Pseudocode: Using a for loop, loop through the array and transform each element into its UTF char decimal number. Then we substract 
//The current element's number position with the previous element's position, if the difference is 2, generate a string from the code of the
//current element minus 1.          

function findMissingLetter(array) {
    for(let i = 1; i < array.length; i++) {
      if((array[i].charCodeAt(0) - array[i - 1].charCodeAt(0)) === 2 ) {
        return String.fromCharCode(array[i].charCodeAt(0) - 1)
      }
    }
    
  }
  