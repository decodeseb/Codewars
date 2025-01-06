/* The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.  */

function solve(s){
    let vowels = [];
    let sub='';
    //find subtrings
    for(let i=0; i<s.length; i++){
      if('aeiou'.includes(s[i])){
        sub+= s[i];
      } else {
        if(sub){
          vowels.push(sub);
          sub = '';
        }
      }
    }
    return Math.max(...vowels.map(elem => elem.length));
  }