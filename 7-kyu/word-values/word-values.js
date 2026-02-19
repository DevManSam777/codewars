function wordValue(a){
  return a.map((x, i) => (i + 1) * x
    .replaceAll(' ', '')
    .split('')
    .reduce((acc, curr) => acc + curr.charCodeAt(0) - ('a'.charCodeAt(0) - 1), 0));
}
​