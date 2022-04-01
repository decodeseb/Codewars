//Complete a function so that it reverses the string passed into it.

//Parameters: strings of any length.
//Return : The same string but with all the same characters reversed.
//Example: 'world'  =>  'dlrow' or 'word'   =>  'drow'
//Pseudocode: A string can be viewed as an array in JS. Therefore I will 
//parse through the string with a for loop. and storing each individual value
// in a new string. Each char will be store in the opposite order.

function solution(str){
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
    return reverseStr;
  }

