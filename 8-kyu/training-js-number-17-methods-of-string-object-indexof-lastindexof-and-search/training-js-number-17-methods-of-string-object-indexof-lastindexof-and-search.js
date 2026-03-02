function firstToLast(str,c){
  return str.indexOf(c) === -1 ? -1 
: str.indexOf(c) === str.lastIndexOf(c) ? 0
: str.lastIndexOf(c) - str.indexOf(c)
}