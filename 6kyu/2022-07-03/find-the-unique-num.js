//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//It’s guaranteed that array contains at least 3 numbers.
//The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    //Parameters: Array of numbers
    //Return : a number, uniue in the array
    //Example: findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    //findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
    //Pseudo-code: Loop through the array and return the value that is different from the previous one.
    return Number( arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)) );
    }
    