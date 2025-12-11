function correct(string){ 
  return string.split('')
    .map(char => char === '1' ? 'I' : char === '5' ? 'S' : char === '0' ? 'O': char).join('')
}