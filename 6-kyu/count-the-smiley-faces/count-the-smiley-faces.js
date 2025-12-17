//return the total number of smiling faces in the array
function countSmileys(arr) {
  let smiley = 0;
//   let regex = /^(:|;)(-*|~*)(\)|D)/
  let regex = /^(:|;)(-{0,1}|~{0,1})(\)|D)/
  for(let i = 0; i < arr.length; i++){
    if (regex.test(arr[i])){
      smiley++
    }
  }
  return smiley;
}