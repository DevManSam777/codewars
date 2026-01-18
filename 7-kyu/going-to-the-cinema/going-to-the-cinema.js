function movie(card, ticket, perc) {
    /*
      param - number (price of card)
      param - number (regular ticket price)
      param - number (percentage discount applied to ticket price)
        - stacks 
        
      SystemA = Buy ticket at ticket price
      SystemB = Buy card 
        - each time ticket is purchased a discount is applied
        - the current ticket is multiplied by discount percentage
        - this becomes current ticket price each time
        number of tickets 
          -n = 0
        while SystemA >= Math.ceil(SystemB)
        SystemA += ticket
        SystemB += current ticket price * perc
        n++;
        return n
    */
    let n = 0;
    let systemA = 0;
    let systemB = card
    let cardPrice = ticket
    while(systemA <= Math.ceil(systemB)){
      systemA += ticket;
      cardPrice *= perc
      systemB += cardPrice
      n++;
    } return n;
};