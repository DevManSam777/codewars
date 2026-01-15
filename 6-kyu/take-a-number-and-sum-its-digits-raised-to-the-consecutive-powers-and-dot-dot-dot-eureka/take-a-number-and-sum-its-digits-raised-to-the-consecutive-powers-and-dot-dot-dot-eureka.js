function sumDigPow(a, b) {
  // input is two integers.
  // return an array of integers where the sum of the individual digits raised to consective powers is equal to the value
  // ex. 89 (8**1 + 8**2) = 8 + 81 = 89
  
  // initialize a variable with the value of the range of the two integers inclusive
  let arrayRange = (b - a ) + 1
  
  // initialize an array with whose length is equal to the range and whose first index is equal to the first input
  let arr = Array.from({length: arrayRange}, (_, i) => i + a )
  
  //let powersArr = arr.map(val => String(val).split('').map((str, i) => Number(str)**(i+1))).map(arr => arr.reduce((acc, curr)=> acc + curr))
  // console.log(powersArr.map(arr => arr.reduce((acc, curr)=> acc + curr)));
​
  // map over the array
  // convert each value to a string and split each individual digit
  // map over the sub arrays 
  // and raise the digit to the power of its index + 1
  // map over those values and add the values of each sub array together
  let powersArr = arr.map(val => String(val).split('').map((str, i) => Number(str)**(i+1))).map(arr => arr.reduce((acc, curr)=> acc + curr))
​
  // return a filtered array of values from the powersArr and values from the original array at the same index that are equal
  return powersArr.filter((num,i) => num === arr[i])
}
​