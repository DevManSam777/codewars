function likes(names) {
  /*
      param {array}
      return {string}
      
      
      if the length of the array is 0 
        - return 'no one likes this'
        
  */
  
  let length = names.length
  let [first,second,third] = names
  
  
  return length === 0 ? 'no one likes this' 
  : length === 1 ? `${first} likes this`
  : length === 2 ? `${first} and ${second} like this`
  : length === 3 ? `${first}, ${second} and ${third} like this`
  : `${first}, ${second} and ${length - 2} others like this`
}