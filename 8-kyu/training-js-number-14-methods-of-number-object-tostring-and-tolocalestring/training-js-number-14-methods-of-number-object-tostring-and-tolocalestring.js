function colorOf(r,g,b){
  let hex = [r,g,b].map(val => val.toString(16).padStart(2,0)).join('');
  return `#${hex}`
}
​