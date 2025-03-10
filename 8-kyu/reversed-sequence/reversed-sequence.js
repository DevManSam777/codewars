const reverseSeq = n => {
  // return an array that counts down from n to 1
  // use a for loop
  // intialize an empty array
  
  let countDownArray = [];
  for (let i = n; i >= 1; i--) {
    countDownArray.push(i);
  } return countDownArray;
};