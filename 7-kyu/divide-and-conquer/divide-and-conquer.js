function divCon(x){
  let strings = x.filter(char => typeof char === 'string').reduce((acc,curr)=> acc + Number(curr), 0)
  let nums = x.filter(char => typeof char === 'number').reduce((acc, curr) => acc + curr, 0)
  
  return nums - strings;
}