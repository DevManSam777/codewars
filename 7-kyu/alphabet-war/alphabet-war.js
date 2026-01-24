function alphabetWar(fight){
  const leftVals = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  }
​
  const rightVals = {
    m: 4, 
    q: 3,
    d: 2,
    z: 1
  }
  let left = []
  let right = []
​
  for(char of fight){
   if(Object.keys(leftVals).includes(char)){
      left.push(leftVals[char]);
   } if(Object.keys(rightVals).includes(char)){
      right.push(rightVals[char]);
   }
  }
  
  left = left.reduce((acc,curr)=> acc + curr, 0);
  right = right.reduce((acc, curr)=> acc + curr, 0);
​
  return left === right ?  "Let's fight again!" : left > right ? "Left side wins!" : "Right side wins!"
}
​