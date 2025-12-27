function lowercaseCount(str){
   return !(/[a-z]/g).test(str) ? 0 : str.match(/[a-z]/g).length;
}
​