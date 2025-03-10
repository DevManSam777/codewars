const areaOrPerimeter = function(l , w) {
  // square will have equal length and width
  // area = length * width
  // rectangle perimeter = sum of all sides
  return l === w ? l * w : (l + w) * 2
};