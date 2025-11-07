function count(string) {
  // TODO
    if (string.length === 0) {return {}};
    let charObj = {};
    
    string.split("")
    .forEach(a => charObj.hasOwnProperty(a) ? charObj[a] ++ : charObj[a] = 1) 
    return charObj;
}
​