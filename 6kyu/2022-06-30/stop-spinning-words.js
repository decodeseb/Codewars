//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words
// reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
    //Parameters: a long string of different words with spaces unles its only one word.
    //Return: The same string, but with all words that are 5 letters or more, reversed.
    //Example: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
    //spinWords( "This is a test") => returns "This is a test"
    //Pseudo-code: I will create an array of strings, where each element will be a word.
    //Then I will parse through that array and use map to reverse the words that have a lenth of 5 or more characters.
    if (string.includes(' ') ) {
      let words = string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
      return words;
    } else if(string.length >= 5) {
      return string.split('').reverse().join('');
    } else return string;
    
  }
  
