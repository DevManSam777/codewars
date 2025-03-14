function solution(string) {
  // split the string with a regex as a delimiter using a lookahead for A-Z
  // (without using a lookahead, the capital letters will be removed)
  // (we want to look ahead for the position of a  [A-Z] but not include them in the split)
  // join back into a string with the seperator set to one unit of whitespace
  return string.split(/(?=[A-Z])/).join(' ');
}