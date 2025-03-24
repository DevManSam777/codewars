function reverseLetter(str) {
  // use replace with regex to replace non-word characters and numbers to empty string
  // split into array
  // reverse array
  // join back to string
  // return
  return str.replace(/[\W.\d.\s._]/g, "").split("").reverse().join("")
}