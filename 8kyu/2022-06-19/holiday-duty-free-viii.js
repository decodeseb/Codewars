//The purpose of this kata is to work out just how many bottles of duty free whiskey
//you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
//For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. 
//If your holiday cost £500, the answer you should return would be 500.
//All inputs will be integers. Please return an integer. Round down.

//Parameters: normPrice: high street price --> discount: duty-free discount --> hol : cost of holiday
//Return: an integer representing the amount of bottles necessary to cover the cost of holiday after the discount has been applied.
//Pseudo-code: first, we find out how much each bottle saves after the discount has been applied to the normal price. Then we divie the cost of the
//holiday by the price saved per bottle
function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * discount/100));
  }