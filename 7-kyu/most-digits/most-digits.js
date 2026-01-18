function findLongest(array){
  array = array.map(n => String(n))
  console.log(typeof array[0]);
​
  let longest = array.reduce((longest, curr) => {
    curr.length > longest.length ? longest = curr : longest
    return longest
  })
  console.log(longest);
  return Number(longest)
}
​