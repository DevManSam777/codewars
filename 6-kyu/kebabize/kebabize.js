function kebabize(str) {
  let capsRegex = /([A-Z])/g
  str = str.replaceAll('-', '').replace(capsRegex, '-$1').toLowerCase().replace(/[^a-z-]/g, '')
  if(str[0] === '-'){
    return str.slice(1)
  }
  return str;
}