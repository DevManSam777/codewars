function isSortedAndHow(array) {
   
  // initialize two variables as flags for ascending and descending and set them both to true
  
  let Ascending = true;
  let Descending = true;
  
  // make a for loop the that starts iterating at the second index (1); 
  
  for (let i = 1; i < array.length; i ++) {
      // write a conditional - if the current index is less than the index -1 then set Ascending to False;
      
    if (array[i] < array[i - 1]) {
      Ascending = false;
    }
        // write another conditional - if the current index is greater than the index -1 then set Decending to False
    if (array[i] > array[i - 1]){
      Descending = false;
    }
  }
  
  // write another conditional with if - else if - and else for Ascending, Descending, and no
    if (Ascending){
      return "yes, ascending"
    } else if (Descending){
      return "yes, descending"
    } else {
      return "no"
    }
}