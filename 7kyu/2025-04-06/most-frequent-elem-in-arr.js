/* Description:

Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
Example

input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 

The most frequent number in the array is -1 and it occurs 5 times.
 */
function mostFrequentItemCount(collection) {
    let obj = {};
    let max=0;
    collection.forEach(elem => obj[elem] ? obj[elem]++ : obj[elem]=1);
    for(let key in obj){
      if(obj[key] > max){
        max = obj[key];
      }
    }
    return max;
}