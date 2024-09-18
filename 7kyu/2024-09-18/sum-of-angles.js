/* Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2. */


function angle(n) {
    // n > 2
    
    let sumAngles = 0; 
    
    for(let i = 3; i <= n; i++){
      sumAngles += 180;
    }
    return sumAngles;
  }