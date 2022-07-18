//When provided with a letter, return its position in the alphabet.

//Parameter: a string with 1 character
//Return: A string starting with "Position of the alphabet:" + actual number of alphabet index
//Example: 'a' --> 1
//Pseudocode: using the UTF table, we know that the letters of the english alphabet start at number 97. Using the .charCodeAt() method.
//Transform the character in its code and substract 96 to find its position. Use a string literal return the formatted string.

function position(letter){
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
  }