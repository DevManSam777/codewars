function well(x){
  let string = x.join(' ');
  return !(/good/).test(string) ? 'Fail!' : (string.indexOf('good') === string.lastIndexOf('good')) || string.match(/good/g).length === 2 ? 'Publish!' : 'I smell a series!' 
}