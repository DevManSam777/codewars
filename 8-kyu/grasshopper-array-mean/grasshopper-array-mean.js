function findAverage(nums) {
  // accumulate sum of nums array and divide by total number of values in nums array
  return nums.reduce((a,b) => a + b)/ nums.length;
}