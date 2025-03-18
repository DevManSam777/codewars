function highAndLow(numbers){
   let numArr = numbers.split(" ").sort((a,b) => b - a);
  return `${numArr[0]} ${numArr[numArr.length - 1]}`
    
}