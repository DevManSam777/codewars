function containAllRots(str, arr) {
    let arrFromStr = [];
  
    for(let i = 0; i < str.length; i++){
      arrFromStr.push(str)
      let last = str[0];
      let rest = str.slice(1);
      str = rest + last;
    }
   return arrFromStr.every(val => arr.includes(val))
}
​