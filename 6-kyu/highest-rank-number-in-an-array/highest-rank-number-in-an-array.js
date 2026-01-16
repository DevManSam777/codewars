function highestRank(arr){
  let obj = arr.reduce((acc,curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {})
  
  let keyValArr = Object.entries(obj).map(val => val[1])
​
​
  let max = Math.max(...keyValArr)
  console.log(max);
  let highArr = []
  for(let key in obj){
    if(obj[key] === max){
      highArr.push(+key)
    }
  } return highArr.sort((a,b) => a-b)[highArr.length - 1]
  
}
​