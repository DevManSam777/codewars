function presses(phrase) {
  phrase = phrase.toLowerCase();
  // convert to an array
  // initialize total variable set to 0
   let arr = phrase.split('')
   let total = 0;
  arr.forEach(char => {
    switch(true){
      case /[1adgjmptw\*\#\s]/.test(char):
        total++;
        break;
      case /[behknqux0]/.test(char):
        total+=2;
        break;
      case /[cfilorvy]/.test(char):
        total+=3;
        break;
      case /[sz2-68]/.test(char):
        total+=4
        break;
      case /[79]/.test(char):
        total+=5;
        break;
      default:
        char;
    } 
  }); return total
}