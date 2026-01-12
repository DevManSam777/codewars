function nbDig(n, d) {
    let arr = [];
  
    for(let i = 0; i <= n; i++){
      arr.push(i**2);
    }
  
    let str = arr.join('')
​
    let digitRegex = new RegExp(d,'g')
​
    return str.match(digitRegex).length
}