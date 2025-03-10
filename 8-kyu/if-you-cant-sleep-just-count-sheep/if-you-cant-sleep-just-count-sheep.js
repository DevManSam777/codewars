var countSheep = function (num){
  // initialize an empty string variable
  let str = "";
  // for loop 
  for(let i = 1; i <= num; i++) { 
      str+= `${i} sheep...`; 
  }
  // retun the string variable
  return str;
}