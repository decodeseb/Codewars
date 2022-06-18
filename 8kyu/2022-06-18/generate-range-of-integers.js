//Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. 
//The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)


//Parameters: min = integer, max = integer, step = integer. min < max, step > 0 & the range does not have to include max
//Return: an array containing the range from max to min, with an interval of 'step' between each element.
//Example: generateRange(2, 10, 2) // should return array of [2,4,6,8,10] and generateRange(1, 10, 3) // should return array of [1,4,7,10]
//Pseudo-code: We ca create an empty array. Then we use a for loop to populate the array as we move from min to max.
//Return: an array containing all integers between min and max inclusively, with an interval of 'step' in-between.

function generateRange(min, max, step){
    let arr = [];
    for(let i = min; i <= max; i += step) {
      arr.push(i);
    }
    return arr;
  }
