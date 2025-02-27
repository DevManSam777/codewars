const areYouPlayingBanjo = (name) => {
  // check to see if name starts with R, case insensitive
  // if the name begins with R, return '<name> plays banjo'
  // if the name does not being with R, return '<name> does not play banjo'
    return name[0].toUpperCase() === 'R' 
    ? name.concat(' plays banjo')
    : name.concat(' does not play banjo')
}