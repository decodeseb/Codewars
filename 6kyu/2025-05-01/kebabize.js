/* Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

Notes:

    the returned string should only contain lowercase letters

 */

    function kebabize(str) {
        if(str){
          //each time you have an uppercase letter, transform it into lowerCase 
          //then add a dash before it.
          let answer = '';
          console.log(+'m')
          for(let i = 0 ; i< str.length; i++){
            if(!Number.isNaN(+str[i])){
              undefined;
            } else if(str[i] === str[i].toUpperCase()){
              i === 0 ? answer += str[i].toLowerCase() : answer += '-' + str[i].toLowerCase();
            } else answer += str[i];
          }
          return  answer;
        } else return '';
      }