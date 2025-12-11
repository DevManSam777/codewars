function correct(string) {
  return string.replace(/[150]/g, (match) => 
    match === "1" 
      ? "I" 
    : match === "5" 
      ? "S"
      : "O"
)};