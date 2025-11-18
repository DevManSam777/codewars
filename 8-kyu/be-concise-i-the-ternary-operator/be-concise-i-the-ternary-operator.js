// TODO: Refactor and shorten the function
​
const describeAge=(b)=>{let a=`You're a(n)`;return b<=12?`${a} kid`:b>=13&&b<=17?`${a} teenager`:b>=18&&b<=64?`${a} adult`:`${a} elderly`}