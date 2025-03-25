var number=function(array){
  // initialize an empty array variable
    let newArr = [];
  // initialize a count variable with its value set to 1
    let num = 1;
  // iterate through the array
    for(let i = 0; i < array.length; i++) {
  // push count variable value to array at each index
      newArr.push(`${num}: ${array[i]}`)
  // increment array by one at each iteration 
      num ++;
    } 
  // return final array
  return newArr;
}