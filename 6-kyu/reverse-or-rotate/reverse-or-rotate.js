function revrot(str, sz) {
   if (sz <= 0 || str == '' || sz > str.length) return '';
    let regex = new RegExp(`(.{${sz}})`, 'g')
   //  console.log(regex)
    let matches = Array.from(str.match(regex))
   //  console.log(matches)
​
    let map = matches.map(chunk => chunk.split('').map(str=> Number(str)))
      let array = []
    for(const arr of map){
      const last = arr[0];
     
      [...arr].reduce((acc, curr)=> acc + curr, 0) % 2 === 0 
      ? array.push(arr.reverse().join('')) : array.push(arr.slice(1).concat(last).join(''))
    }
    console.log(array.join(''))
   return  array.join('')
}