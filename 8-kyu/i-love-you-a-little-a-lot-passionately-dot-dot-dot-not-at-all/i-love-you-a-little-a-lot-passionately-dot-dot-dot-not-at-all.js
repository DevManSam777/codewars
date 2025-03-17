function howMuchILoveYou(nbPetals) {
let phrases = 
  {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all" 
  }
  // if the number of petals is greater thans six but is divisible by six
  // return the sixth phrase
   if (nbPetals > 6 && nbPetals % 6 === 0){
      return phrases[6]
   }
  // if the number of petals is larger than 6 but is not divisible by 6
    if (nbPetals > 6) {
  // the remainder of the modulus operation will be the equal to the object key
      return phrases[nbPetals % 6]
    } else {
  // if the number of petals is 6 or less, the number of petals will be the object key
      return phrases[nbPetals]
    }
}
​