function calc(x){
  let total1 = x.split('').map(char=> char.charCodeAt(0)).join('')
  let total2 = total1.replaceAll('7', '1');
​
  total1 = total1.split('').reduce((acc, curr) => acc + Number(curr), 0)
  total2 = total2.split('').reduce((acc, curr) => acc + Number(curr), 0)
  
  return Number(total1) - Number(total2)
}
​