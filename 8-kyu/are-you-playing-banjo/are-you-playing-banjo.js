const areYouPlayingBanjo = (name) => {
  // create regex for r, case insensitive
  const r = /r/i;
  // use search method on name string to see if r is present at the first index (0)
  return name.search(r) === 0 
  // if it is present return '<name> plays banjo'
    ? name.concat(' plays banjo')
  // if it is not present return '<name> does not play banjo'
    : name.concat(' does not play banjo')
}
​