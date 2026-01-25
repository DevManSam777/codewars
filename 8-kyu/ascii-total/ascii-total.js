function uniTotal (string) {
  return string.split('').reduce((acc,curr)=> acc + curr.charCodeAt(0), 0)
}