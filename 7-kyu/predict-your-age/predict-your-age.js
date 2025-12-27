function predictAge(age1, ...x){
  let arr = [age1, ...x] 
  arr = arr.map(x => x*x).reduce((acc, curr) => acc + curr, 0)
  console.log(arr);
  arr = Math.floor(Math.sqrt(arr) / 2)
  console.log(arr);
  return arr;
}