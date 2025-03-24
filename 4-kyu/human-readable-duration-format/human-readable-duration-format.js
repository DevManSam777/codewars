function formatDuration (seconds) {
  // if seconds are zero return "now"
  if (seconds === 0) {
    return "now";
  }
  // initialize an object that defines each unit in seconds
  const units = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };
  // initialzie an empty array to hold result
  const result = [];
  
  // iterate through each unit
  for (const unit in units) {
    // calculate the number of units present
    const value = Math.floor(seconds / units[unit]);
    // if a unit is present (value > 0)
    if (value > 0) {
      // add the formatted string to the result array
      result.push(`${value} ${unit}${value > 1 ? "s" : ""}`);
      // update the remaining seconds
      seconds %= units[unit];
    }
  }
  
  // handle different result lengths for formatting
  // if only one unit is present, return it directly
  if (result.length === 1) {
    return result[0];
  // if two units are present, join with " and "
  } else if (result.length === 2) {
    return result.join(" and ");
  // if more than two units are present, join with commas and " and " for the last two
  } else {
    // remove the last element
    const last = result.pop();
    // join the remaining elements with commas, then add " and " and the last element
    return result.join(", ") + " and " + last;
  }
}