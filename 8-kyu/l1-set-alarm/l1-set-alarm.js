function setAlarm(employed, vacation){
  // only return true if employed AND not on vacation
  // every other condition should return false
  return employed && !vacation ? true : false
}