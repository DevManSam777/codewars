function tribonacci(signature,n){
  let arr = [...signature]
  console.log(arr)
  for(let i = 3; i < n; i++){
    arr.push(arr[i-1] + arr[i-2] + arr[i-3])
  }
  return n === 0 ? [] : n === 1 ? [arr[0]] : n === 2 ? [arr[0], arr[1]] : arr
}
​