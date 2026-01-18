function diamond(n){
  /*
  *   param - {number}
  *   return - {string}
  *   
  *   Problem:
  *   Given a number (n) resenting the number of * at the center of the diamond
  *   return a string, representing a diamond
  *       - the first row should start with 1 *
  *       - the final row should also only have 1 *
  *       - the number of * should decrement by 2 depending on their distance from
  *         from the center
  *       - each row should end with \n
  * 
  *    
  *      
  *    each besides the center row will have spaces before the *s
  *       - the number of spaces will be determined by the distance from the center row
  *       - spaces = Math.max(centerIndex, currentIndex) - Math.floor(currentIndex, centerIndex) 
  *
  *     1) make center variable and set its value to Center Row Index = Math.floor(n/2)
  *     
  *     n = input value
  *     distanceFromCenter = (Math.max(centerIndex, currentIndex) - Math.floor(currentIndex, centerIndex))
  *     stars in row = n - (2 * distanceFromCenter) 
  *     spaces = distanceFromCenter
  *     
  *     spaces for each iteration ' '.repeat(distancFromCenter)
  *     stars for each iteration '*'.(2 * distanceFromCenter)
  *     /n
  *     string = ''
  *
  *     string += spacesPer + starsPer + /n
  *
  *     if n < 1 or n % 2 === 0 return null
  */
  
        
        let string = '';
        for(let i = 0; i < n; i++){
        //let currentIndex = i 
          let centerIndex = Math.floor(n/2)
        //let distanceFromCenter = Math.max(centerIndex, currentIndex) - Math.min(currentIndex, centerIndex)
          let distanceFromCenter = Math.abs(centerIndex - i);
          let spacesPer = ' '.repeat(distanceFromCenter);
          let starsPer = '*'.repeat(n - (2 * distanceFromCenter))
          string += spacesPer + starsPer + '\n'
        }
        console.log(string)
        return n < 1 || n % 2 === 0 ? null : string
      
}