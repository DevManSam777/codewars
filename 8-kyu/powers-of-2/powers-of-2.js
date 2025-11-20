function powersOfTwo(n){
 let array = [];
​
  for(let i = n; i >= 0; i--){
  array.unshift(Math.pow(2,n))
  n--;
  } return array;
}
​