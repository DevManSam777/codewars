function findNb(m) {
/*
* param {number} - sum of factoral cubed values 
*   - vals start at 1^3 and increment by 1
*   - until their total combined sum is striclty equal to m
* return {number} - n (the final factoral value cubed)
*   - ex. n^3 + (n−1)^3 + (n−2)^ +...+1^3 =m 
*   - if such a n exists or -1 if there is no such n.
*/
  let total = 0
  let num = 0
  while (total < m){
    num++;
    total += num**3
  }
  return total  === m ? num  : -1
}
​