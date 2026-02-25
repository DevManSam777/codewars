function colorOf(...rgb){
  let hex = rgb.map(val => val.toString(16).padStart(2,0)).join('');
  return `#${hex}`
}