/* Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
Examples

input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357

Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas". */

function sortMyString(S) {
    //param: string of characters 
    //return: string where char with even index are seperated from the char with odd by a space.
    //The even indexed group comes first.
    //example: "Codewars" --> "Cdwr oeas"
    //pseudo-code. creat two new seperate strings, one for even index
  let even = '';
  let odd = '';
  S.split('').forEach((elem, i) => i % 2 === 0 ? even += elem : odd += elem)  
  return `${even} ${odd}`;
}