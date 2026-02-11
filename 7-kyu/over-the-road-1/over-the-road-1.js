function overTheRoad(address, n){
  if(address % 2 === 0){
      let offset = n - address;
      return n + 1 + offset
  }
​
 
  return (n + 1) - (address - n) 
}
​