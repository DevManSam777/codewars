function capitalize(string, indices) {
    
  const stringIndices = string.length - 1
  console.log(stringIndices)   
  
  let arr = string.split('')
  console.log(arr)
  
  
  indices.filter(i => i <= stringIndices).forEach(i=> arr.splice(i, 1, arr[i].toUpperCase()))
  return arr.join('')
}