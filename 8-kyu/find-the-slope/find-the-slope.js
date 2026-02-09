function slope(points){
  // slope = rise over run
  // rise = points[3] - points[1]
  // run = points[2] - points[0]
  const [x1, y1, x2, y2] = points
  const rise = y2 - y1;
  const run = x2 - x1
  
  const slope = rise/run
  return run === 0 ? 'undefined' : String(slope)
}