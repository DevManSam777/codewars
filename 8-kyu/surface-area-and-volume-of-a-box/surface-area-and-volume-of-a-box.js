function getSize(length, height, width) {
  const volume = length * width * height;
  const surfaceArea = 2 * (length * height + length * width + height * width)
  
  return [surfaceArea, volume]
}
​