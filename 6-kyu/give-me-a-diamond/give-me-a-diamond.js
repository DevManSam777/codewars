function diamond(n){
  // first must determine centerIndex
  // center index = Math.floor(n/2)
  // spaces are equal to distance from center 
  // distance from center is equal to absolute value of center index - current index
  // number of stars decrements by 2 per 1 row distance from center
  // stars = n - (distance from center + spaces)
  
  // 1) initialize centerIndex variable
        const centerIndex = Math.floor(n/2)
  // 2) initialize string variable
        let string = ''
  // 3) run for loop with 
  //    counter i set to 0
  //    condition - i < n
  //    iterator  - i++
        for(let i = 0; i < n; i++){
          const spaces = Math.abs(centerIndex - i);
          const stars = n - (spaces * 2)
          string += ' '.repeat(spaces) + '*'.repeat(stars) + '\n'
        }
    return n < 1 || n % 2 === 0 ? null : string
}