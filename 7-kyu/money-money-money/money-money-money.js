function calculateYears(principal, interest, tax, desired) {
    if(principal === desired){
      return 0;
    }
    
    let years = 0;
    let currentAmount = principal
    
    while(currentAmount < desired){
      
      let yearlyInterest = (currentAmount * interest)
      let netProfit = yearlyInterest - tax * yearlyInterest
      currentAmount += netProfit
      years++;
    } return years
}