/* Task

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Notes:

    Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
    Input >> Output Examples

minValue ({1, 3, 1})  ==> return (13)

Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , 

Without duplications : minValue({5, 7, 5, 9, 7})  ==> return (579)
 */

function minValue(values){
    //Eliminate duplicates in the array
    //could use a set
    let valuesSet = new Set(values);
    values = Array.from(valuesSet);
    //sort the values of array in ascending order
    values.sort((a,b) => a - b);
    
    //Return a number, not a string
    
    return Number(values.join(''));
  }