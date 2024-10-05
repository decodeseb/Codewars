/* Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
 */


function findLongest(array){
    let arrLength = array.map(elem => (elem + '').length);
    return array.find((elem, i) => i === arrLength.indexOf(Math.max(...arrLength)) )
   }

//optimal solution
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);


//the reduce method alllows us to iterate over an array by calling a function on each of the array's element and storing the return value of that 
//function in a variable called the acucmulator after each call. 

//in the most optimaql solution, the reduce method uses a function that 1. converts each element into a string, 2. finds the length of the current converted element
//3. compares it with the length of the accumulator value. 4. keeps the length of what is the longest 5. returns the longest.