function high(x){
  const letters = Object.fromEntries(Array.from({length: 26}, (_,i)=> {
    return [String.fromCharCode(i + 'a'.charCodeAt(0)), i + 1]
  }));
   const sums = x.split(' ')
   .map(word => word.split('')
      .map(letter=> letters[letter]))
   .map(arr=> arr.reduce((acc,curr)=> acc + curr,0));
  
  const index = sums.indexOf(Math.max(...sums));
  return x.split(' ')[index];
}
​