// TODO: Refactor and shorten the function
const describeAge=(age)=>{
 return `You're a(n) ${
age > 64 
? 'elderly'
: age > 17 
? 'adult'
: age > 12
? 'teenager'
: 'kid'
}` 
}
​
​