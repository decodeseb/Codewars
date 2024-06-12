/* Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
Examples
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"

Notes
The two strings will be the same length. */

function neutralise(s1, s2) {
    //param: 2 strings, of equal length which contain operators only
    // return: a string which contains at each index the result of the comparison of the operators of the original 2 strings at the same index.
    //example: "+-+-", "-+-+" --> "0000"
    //pseudo: 
    let result = [];
    s1.split('').forEach((elem, i) => s1[i] === s2[i] ? result.push(s1[i]) : result.push("0"))
    return result.join("")
  }