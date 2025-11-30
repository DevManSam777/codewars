function nearestSq(n){
   let squareRoot = Math.sqrt(n);
   let floor = Math.floor(squareRoot);
   let ceiling = Math.ceil(squareRoot);
   let floorDiff = squareRoot - floor;
   let ceilDiff = ceiling - squareRoot;
  
  return ceilDiff < floorDiff ? ceiling**2 : floor**2
}