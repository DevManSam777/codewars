function solution(nums){
  // if falsy return an empty array
  // else sort in ascending order
  return !nums ? [] : nums.sort((a,b)=> a-b);
}