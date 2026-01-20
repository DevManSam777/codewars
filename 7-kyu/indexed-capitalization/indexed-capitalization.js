function capitalize(string, indices) {
  const stringIndices = string.length - 1
  const arr = string.split('')
  indices.filter(i => i <= stringIndices)
    .forEach(i=> arr.splice(i, 1, arr[i].toUpperCase()))
  return arr.join('')
}