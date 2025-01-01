/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

 */

function cleanString(s) {
    let correct = [];
    for(let i =0; i < s.length; i++){
      s[i] === '#' ? correct.pop() : correct.push(s[i]);
    }
    return correct.join('');
  }