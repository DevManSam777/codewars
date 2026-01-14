function solve(s) {
  let asciiCode = 97;
  let lettersObj = {}
  
    for(let i = 1; i <= 26; i++){
      lettersObj[String.fromCharCode(asciiCode)] = i
      asciiCode++
    }
    
   return Math.max(...s.split(/[aeiou]/g)
                  .map(str => str.split('')
                  .map((letter) => lettersObj[letter]))
                  .map(vals => vals.reduce((acc, curr)=> acc + curr, 0)))
};
​