function sumOfIntegersInString(s) {
  return s.split(/[^\d]+/).reduce((acc,curr)=> acc + Number(curr), 0)
}