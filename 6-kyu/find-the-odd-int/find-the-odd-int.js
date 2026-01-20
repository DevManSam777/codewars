function findOdd(A) {
  let nums = A.reduce((acc,curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  console.log(Object.entries(nums))
  for(const [key, val] of Object.entries(nums)){
      if(val % 2 !== 0){
       return parseInt(key);
      }
  }
}