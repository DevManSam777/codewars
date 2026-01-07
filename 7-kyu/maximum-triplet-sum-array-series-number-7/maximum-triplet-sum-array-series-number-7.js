function maxTriSum(numbers){
    // convert the array to a set in order to remove duplicates
    // convert back to an array and sort in ascending order
    // add the three largest sums and return  
    return Array.from(new Set(numbers))
      .sort((a,b) => a - b).filter((num,i,arr)=> i >= arr.length - 3)
      .reduce((acc,curr) => acc + curr, 0)
}
​