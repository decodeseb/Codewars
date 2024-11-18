/* Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
Arrays
Sorting
Fundamentals */

function isSortedAndHow(array) {
    let test = [...array];
    if(test.sort((a, b) => a - b).every((elem, i) => elem === array[i]))
      return 'yes, ascending'
    else if(test.sort((a, b) => b - a).every((elem, i)=> elem === array[i]))
      return 'yes, descending';
    else return 'no';
  };