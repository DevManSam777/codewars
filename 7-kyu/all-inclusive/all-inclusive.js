function containAllRots(str, arr) {
  return str.split('').every((char,i) => arr.includes(str.slice(i) + str.slice(0,i)))
}