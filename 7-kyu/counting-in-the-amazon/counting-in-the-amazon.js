function countArara(n) {
  let string = "";
  if (n % 2 === 0) {
    for (let i = 1; i <= (n / 2); i++) { 
      string += "adak ";
    }
    return string.trim(); 
  } else {
    for (let i = 1; i <= (n / 2); i++) { 
      string += "adak ";
    }
    string += "anane";
    return string.trim(); //Remove trailing space
  }
}