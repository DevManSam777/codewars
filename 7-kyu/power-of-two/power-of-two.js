function isPowerOfTwo(n){
  if(n<1)return false
​
  let arr = [];
  let i = 1
  let val = 0
  while (val < n){
    val = 2**i
    arr.push(val)
    i++
  }
  return n === 1 || arr.includes(n)
}