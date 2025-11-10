function rowWeights(array){
  // initialize two variables for oddIndex and evenIndex
  // use a for loop to iterate through the array
  // condtional statement to check if i % 2 === 0 (even) else odd
  // add array[i] to either oddIndex or evenIndex
  // return a new array with the values of [teamA, teamB]
  
//   let teamA = 0;
//   let teamB= 0;
  
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       teamA += array[i];
//     } else {
//       teamB += array[i];
//     }
//   } return [teamA, teamB];
  
​
​
  let totals = [0, 0];
​
  array.forEach((a, b) => {
    totals[b % 2] += a;
  });
  return totals;
}