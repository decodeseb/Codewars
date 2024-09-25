/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

 */


var number=function(array){
  //input: array of strings
  //output: same array of strings but each string is prepended by its numerical order (represents a line)
  //pseudocode: create a new array and create an iteration that pushes each elem of the og array into a new one but by
  //adding a number to it.
  
  let newArr = []
  
  for(let i =0 ; i < array.length; i++) {
    newArr.push(`${i + 1}: ${array[i]}` )
  }
  
  return newArr;
}