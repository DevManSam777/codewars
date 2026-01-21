function isPP(n){
  const squareRoot = Math.sqrt(n)
  if(n < 4) return null;
  if (Number.isInteger(squareRoot)){
    return [squareRoot, 2]
  }
  let factors = []
  let i = 2;
​
  while(i <= Math.floor(squareRoot)){
    if(n % i === 0){
      factors.push(i)
    }
    i++;
  }
   
let pows = factors.reduce((acc,curr) => {
      for(let i = 2; i <= n; i++){
         if(curr**i === n){
            acc.push(curr,i)
         }
      } return acc;
   }, [])
​
  if(pows.length > 1){
   return pows
  } else {
   return null;
  }
}