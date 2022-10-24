/* Switch/Case - Bug Fixing #6 */
//The cases did not have a break statement in them

function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': 
        result = value.a + value.b;
        break;
      case'-': 
        result = value.a - value.b;
        break;
      case'/': 
        result = value.a / value.b;
        break;
      case'*': 
        result = value.a * value.b;
        break;
      case'%': 
        result = value.a % value.b;
        break;
      case'^': 
        result = Math.pow(value.a, value.b);
        break;
    }
    return result;
  }