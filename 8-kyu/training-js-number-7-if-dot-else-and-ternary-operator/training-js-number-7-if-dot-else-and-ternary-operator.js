function saleHotdogs(n){
  // if less than 5 hotdogs
   return  n < 5 
  // price is 100 per unit
      ? n * 100 
  // else if 5 or more and less than 10
      : n >= 5 && n < 10
  // price is 95 per unit
      ? n * 95
  // else 10 or more price per unit is 90
      : n * 90
}