/* You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291 */

function uniTotal (string) {
    let score = 0;
    
    string.split('').forEach((elem, index) => score += elem.charCodeAt(0))
    
    return score;
  }
  