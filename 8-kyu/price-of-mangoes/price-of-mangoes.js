function mango(quantity, price){
  // divide the total quantity by 3 to get the number of free mangoes 
  // use Math.floor to round down to nearest integer since we can only get free mangoes in complete sets of three.  Can't have .33 of a mango, etc.
  let free = Math.floor(quantity / 3);
  // subtract the free mangoes from the quantity to see how many are not free
  let mangoesCharged = quantity - free;
  // multiply the not free mangoes by the price to get the final price
  return mangoesCharged * price; 
}