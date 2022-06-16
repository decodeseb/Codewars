// Create a function that takes a list (aray)  of non-negative integers and strings and returns a new list with the strings filtered out.



//Parameters : array that include integers and strings

//Return: array containing only integers

//Example :  Passing this ([1,2,'a','b']) to the function should return [1,2]

//Pseudocode: I want a function that deletes all strings from a given 
//array of intergers and strings. or copies all integers into a new array.

function filter_list(l) {
    return l.filter(elem => typeof elem === 'number');
}
