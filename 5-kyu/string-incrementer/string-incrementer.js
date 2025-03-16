function incrementString(string) {
  // initialize a regex variable that will match 0 or more digits at the end of the string
  let trailingRegex = /(\d*)$/;
  // use the replace method on the string, with the regex as the pattern and the replacement set a callback
  // return
  // the callback recieves the matched digits as an arguement
  return string.replace(trailingRegex, function(trailingDigits) {
  // in the callback
  // if there is no match, the match will be an empty string
  // return "1" to append one to the end of the string to handle case for no trailing digits
    if (trailingDigits === "") {
      return "1";
    };
  // convert the match to a number and add 1
  // convert the number back to a string
  // converting to a string will have removed and leading 0's
  // use padStart method and the match length as the length, and "0" as the padding to replace any zeros that may have been removed
  // make sure the "0" are strings
  // return
    return (Number(trailingDigits) + 1).toString().padStart(trailingDigits.length, "0");
    });
  };
​