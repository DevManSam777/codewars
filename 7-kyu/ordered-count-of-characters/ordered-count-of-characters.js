const orderedCount = function (text) {
console.log(text);
​
  if(!text) {
    return []
  }
  
  let obj = {};
    for(let i = 0; i < text.length; i++){
      if(obj['+'+text[i]]){
      obj['+'+text[i]] ++; 
    } else {
      obj['+'+text[i]] = 1;
    }
  }
​
  console.log(obj)
  let arr = [];
  for(const key in obj){
    arr.push([key, obj[key]]);
  }
  return arr.map((x) => [x[0].replace('+', ''), x[1]])
}
​