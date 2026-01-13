function numberToPower(number, power){
   return (number + ',')
     .toString()
     .repeat(power)
     .split(',')
     .slice(0, -1)
     .map(val => Number(val))
     .reduce((acc,curr)=> acc * curr, 1)
}