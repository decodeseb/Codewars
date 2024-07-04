/* There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
 */

var number = function(busStops){
  //param: array with a subarray. Each element of the sub-array is a pair of integers > 0. 
  //[subarr1;, subarr2] ---> subarr1 = # of ppl entering, subarr2 = #of ppl leaving
  //return: The number of people left at the end of the array.
  //example: [ [5, 0], [5, 0], [1, 5]] --> 0
  //pseudo: I will use 2 reduce methods to calculate the accumulated value over the both arrays, but I will add a
  //minus to one of the elem.
  return busStops.reduce((acc, elem, i) => acc += elem[0] - elem[1], 0 );
}