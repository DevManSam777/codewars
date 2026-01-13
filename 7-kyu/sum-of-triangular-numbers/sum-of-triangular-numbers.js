function sumTriangularNumbers(n) {
  if(n < 0) return 0;
​
  let sum = 0;
    
  for(let i = 0, j = 1; i < n; i++, j+= i + 1){
    sum += j;   
    console.log(sum) 
  }
​
  return sum
}
​