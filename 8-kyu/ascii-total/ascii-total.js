function uniTotal (string) {
  return string.split('').map(char=> Number(char.charCodeAt(0))).reduce((acc,curr)=>acc + curr, 0)
}