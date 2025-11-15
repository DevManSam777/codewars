function whatday(num) { 
​
  // initialize an array with the days of the week from Sunday through Saturday
  
  let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
​
  // use a short circuit evaluation to return the index of the array at num value - 1
  // or return "Wrong, please enter a number between 1 and 7";
  
  return week[num - 1] || "Wrong, please enter a number between 1 and 7"
​
}