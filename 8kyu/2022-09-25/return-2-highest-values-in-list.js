/* In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  [] */



//Orinial solution
/* let max1, max2;
  if(arr.length < 2){
    return arr
  } else {
    max1 = Math.max(...arr)
    arr = arr.map(num => num === max1 ? delete num : num)
    max2= Math.max(...arr)
    return [max1, max2]
  }
 */




  //Refactoring: Using a Set is much more eficient and D.R.Y. than my previous code. The set filters out non-unique
  //values and we can then place them in another array in order to sort and find the first 2 values.

  function twoHighest(arr) {
    arr = [...new Set(arr)];
    return arr.sort((a, b) => b - a).slice(0, 2)
  }