function last(x){
  return  x.split(' ').map(word=> word.split('').reverse().join('')).sort((a,b)=> a[0].localeCompare(b[0])).map(word=> word.split('').reverse().join(''))
}
​