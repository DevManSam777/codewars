function gimme (triplet) {
  let sorted = triplet.slice().sort((a,b) => a - b );
  let middle =  sorted[1]
;  return triplet.indexOf(middle);
}