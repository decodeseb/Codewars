//Write a function that checks if a given string (case insensitive) is a palindrome.

//Parameters: x = string
//Return: true if x is a palindrome and false if it is not;
//Example: isPalindrome(house) -> false and isPalindrome(kayak) -> true
//Pseudo-code: compare the string as it is with its reversed clone. if they are equal, return true.

function isPalindrome(x) {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase(); // returns all truthy values only
  }