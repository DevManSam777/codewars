         - i ++ 
            - if curr to the power of i is equal to n
            - push curr,i to acc
            - outside loop return acc
​
      5) if the length of the reduced array is greatr than 1 
         - return array
         - else return null
 */
  const squareRoot = Math.sqrt(n)
  if(n < 4) return null;
  if (Number.isInteger(squareRoot)){
   // console.log([squareRoot, 2])
    return [squareRoot, 2]
  }
//   console.log('Math.floor(squareroot)', Math.floor(squareRoot))
  let factors = []
  let i = 2;
​
  while(i <= Math.floor(squareRoot)){
    if(n % i === 0){
      factors.push(i)
    }
    i++;
  }
   console.log(factors)
​
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
​