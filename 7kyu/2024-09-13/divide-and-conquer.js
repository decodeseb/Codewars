/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
 */

function divCon(x){
    // [3, 5, '7', 9, '3']
    // ['', 7, 0, '0']
    let numTotal = x.filter(elem => typeof elem === 'number').reduce((acc, curr) => acc + curr, 0)
    let strTotal = x.filter(elem => typeof elem === 'string').map(elem => +elem).reduce((acc, curr) => acc + curr, 0)
    return numTotal - strTotal;
    
  }