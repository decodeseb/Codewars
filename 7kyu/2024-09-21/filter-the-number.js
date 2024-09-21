/*  Task

Your task is to return a number from a string.
Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.*/


var filterString = function(value) {
    //string comprised of numbers and letters
    //return: all the numbers in the same order they appear(type = number)
    let nums = value.split('').filter(elem => !isNaN(parseInt(elem))).join('')
    return parseInt(nums);
  }

/* Other solution */
var FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
  }