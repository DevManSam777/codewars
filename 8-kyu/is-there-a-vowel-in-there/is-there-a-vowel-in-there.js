function isVow(a){
  let vowels = {
    97: "a",
    101: "e",
    105: "i", 
    111: "o",
    117: "u"  
  };
  
  let arrayWithVowels = [];
  
  for(let i = 0; i < a.length; i++) {
    
    if (vowels.hasOwnProperty(a[i])) {
      arrayWithVowels.push(vowels[a[i]]);
    } else {
      arrayWithVowels.push(a[i]);
    }
  } return arrayWithVowels;
}