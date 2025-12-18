// assign your RegExp to REGEXP:
// use lookaheads to check if all conditions are met
// I'll need 3 total
// 1st check if there is at least 1 lowercase letter
// 2nd check if there is at least 1 uppercase letter
// 3rd check if there is at least 1 digit
// lookaheads don't consume chars so we need to add a pattern to match
// add pattern to match with at least alphanumeric chars
// anchor the pattern with ^ and $
const REGEXP = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]{6,}$/;