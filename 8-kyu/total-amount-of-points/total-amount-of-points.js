function points(games) {
 let points = 0;
  for (let i = 0; i < games.length; i++) {
    let home = Number(games[i][0]);
    let opps = Number(games[i][2]);
​
    home > opps ? points += 3 : home === opps ? points++ : points
  } return points
}