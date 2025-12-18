// assign your RegExp to REGEXP:
// use lookaheads to check if all conditions are met
// I'll need 4 total
// 1st check to see if there are at least 6 alpha numerica chars
// 2nd check if there is at least 1 lowercase letter
// 3rd check if there is at least 1 uppercase letter
// 4th check if there is at least 1 digit
// lookaheads don't consume chars so we need to add a pattern to match
// the pattern is the same as the first lookahead which is only alphnumeric chars
// anchor the pattern with ^ and $
const REGEXP = /^(?=[a-zA-Z0-9]{6,})(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]{6,}$/;