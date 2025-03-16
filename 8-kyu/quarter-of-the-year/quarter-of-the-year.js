const quarterOf = (month) => {
  // make a switch statement and organize the months into quarters 
  // make one return statement for each quarter
  // remember to use break statements;
  // set default to null to prevent errors if an invalid value is used as an argument
  switch(month){
      case 1:
      case 2:
      case 3:
        return 1;
        break;
      case 4:
      case 5:
      case 6: 
        return 2;
        break;
      case 7:
      case 8:
      case 9: 
        return 3;
        break;
      case 10:
      case 11:
      case 12:
        return 4;
        break;
      default: null;   
  }
}