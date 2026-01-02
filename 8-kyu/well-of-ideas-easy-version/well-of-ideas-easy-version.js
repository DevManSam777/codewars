function well(x){
  let good = x.filter(x => x === 'good').length;
  
  return good < 1 ? 'Fail!' : good < 3 ? 'Publish!' : 'I smell a series!'
}