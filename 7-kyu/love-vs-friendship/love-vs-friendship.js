​
function wordsToMarks(string){
  let array = string.split('')
  let alphaArray = []
  for(let i = 97; i <= 122; i++){
    alphaArray.push(String.fromCharCode(i))
  }
  console.log(alphaArray);
  let alphaObj = alphaArray.reduce((acc, current, index)=> {
    acc[current] = index + 1;
    return acc; 
}, {})
​
console.log(alphaObj)
​
return string.toLowerCase().split('').reduce((sum, letter) => sum + (alphaObj[letter] || 0), 0)
​
}
​