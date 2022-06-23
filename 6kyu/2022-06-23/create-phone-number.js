//Write a function that accepts an array of 10 integers (between 0 and 9), that returns 
//a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  
    //Parameters: array of positive integers, with a length of 10 elements.
    //Return: A string including all 10 integers but formatted this way (xxx) xxx-xxxx
    //Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    //Pseudocode: loop though the array and create a template string with the format we want. 
    //Each element of the array is gonig to be placed in the original template string. 
    let formated = '(xxx) xxx-xxxx';
    
    for(let i = 0; i < numbers.length; i++) {
      
     formated = formated.replace('x', numbers[i]);
      
    }
    return formated;
  }