//Finish the uefaEuro2016() function so it return string just like in the examples below:
//function uefaEuro2016(teams, scores){

//}

//uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
//uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
//uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

//Parameters: 1 array of strings and 1 array of numbers
//Pseudo-code: Use template literals to format the string to output;

function uefaEuro2016(teams, scores){
    if(scores[0] < scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
      } else if (scores[0] === scores[1]) {
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
      } else return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  
  }
  