function automorphic(n){
  return new RegExp(`${n}$`).test(''+n**2) ?'Automorphic':'Not!!'
}