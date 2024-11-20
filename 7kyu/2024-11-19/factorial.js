/* Your task is to write function factorial. */

function factorial(n){
    //n => multiply that number by all integers below it until 1.
    if(n === 0){
      return 1;
    } else{
      let count =  n-1;
    
    while(count >= 1) {
      n = n * count;
      count -= 1; 
    }
    }
    return n;
  }