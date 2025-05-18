function squareSum(numbers){
  return numbers.reduce((accumulator, number) => {
    return accumulator + number **2;
  }, 0); 
}