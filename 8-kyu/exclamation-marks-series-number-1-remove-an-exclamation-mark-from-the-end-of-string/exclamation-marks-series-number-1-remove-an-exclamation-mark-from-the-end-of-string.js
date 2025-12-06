function remove (string) {
  // convert to an array,
  // use a while loop to check if the last index is "!"
  // if it is then pop it off
  // convert back to string and return
  
  let hiArray = string.split('');
  console.log(hiArray)
  if (hiArray[hiArray.length - 1] === '!') {
    hiArray.pop()
  } 
  console.log(hiArray)
​
  return(hiArray.join(''))
}
​