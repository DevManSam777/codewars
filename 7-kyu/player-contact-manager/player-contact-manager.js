function playerManager(players) {
  if(!players) return [];
  players = players.split`, `;
  let result = [];
  for(let i = 0; i < players.length; i+=2) {
    result.push( {player: players[i], contact: +players[i+1]} );
  }
  return result;
}