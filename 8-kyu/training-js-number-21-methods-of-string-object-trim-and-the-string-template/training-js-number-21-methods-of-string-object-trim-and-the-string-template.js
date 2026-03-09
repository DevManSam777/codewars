function fiveLine(s){
  return [1,2,3,4,5].map(x => s.trim().repeat(x)).join('\n')
}