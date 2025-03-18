function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((a) => {
    return typeof a === "number"
  })
}