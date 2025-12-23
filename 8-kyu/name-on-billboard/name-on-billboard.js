function billboard(name, price = 30){
  // can not use mutiplication operator
  let total = 0;
  for(const char of name){
    total += price;
  }return total
} 