function feast(beast, dish) {
  let bFirstLast = beast[0] + beast[beast.length -1];
  let dishFirstLast = dish[0] + dish[dish.length - 1];
  
  return bFirstLast === dishFirstLast
}