function calculateDamage(you, opp, attack, defense){
  // damage = 50 * (attack / defense) * effectiveness
  let effectiveness;
  
  if(
  (you === 'fire' && opp === 'grass' ) ||
  (you === 'water' && opp === 'fire')  ||
  (you === 'grass' && opp === 'water') ||
  (you === 'electric' && opp === 'water') 
  ){
    effectiveness = 2
  } else if (
  (you === 'fire' && opp === 'electric') ||
  (opp === 'fire' && you === 'electric') ||
  (you === 'grass' && opp === 'electric') ||
  (opp === 'grass' && you === 'electric')
  ){
    effectiveness = 1
  } else {
    effectiveness = 0.5
  }
  
  return 50 * (attack / defense) * effectiveness
}