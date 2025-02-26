function highAndLow(numbers){
  // create a new array w/ split method
      const numArray = numbers.split(" ")
  // sort from high to low
      .sort((a, b) => b - a);
  // return first (highest num) and last indices (lowest num)
    return `${numArray[0]} ${numArray[numArray.length - 1]}`;
}