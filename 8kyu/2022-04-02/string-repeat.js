//Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.

//Parameters: n, an integer and s, a given string of any length.
//Return: A new string with s repeated exactly n times.
//Example: n = 6, s = "I" -> "IIIIII"
//Example: n = 5, s = "Hello" -> "HelloHelloHelloHelloHello"
//Pseudocode: I will create a for loop that repeats itself n times
//at each iteration I will concatenate the s string to another created string.

function repeatStr (n, s) {
  
    let repeatedString = '';
    for (let i = 1; i <= n; i++) {
     repeatedString += s; //at each iteration of the loop I concatenate the original string into a new string.
    }
    //the return statement needs to be outside of the loop, 
    //because we want to return the string after ALL of the concatenations have happened in the loop.
    return repeatedString;
  }
