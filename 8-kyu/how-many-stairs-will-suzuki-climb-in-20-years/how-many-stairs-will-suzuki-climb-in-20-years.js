function stairsIn20(s){
// create a new array using the spread operator
// flatten the array 
// then reduce it 
// and multiply by 20 (years)
 return [...s].flat().reduce((acc, curr) => acc + curr) * 20
}