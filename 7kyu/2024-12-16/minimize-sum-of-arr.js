/* Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task

Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes

    Array/list will contain positives only .
    Array/list will always have even size

Input >> Output Examples

minSum({5,4,2,3}) ==> return (22) 

Explanation:

    The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22 */


    function minSum(arr) {
        arr.sort((a, b) => a - b); 
        let list = [];
        for(let i=0; i < arr.length/2; i++){
          list.push(arr[i] * arr[arr.length - i - 1])
        }
        return list.reduce((acc, curr) => acc + curr, 0);
      }