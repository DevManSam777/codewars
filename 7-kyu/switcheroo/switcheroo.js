function switcheroo(x){
  return x.replace(/[ab]/g, (x) => x === 'a' ? 'b' : 'a')
}