//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

//Parameters: 1 string, that could be empty, for which each character might be randomly uppercase or lowercase.
//Return: 'Hello, World!' if parameter is null or 'Hello, Name!'.
//Example: With `name` = "john"  => return "Hello, John!" 
//With `name` not given or `name` = "" => return "Hello, World!"
//Pseudo-code: using a conditional, I check if the parameter is null, if it is, I return the appropriate message, if it isnt I return
// the concatenated name with 'Hello   !'. The format of the name has to be (Xxxx).

function hello(name) {
    if (name) { // this checks if the name exists. If the variable is not empty or undefined.
      return 'Hello, ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!';
    } else {
      return 'Hello, World!'
    } 
  }

  //using the statement expression if(name == null) to check if the variable was not null was not working in JS for some reason. to explore later.