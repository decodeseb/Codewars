function past(h, m, s){
    //#Happy Coding! ^_^
    //Excluding all the incorrect time values
    if (h < 0 || h > 24 || m < 0 || m > 59 || s < 0 || s >  59) { 
      return "invalid"
    } else { //converting the h, m & s into milliseconds
      s *= 1000; 
      m *= 60000;
      h *= 3600000;
      return h + m + s; // returning the sum after the conversion. Has to be a sum.
    }
  }