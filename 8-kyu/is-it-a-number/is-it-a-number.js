function isDigit(s) {
  return /^-*[0-9\.]+$/.test(s.trim())
}