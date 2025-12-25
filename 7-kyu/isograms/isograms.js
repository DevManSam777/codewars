function isIsogram(str){
  if (!str) {
    return true
  }
  let string = str.toLowerCase();
  for(const char of string){
        if(string.indexOf(char) != string.lastIndexOf(char)){
            return false
        } 
    } return true;
}