function solve(s){
 let upperCase = s.match(/([A-Z])/g)?.length || 0;
 let lowerCase = s.match(/([a-z])/g)?.length || 0;
 let nums = s.match(/\d/g)?.length || 0; 
 let chars = s.match(/[^a-zA-Z0-9\s]/g)?.length || 0;
​
 return Array(upperCase, lowerCase, nums, chars)
}