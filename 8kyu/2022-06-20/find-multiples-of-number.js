//In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit .
// If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, 
//not consisting of 0. The limit will always be higher than the base.


function findMultiples(integer, limit) {
  
    //Parameter: integer
    //Return: An array containing all multiples of 'integer' all the way up to the limit;
    //Example: (2, 6) => [2, 4, 6];
    //Pseudo-code: create an empty array, use a for loop to iterate over that array and after each iteration,
    //a new elem will be in the array. The loop will be initialized with the value of integer, and will increment at 
    //a rate corresponding to 'integer'.
    
    let arr = [];
    for(let i = integer; i <= limit; i += integer){
      arr.push(i);
    }
    return arr;
    
  }

