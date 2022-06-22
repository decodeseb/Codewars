//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
//Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){
    //Parameters: a given number, integer, might be negative.
    //Return : The sum of all multiples of 3 and 5 below that number.
    //Example: 10 --> 23, if a num is multiple of 3 AND 5, only count it once. 
    //Pseudocode : Use a for loop to test each number below what is given to us. Apply the rule to 
    // each instance of a number.
    let arr = [];
    
    if(number < 0){
      return 0;
    }
    
    for(let i = 0; i < number; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        arr.push(i);
      } else if (i % 3 === 0 || i % 5 === 0) {
        arr.push(i);
      }
    }
    
    if(arr) {
      return arr.reduce( (acc, elem) => acc += elem, 0);
    }

    
    
  }