//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    //Parameters: array of string only.
    //Return: 1 string which includes the values of the array based on a certain condition.
    //Example: [] -->  "no one likes this"
    //Use switch statements, and return a specific string based on a the length of the array.
    
    switch(names.length) {
        case 0:
          return 'no one likes this';
          break;
        case 1:
          return `${names[0]} likes this`;
          break;
        case 2:
          return `${names[0]} and ${names[1]} like this`;
          break;
        case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`;
          break;  
        default:
          return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }
