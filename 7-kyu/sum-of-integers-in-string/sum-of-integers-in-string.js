function sumOfIntegersInString(s) {
  return s.split(/\D+/).reduce((acc,curr)=> acc + (+curr), 0)
}