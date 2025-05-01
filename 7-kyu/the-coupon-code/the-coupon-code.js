function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
​
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
​
  let currentDateFormatted = currentDate.split(" ");
  let expirationDateFormatted = expirationDate.split(" ");
​
  if (enteredCode !== correctCode) {
    return false;
  }
​
  const currentMonthIndex = months.indexOf(currentDateFormatted[0]);
  const expirationMonthIndex = months.indexOf(expirationDateFormatted[0]);
​
  if (Number(currentDateFormatted[2]) < Number(expirationDateFormatted[2]) ||
      (Number(currentDateFormatted[2]) === Number(expirationDateFormatted[2]) && currentMonthIndex < expirationMonthIndex) ||
      (Number(currentDateFormatted[2]) === Number(expirationDateFormatted[2]) && currentMonthIndex === expirationMonthIndex && Number(currentDateFormatted[1].replace(',', '')) <= Number(expirationDateFormatted[1].replace(',', '')))) {
    return true;
  } else {
    return false;
  }
}
​