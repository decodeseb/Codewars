 /* 
  sort a list full of textbooks (strings) by subject, so he can study before the test.
 The sorting should NOT be case sensitive*/

 function sorter(textbooks) {
    //param: array of strings
    //return: array of strings in alphabetical order
    return textbooks.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0 );
  }

 /* In an array  */