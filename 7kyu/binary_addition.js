// Implement a function that adds two numbers together and returns their sum in binary.
 // The conversion can be done before, or after the addition.
 // The binary number returned should be a string.
 // Examples:(Input1, Input2 --> Output (explanation)))
 // 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
 // 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
 
 // Solution 1: Manual Binary Conversion
 function addBinary(num1, num2) {
   // Pseudo-code:
   // FUNCTION addBinary(num1, num2):
   //   sum = num1 + num2
   //   binaryArray = []
   //   IF sum is equal to 0:
   //     RETURN "0"
   //   tempSum = sum
   //   WHILE tempSum is greater than 0:
   //     remainder = tempSum MODULO 2
   //     ADD remainder to the FRONT of binaryArray
   //     tempSum = FLOOR(tempSum / 2)
   //   binaryString = JOIN elements of binaryArray with no separator
   //   RETURN binaryString
 
   const sum = num1 + num2;
   const arr = [];
 
   if (sum === 0) {
     return "0";
   }
 
   let tempSum = sum;
   while (tempSum > 0) {
     arr.unshift(tempSum % 2);
     tempSum = Math.floor(tempSum / 2);
   }
   return arr.join("");
 }
 
 console.log("Manual binary conversion:");
 console.log(addBinary(1, 1)); // Output: 10
 console.log(addBinary(5, 9)); // Output: 1110
 
 // Solution 2: Using toString(2)
 function addBinaryToString(num1, num2) {
   // Pseudo-code:
   // FUNCTION addBinary(num1, num2):
   //   sum = num1 + num2
   //   binaryString = sum.toString(2)
   //   RETURN binaryString
 
   const sum = num1 + num2;
   return sum.toString(2);
 }
 
 console.log("\nUsing toString(2):");
 console.log(addBinaryToString(1, 1)); // Output: 10
 console.log(addBinaryToString(5, 9)); // Output: 1110