/* Task */
/* Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value. */

/* "flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself. */

/* Examples:  */
/* ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True] */

/* Solution */

function flickSwitch(arr){
    let flick = true; 
    let boolArr = arr.map((elem) => elem === 'flick' ? flick = !flick : flick)
    return boolArr;
  }

  /* The key to solving that problem is having a state variable called flick that checks is true by default 
  and that changes everytime a switch is found in the array/ */