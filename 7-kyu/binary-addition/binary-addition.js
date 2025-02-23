function addBinary(num1, num2) {
​
​
   // sum = num1 + num2
     const sum = num1 + num2;
   //   create an empty array
     const arr = [];
   //   if sum is equal to 0  return "0" 
    if (sum === 0) {
     return "0";
   }
  
   // tempSum = sum
     let tempSum = sum;
  
   // while tempSum is greater than 0
      while (tempSum > 0) {
   // remainder = tempSum MODULO 2
      arr.unshift(tempSum % 2);
        
   // add remainder to the FRONT of binaryArray
   // tempSum = FLOOR(tempSum / 2)
        tempSum = Math.floor(tempSum / 2);
        
   // binaryString = JOIN elements of binaryArray with no separator
   // return binaryString
      }
   return arr.join("");
 }
 
  
  
 
   
 
  
   
     
     
   