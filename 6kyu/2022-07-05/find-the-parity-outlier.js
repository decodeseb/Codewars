//You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    //Parameters: Array of at least 3 elements, containing only integers.
       //The integers will either be all odd of all even, with 1 exception.
    //Return: The only number in the array that is unique (not even or odd).
    //Example: [2, 4, 0, 100, 4, 11, 2602, 36] --> return 11 (the only odd number).
    //Pseudo-code: filter for odd numbers, filter for uneven numbers and return the only array with a length of 1.
    
    const oddNums = integers.filter(num => num % 2 !== 0);
    const evenNums = integers.filter(num => num % 2 === 0);
    
    return oddNums.length === 1 ? oddNums[0] : evenNums[0]; 
  }
  