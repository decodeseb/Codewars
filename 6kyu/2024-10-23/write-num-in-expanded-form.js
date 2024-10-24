/* Description:
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 2"
70304 --> "70000 + 300 + 4"

NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
    //
    let str = [];
    num = num.toString().split(''); //string to array
    for(let i = 0; i < num.length; i++){
      if(num[i] != 0){
        let zeros = num.length - (i + 1);
        str.push(+num[i] * (10**zeros));
        console.log(num.length - i+1) 
      }
  }
    return str.join(' + ')
  }