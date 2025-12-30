function bonusTime(salary, bonus) {
  let symbol = '\u00A3'
  return bonus ? `${symbol}${salary * 10}` : `${symbol}${salary}`
}