/* In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  [] */

let max1, max2;
  if(arr.length < 2){
    return arr
  } else {
    max1 = Math.max(...arr)
    arr = arr.map(num => num === max1 ? delete num : num)
    max2= Math.max(...arr)
    return [max1, max2]
  }