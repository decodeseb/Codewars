//Given the a list of numbers, return a fixed list so that the values increment by 1 for each index 
//from the minimum value up to the maximum value (both included).

//Parameters: array of numbers ordered from min to max.
//Return: an array where each element is greater than the previous one by one, from min to max inclusively.
//Example: [1, 3, 5, 6, 7, 8] -> [1, 2, 3, 4, 5, 6, 7, 8]
//

function pipeFix(numbers) {
    let arr = [];
    for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
      arr.push(i);
    }
    return arr;
  }
