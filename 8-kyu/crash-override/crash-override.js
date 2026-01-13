function aliasGen(first, last){
   /* input should be two strings 
      - first = first name
      - last  = last name
  
      if the first char of EITHER arg is not  A-Z
        - return "Your name must start with a letter from A - Z."
        
      - not all strings will have the first or last names capitalized
        - convert to upper case
      
      - the first chars of first and last toUpperCase are === firstName[key]  and surname[key]
      
      return a string firstName[key] lastName[key]
      
      1) initialize variables for the first char in both input strings
        -convert to uppercase
      2) conditional statement to verify that they are valid letters (A-Z)
        - if invalid return - return "Your name must start with a letter from A - Z."
      3) return obj.firtchar obj.lastchar
      
  */
  
  const firstNameChar = first[0].toUpperCase()
  const lastNameChar = last[0].toUpperCase()
  const notCapLetterRegex = /[^A-Z]/
  
  if(notCapLetterRegex.test(firstNameChar) || notCapLetterRegex.test(lastNameChar)){
    return 'Your name must start with a letter from A - Z.'
  }
  
  return `${firstName[firstNameChar]} ${surname[lastNameChar]}`
}