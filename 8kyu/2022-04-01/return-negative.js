//In this simple assignment you are given a number and have to make it negative.
// If the number is already negative, keep it negative.

//Parameters: number, could be positive or negative already.
//Return: negative number
//Examples: makeNegative(1) => -1 or makeNegative(-5) => -5.
//PSeudo-code: Using a simple conditional statement, I return the number as is
//if it is already negative and reverse it with the minus operator if it is positive.

function makeNegative(num) {
    //we have to check to see if the number is already negative
   if (num <= 0) {
      return num;
    } else {
      return -num;
    }
  }

