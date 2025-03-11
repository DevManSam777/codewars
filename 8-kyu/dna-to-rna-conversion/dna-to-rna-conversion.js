function DNAtoRNA(dna) {
  // use the replace method
  // use a regex to target 'T' globally and replace it with 'U'
  
  return  dna.replace( /T/g, 'U' );
  
}