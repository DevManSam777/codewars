function sumDigits(number) {
  console.log(number);
  // get the absolute value of the number and convert to string
  let numString = String(Math.abs(number));
  console.log(numString);
  // convert the string to an array
​
  let stringArray = numString.split('');
  console.log(stringArray);
​
  // use map to convert back from strings to numbers
  let numArray = stringArray.map(a => Number(a));
  console.log(numArray);
​
  // use reduce to get the sum
  let sumOfNums = numArray.reduce((acc, num) => acc += num)
  console.log(sumOfNums);
  return sumOfNums;
}
​