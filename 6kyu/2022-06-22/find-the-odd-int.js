//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
    //Parameters: array of integers
    //Return: the integers in the array that appears an odd number of tim`es.
    //Example: [7] --> 7, [0, 1, 0, 2, 1, 2, 2] --> 2
    //Pseudo-code: sort the array in ascending order, go through each element and
    let result;
    const count = {}; //object will store each element of the array as the key and its number of occurences as its value.
    
    for(let num of arr) {
      if(count[num]) { //if this current element of the array already exists in our object, add 1 to its count.
        count[num] += 1; 
      } else { //if it does not exist in our object yet, assign 1 to it.
        count[num] = 1; // creates a property in the object, with the elemenet as the property name and its count as the value.
      }
    }
    
    for(let key in count) {
      if(count[key] % 2 !== 0) {
        result = +key;
      }
    }
      return result;
    }