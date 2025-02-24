function defineSuit(card) {
  // good luck
  
      if (card.indexOf("♣") != -1) {
        return "clubs";
      } else if (card.indexOf("♦") != -1) {
        return "diamonds";
      } else if (card.indexOf("♥") != -1) {
        return "hearts";
      } else {
        return "spades";
      }
}