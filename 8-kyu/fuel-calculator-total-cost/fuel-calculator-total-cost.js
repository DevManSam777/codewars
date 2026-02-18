function fuelPrice(litres, pricePerLitre) {
  const discount = Math.min(Math.floor(litres / 2) * 5, 25);
​
  return Number((litres * (pricePerLitre - discount / 100)).toFixed(2));
}