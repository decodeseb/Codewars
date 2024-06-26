/* 
7 kyu
Alphabet war
32110393% of 2,2575,757 of 17,523dcieslak

    JavaScript
    Node v18.x

        VIM
        EMACS

Instructions
Output
Past Solutions
Introduction

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
Task

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1

The other letters don't have power and are only victims.
Example

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
 */

function alphabetWar(fight)
{
  const right = fight.split('').map((elem, i) => elem === 'm' ? 4 : elem === 'q' ? 3 : elem ==='d' ? 2 : elem === 'z' ? 1 : 0).reduce((acc, elem, i) => acc + elem)
  const left = fight.split('').map((elem, i) => elem === 'w' ? 4 : elem === 'p' ? 3 : elem === 'b' ? 2 : elem === 's' ? 1: 0).reduce((acc, elem, i) => acc + elem)
  console.log(right, left)
  if(right > left) {
    return "Right side wins!"
  }else if( left > right){
    return "Left side wins!"
  } else return "Let's fight again!";
}