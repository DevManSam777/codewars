function findUniq(arr) {
    // there will always be at least 3 numbers in the array
    
    // convert to a set to get rid of duplicates
    let uniqueSet = new Set([...arr]);
    // convert back into an array of two remaining numbers
    let uniqueArr = [...uniqueSet];
    
    // initialize variables for the two numbers in the array
    let firstNum = uniqueArr[0];
    let secondNum = uniqueArr[1];
    
    // set up a counter to count instances of each number in original array
    let totalFirstNum = 0;
    let totalSecondNum =0;
    
    // use a for loop to iterate through the array
    for (let i = 0; i < arr.length; i++) {
    // if the current index is equal to the first number variable increment the totalFirstNum counter by 1
      if (firstNum === arr[i]){
        totalFirstNum ++;
      }
      
      if (secondNum === arr[i]){
    // if the current index is equal to the first number variable increment the totalFirstNum counter by 1
        totalSecondNum ++;
      }
    
      
    // if the total number of occurences of the first number are greater than the total number of occurences of the second number
    // then the second number is the unique number 
    // return the second number
    } if (totalFirstNum > totalSecondNum){
      return secondNum;
    } else {
    // if not then the first number is the unique number 
    // return the first number
      return firstNum;
    } 
  }
​