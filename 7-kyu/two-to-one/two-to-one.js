function longest(s1, s2) {
  // combine the input strings and make all characters lowercase.
  const combinedLowercaseString = s1.concat(s2).toLowerCase();
​
  // split the combined string into an array of individual characters.
  // sort the characters alphabetically.
  // remove duplicate characters by creating a set.
  // convert the set back into a string with sorted, unique characters.
  const sortedUniqueString = [...new Set(combinedLowercaseString.split("").sort())].join("");
​
  // return the string containing sorted, unique characters.
  return sortedUniqueString;
}