function maxRot(n) {
  let nArr = String(n).split('')
  console.log(nArr);
   let arr = []
   for(let i = 0; i < nArr.length; i++){
      arr.push(Number(nArr.join('')))
      let last = nArr.splice(i,1)
      nArr.push(last)
   }
   return Math.max(...arr)
 } 
​