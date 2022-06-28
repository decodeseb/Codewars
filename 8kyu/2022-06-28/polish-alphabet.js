//Your task is to change the letters with diacritics: 
//ą -> a,
//ć -> c,
//ę -> e,
//ł -> l,
//ń -> n,
//ó -> o,
//ś -> s,
//ź -> z,
//ż -> z

//and print out the string without the use of the Polish letters.



//Parameters: String containing certain letters of the polish alphabet
//Return: A new string with the same words but with all the letters of the polish alphabet replaced with their corresponding enlish letters.
//Example: "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
//Pseudo-code: Use the replace method repetitively to replace each character with their english counter part.


function correctPolishLetters (string) {
    return string.replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e').replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z');
 }
 