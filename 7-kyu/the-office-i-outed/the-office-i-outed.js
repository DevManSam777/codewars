function outed(meet, boss){
  meet[boss] *=2
  let tally = 0;
​
  for(let person in meet){
    tally += meet[person]
  }
  tally = tally/Object.keys(meet).length
  return tally > 5 ? 'Nice Work Champ!' :  'Get Out Now!'
}
​