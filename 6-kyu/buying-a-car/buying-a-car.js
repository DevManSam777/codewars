function nbMonths(startPriceOld, startPriceNew, savingsPerMonth, percentLossByMonth){
  if(startPriceOld >= startPriceNew) return [0, startPriceOld - startPriceNew];
​
  let oldCar = startPriceOld
  let newCar = startPriceNew
  let savings = 0
  let percentLoss = percentLossByMonth;
  let months = 0
​
  while((oldCar + savings) < newCar){
    months++;
    
    if(months % 2 === 0){
      percentLoss += 0.5;
    }
    
    savings += savingsPerMonth;
    
    oldCar = oldCar * (100 - percentLoss) / 100;
    newCar = newCar * (100 - percentLoss) / 100;
  }
​
  return [months, Math.round((oldCar + savings - newCar))]
}
​
console.log(nbMonths(2000, 8000, 1000, 1.5)) // [6, 766]