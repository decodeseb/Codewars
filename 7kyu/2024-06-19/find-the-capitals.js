/*  
Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/

var capitals = function (word) {
// param: non-empty string of uppercase and lowercase letters 
  //return : array of numbers representing the indexes of each capital letter
  // example: "wOrD" --> [1, 3]
  // pseudo: loop/traverse the string and identify each uppercase letter. When found, add the index of elem in the array.
  let arrI = [];
  arrI = word.split('').map((elem, i) => elem === elem.toUpperCase() ? i : undefined).filter((elem) => elem !== undefined)
  return arrI;
};