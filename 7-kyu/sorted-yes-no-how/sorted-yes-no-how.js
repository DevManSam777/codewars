function isSortedAndHow(array) {
    // initialize a variable of the array converted to string using join()
    let arrayToString = array.join("");
    // use a comparison operator to see if the array converted to a string, sorted low to high
    if(array.sort((a,b)=> a- b).join("") === arrayToString) {
      return "yes, ascending"
    }
    // and joined is equal to the variable we initialized
    // if it is return "yes, ascending"
    
    // use another comparison operator to see if the array converted to a string and sorted 
  
      else if (array.sort((a,b) => b - a).join("") === arrayToString){
        return "yes, descending"
      }
    //  high to low is equal the the variable we initialized
    // if it is return "no, descending"
  
    // else return "no"
    else {
      return "no";
    }
}