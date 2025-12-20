function noBoringZeros(n) {
if (n.length <= 1) {
  return 0
}
let string = String(n).split('');
​
while (string[string.length - 1] === '0') {
    string.pop();
}
return Number(string.join(''))
};