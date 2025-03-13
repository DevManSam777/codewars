function sumTwoSmallestNumbers(numbers) {  
  // initiate new varaible and sort the array in ascending order using sort method
    let sortedArr = numbers.sort((a,b) => a - b);
  // return the sum of the fisrt two indices
    return sortedArr[0] + sortedArr[1];
}