function last(str){
  return str.split(' ')
    .sort((a,b)=> a.codePointAt(a.length - 1) - b.codePointAt(b.length - 1))
}
​