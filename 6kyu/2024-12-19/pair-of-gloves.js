/* Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
Examples:

input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)

 */

function numberOfPairs(gloves){
    const pairs = {};
    let answer = 0;
    
    for(let i = 0; i < gloves.length; i++){
      if(pairs[gloves[i]])
        pairs[gloves[i]]++;
      else pairs[gloves[i]] = 1;
    };
    
    for(let key in pairs){
      if(pairs[key] % 2 == 0)
        answer += pairs[key]/2
      else answer += (pairs[key] - 1)/2;
    }
    
    return answer;
  
  }