function bloodAlcoholContent(drinks, weight, sex, time){
    const r = sex === 'male' ? 0.73 : 0.66; 
    return +((drinks.ounces * drinks.abv * 5.14/weight * r) - 0.015 * time ).toFixed(4);
  }

  