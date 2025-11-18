function rentalCarCost(d) {
  // d is the number of days 
  // the rental car is $40 a day
  // if the number of days is 7 or more 
  // return (d * 40) - 50
  // else if days is 3 or more 
  // return (d * 40) - 20
  // else return d * 40
  
  return d >= 7 
    ? (d * 40) - 50 
  : d >= 3 
    ? (d * 40) - 20 
  : d * 40
}