function findMultiples(integer, limit) {
  // use a for loop
  let numArr = []
  for (let i = integer; i <= limit; i+= integer){
    numArr.push(i)
  } return numArr;
}
​