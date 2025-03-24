function pipeFix(numbers){
  const firstNum = numbers[0] 
  const lastNum = numbers[numbers.length - 1]
  let newArray = [];
  
  for( let i = firstNum; i <= lastNum; i++){
    newArray.push(i);
  } return newArray;
}