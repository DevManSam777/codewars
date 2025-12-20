function  calculateAge(dob, bd) {  
  let yearsOld = bd - dob;
  if(bd > dob){
    if(yearsOld === 1){
      return "You are 1 year old."
    } else {
      return `You are ${yearsOld} years old.`
    }
  } else if (yearsOld === 0) {
    return "You were born this very year!"
  } else {
    if(Math.abs(yearsOld) > 1){
    return `You will be born in ${Math.abs(yearsOld)} years.`
    } else {
      return"You will be born in 1 year."
    }
  }
}
​
​