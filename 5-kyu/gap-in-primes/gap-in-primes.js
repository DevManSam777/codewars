function gap(g, m, n) {
    
  function checkPrime(num){
    if(num === 2) {return true}
    if(num % 2 === 0) {return false}
        for(let i = 2; i <= parseInt(Math.sqrt(num)); i++){
           if(num % i === 0){
            return false
          } 
        } return true;
      }
​
   let prevPrime = null;
   for(let i = m; i <= n; i++){
      if(checkPrime(i)){
         if(prevPrime !== null && i - prevPrime === g){
            return [prevPrime, i];
         }
         prevPrime = i;
      }
   }
   return null;
}
​