/* Description:

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Examples:

divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"

 */

function divisors(n){
    // 15 --> [3, 5]
    // 13 --> "13 is prime"
    let divs = [];
    for(let i=n-1; i > 1; i--){
      if(n % i === 0)
       divs.unshift(i) 
    }
    return divs.length === 0 ? `${n} is prime` : divs; 
  }