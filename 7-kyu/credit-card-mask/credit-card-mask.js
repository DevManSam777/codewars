function maskify(cc) {
  if(cc.length <= 4){
    return cc;
  }
  
  let lastFour = cc.slice(-4);
  let beginning = cc.slice(0,-4).replace(/./g, '#')
  return beginning + lastFour
}
​