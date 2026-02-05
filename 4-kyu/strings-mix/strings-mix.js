function mix(s1, s2) {
  /**
   *  param {string} - s1
   *  param {string} - s2
   *  return {string} - a string of substrings
   *  
   *  return string of substrings with the letter repeated the maximum length in which it appears when it is present in both strings and when the maximum value is strictly greater than 1
   * 
   * if they max is greater than 1 and
   *  - if s1 letter value is greater --> 1:aaaa
   *  - if s2 letter value is greater --> 2:aaaaa
   *  - if they are equal --> =:aaaa
   * 
   *  sub strings should be sorted by largest number of max letters
   *    - if number of max letters found are the same
   *        - sort by letter in ascending order a-z
   * 
   *  separate substrings with /
   *    - last substring should no have /
   * 
   * Examples.
   *  
   * s1 = "my&friend&Paul has heavy hats! &"
   * s2 = "my friend John has many many friends &"
   * mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
   * 
   * s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
   * s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
   * mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
   * 
   * s1="Are the kids at home? aaaaa fffff"
   * s2="Yes they are here! aaaaa fffff"
   * mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
   * 
   * 
   * 
   * STEPS:
   *  1) instantiate two objects for lowercase letters present in each string
   *    
   *    - convert both input strings (s1, s2) to arrays
   *    - use reduce method to count presence of lowercase letters to object
   *        - make key the letter 
   *        - make val their frequency
   *          - increment by one for each time they are found in each
   * 
   *  2) create an array that compares both objects
   *      - if a letter is appears one or more times in one of the two objects AND the letter appears in both objects
   *          - add to array
   * 
   * 
   *  3) map over array and create new arrayof substrings designating the string that contained the max '1:', '2:', or '=:' appended with letter repeated to the maximum number     
   */
  // console.log(`s1: ${s1}\ns2: ${s2}`)

    // object with the keys set the letters appearing in s1 and the values set to their frequency
    let objA = s1.split('').filter(c => c >= 'a' && c <= 'z').reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    },{});

    // object with the keys set the letters appearing in s2 and the values set to their frequency
    // checks to see if ascii code between 97 and 122 meaning lowercase
    let objB = s2.split('').filter(c => c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)).reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    },{});
    // console.log(Object.entries(objA))
    // console.log(Object.entries(objA).find((val)=> val[0] === 'b'))
    // console.log(objA)

    // array of letters that occur in both where the maximum is greater than 1
    // let occurInBoth = Object.keys(objA).filter(x => Object.keys(objB).includes(x) && objA[x] > 1 || objB[x] > 1)
    let occurInBoth = Array(...new Set(Object.keys(objA).filter(x => objA[x] > 1).concat(Object.keys(objB).filter(x => objB[x] > 1))))
    console.log(occurInBoth)
    
    // array of substrings designating the string that contained the max or '=:' appended with letter repeated to the maximum number
    let subStringMaxsArray = occurInBoth.map(letter =>  {
      let c1 = objA[letter] || 0;
      let c2 = objB[letter] || 0;
      let max = Math.max(c1, c2);
      let prefix = c1 === c2 ? '=' : c1 > c2 ? '1' : '2';
      return `${prefix}:${letter.repeat(max)}`;
    })
    // console.log(subStringMaxsArray.join('/'));

    // array of all matches
    // let wtf = Array.from(subStringMaxsArray.join('/').matchAll(/[\d+]?=?:([a-z]+)/g)).map(x => x[0])

    let wtf = Array.from(subStringMaxsArray.join('/').matchAll(/[\d+]?=?:([a-z]+)/g))
    // console.log(wtf)
    console.log(wtf)

    // sorting function to sort substrings by frequency
    //   if frequency is the same use localeCompare() to sort alphabetically
    function sortMatch(arr){
      let obj = {1: 1, 2: 2, '=': 3}
      return arr.sort((a,b)=> (b[1].length - a[1].length || obj[a[0][0]] - obj[b[0][0]] || a[0].localeCompare(b[0])))
    }

    return sortMatch(wtf).map(x => x[0]).join('/')
}
