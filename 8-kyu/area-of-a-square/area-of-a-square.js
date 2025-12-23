function squareArea(A){
  const radius = (2 * A) / Math.PI;
  const area = radius * radius;
  return parseFloat(area.toFixed(2));
}