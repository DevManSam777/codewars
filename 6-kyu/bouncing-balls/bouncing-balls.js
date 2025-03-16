function bouncingBall(h,  bounce,  window) {
  // return -1 
      // if h is less than or equal to 0
      // if bounce is less than or equal to 0 OR greater than or equal to 1
      // if window is greater than or equal to h
  
    if (h <= 0 || bounce <= 0 || bounce >=1 || window >= h ){
      return -1
    }
    
    // initialize a count variable and set it to 1 for the initial drop
    // there will always be at least 1 drop
    let count = 1;
  
    // calculate the first bounce height and reassign h
      h *= bounce; 
  
    // loop as long as the bounce is visible
    while (h > window) { 
      
      // Increment by 2 for up and down
      count += 2; 
      // calculate the next bounce height
      h *= bounce; 
    }
    // return the count
      return count;
};