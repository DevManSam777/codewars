function howMuchILoveYou(nbPetals) {
    let phrases = 
  {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    // if nbPetals is divisible by 6 then nbPetals % 6 === 0 so we make the property 0
    0: "not at all" 
  };
  
  return phrases[nbPetals % 6]
}
​