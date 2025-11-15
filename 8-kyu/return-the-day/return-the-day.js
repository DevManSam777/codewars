function whatday(num) { 
​
  // initialize an object of the days of the week starting with sunday.  
  // start the keys with 1: "Sunday", incrementing to 7: "Saturday"
  const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  }
  
    // if the days object has the property of the number arguement
    // return the value of the key equal to that number 
    // else  "Wrong, please enter a number between 1 and 7"
  
    if (days.hasOwnProperty(num)) {
      return days[num]
    } else {
      return "Wrong, please enter a number between 1 and 7";
    }
​
​
​
}