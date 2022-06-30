//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines 
//whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
    //Parameters: a string of any letter case
    //Return: true if the string is an isogram and false if the string isnt.
    //Example: "Dermatoglyphics" --> true
                //"moOse" --> false (ignore letter case)
    //Pseudo-code: I iterate over the array, using both the indexOf() and lastIndexOf() methods, if they are both the same
    //then the element is unique.
    if(str == '') {
      return true
    } else {
      let repeatedLetters = str.toLowerCase().split('').filter( (x, i ,str) => str.indexOf(x) !== str.lastIndexOf(x));
      console.log(repeatedLetters);
      return repeatedLetters.length === 0 ? true : false;
    }
  }

  //this could be improved with more efficient code using Sets. To be reviewed.
