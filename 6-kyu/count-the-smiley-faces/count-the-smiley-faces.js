//return the total number of smiling faces in the array
function countSmileys(arr) {
  let regex = /^(:|;)(-|~)?(\)|D)/
  return arr.reduce((acc,current) => acc + regex.test(current), 0)
}