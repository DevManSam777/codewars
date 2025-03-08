function cubeChecker(volume, side){
  // if either the volume or the side are less than or equal to 0, return false
  // else if side cubed is equal to volume return true
  // all other cases will result in return value false
  return volume <= 0 || side <= 0 ? false : side** 3 === volume;
};
​
// can also use Math.pow(side, 3) instead of exponent operator **