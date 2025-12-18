function sortMyString(s) {
   let odds = ""
   let evens = ""
   let array = s.split('');
  
  for(const [index, char] of array.entries()){
    index % 2 === 0 ? odds = odds.concat(char) : evens = evens.concat(char)
  } return `${odds} ${evens}`
}