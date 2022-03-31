//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_odd(number) {
    if(typeof number === 'number') { //cchecks to see if it is a number
        return number % 2 === 0 ? 'Even' : 'Odd'; //ternary operator
    } else return 'Please enter a number';
}