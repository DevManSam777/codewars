function longestPalindrome(s){
  let length = 0;
  
  function isPalindrome(str){
    return str === str.split('').reverse().join('')
  }
  
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < s.length; j++){
      let substring = s.slice(i, j + 1)
      
      if(!isPalindrome(substring)){
        continue;
      }
      
      if (substring.length > length){
        length = substring.length
      }
    }
  } return length
}