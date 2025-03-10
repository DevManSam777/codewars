var countSheep = function (num){
  // intialize an array variable
    let  sheepArr= []
  // countdown with loop and add each iteration to the left of the previous
    for (let i = num; i > 0; i--) {
      sheepArr.unshift(`${i} sheep...`)
    }  
  // return as a string
    return sheepArr.join("");
  } 
​