function tidyNumber(n){
   n = String(n);
   for(let i = 1; i < n.length; i++){
      if(n[i] < n[i - 1]){
         return false
      }
   } return true
}