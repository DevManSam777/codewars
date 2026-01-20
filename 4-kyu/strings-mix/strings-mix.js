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