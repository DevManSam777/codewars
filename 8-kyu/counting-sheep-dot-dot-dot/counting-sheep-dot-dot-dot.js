function countSheeps(sheep) {
  // initialize a variable to keep count of sheep 
  let sheepCount = 0
  // iterate through array and increment sheepCount for each true value
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i]) {
      sheepCount ++;
    }
  }
  // return sheepCount
  return sheepCount;
}