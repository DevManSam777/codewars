function abbrevName(name){
  
    // initialize an array variable by splitting the string by white space to seperate the first and last names
    // use the toUpperCase() function to make letters caps 
    let nameArr = name.toUpperCase().split(" ")
    
    // if there aren't two names return undefined
    if (nameArr.length < 2) {
      return undefined;
    }
    
    // initialize variables for initials in first and last names for readability (optional)
    let firstInitial = nameArr[0][0];
  
    // use nameArr.length - 1 incase there are middle names present.  this way we target the last index
    let lastInitial = nameArr[nameArr.length - 1][0];
  
    // return template string with template literals of first and last name seperated by a period
    return `${firstInitial}.${lastInitial}`
​
}