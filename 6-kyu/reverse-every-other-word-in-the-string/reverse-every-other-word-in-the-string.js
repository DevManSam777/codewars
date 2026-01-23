function reverse(str){
  return str.split(' ')
  .map((x,i)=> i % 2 !== 0 
      ? x
       .split('')
       .reverse()
       .join('') 
      : x)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
​