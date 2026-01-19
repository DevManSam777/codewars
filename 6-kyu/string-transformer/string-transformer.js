function stringTransformer(str) {
  return str.split(/\b/)
    .filter(x => x != '')
    .join('-')
    .replace(/[a-z]/gi, (x)=> x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
    .split('-')
    .reverse()
    .join('')
}
​