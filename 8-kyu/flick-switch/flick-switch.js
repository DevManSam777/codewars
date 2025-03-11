// function flickSwitch(arr){
//   // create a new array to hold results
//   let result = []; 
  
//   // set the state to true initially
//   let switchState = true;
  
//   // loop through array and toggle switch state when "flick" is encountered
//   for(let i = 0; i < arr.length; i++) {
    
//   // if the present index's value is "flick" then toggle state
//     if(arr[i] === "flick") {
//     switchState = !switchState;
//     } 
    
//   // push the switch state to result array
//       result.push(switchState);
//   } 
  
//   // return result array
//     return result;
// }
​
let flickSwitch = arr => {
  // set initial state to true
  let state = true;
  // map through array and return a new array 
  // if current index value is 'flick' then flip state (false)
  // else state is true
  return arr.map((i) => i === 'flick' ? state = !state : state)
}