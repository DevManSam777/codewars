function declareWinner(fighter1, fighter2, firstAttacker) {
    let current = firstAttacker; 
    
    while(fighter1.health > 0 && fighter2.health > 0){
      if(current === fighter1.name){
      fighter2.health -= fighter1.damagePerAttack;
      current = fighter2.name
      } else {
        fighter1.health -= fighter2.damagePerAttack
        current = fighter1.name
      }
    } return fighter1.health > 0 ? fighter1.name : fighter2.name
}