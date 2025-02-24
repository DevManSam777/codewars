function descendingOrder(n){
  // get individual numbers by converting the value of n into a string, using toString 
    let num = n.toString()
  // split method to create an array of individual numbers
   .split("")
  // use sort method to arrange in descending order
   .sort((a,b) => b - a)
  // convert back into string using join method
   .join("");
  // return as number
   return Number(num);
}