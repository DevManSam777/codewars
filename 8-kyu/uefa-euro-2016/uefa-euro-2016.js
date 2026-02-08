function uefaEuro2016(teams, scores){
  const [teamA, teamB] = teams;
  const [teamAScore, teamBScore] = scores;
  
  return teamAScore > teamBScore ? `At match ${teamA} - ${teamB}, ${teamA} won!`
  : teamAScore < teamBScore ? `At match ${teamA} - ${teamB}, ${teamB} won!`
  : `At match ${teamA} - ${teamB}, teams played draw.`
}