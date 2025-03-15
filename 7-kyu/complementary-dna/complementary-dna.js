function dnaStrand(dna){
//   // split dna string into an array
//   // return
//   return dna.split("")
//   // map through array, creating a new array with complimentary values
//     .map(a => 
//         a === "A" 
//           ? "T" 
//         : a === "T" 
//           ? "A" 
//         : a === "C" 
//           ? "G" 
//         : "C")
//   // join back into a string
//     .join("")
  
  // create an object of key - value pairs of complimentary values
  const dnaObj = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  }
  // return
  // split dna string into array, map through it, use bracket notation to find complimentary value, join back together into string
  return dna.split("").map(base => dnaObj[base]).join("")
}