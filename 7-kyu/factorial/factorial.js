function factorial(n){
    if (n === 0 || n === 1) {
        return 1
  } 
  
    if (n < 0 || n > 12) {
        throw new RangeError("Input must be 12 or less");
  }
    
  let factorialArray = Array.from({length: n + 1}, (_, i) => i );
// remove the 0 from the first index
    factorialArray.shift();
    console.log(factorialArray);
    return factorialArray.reduce((acc, current) => acc *= current, 1);
     
}