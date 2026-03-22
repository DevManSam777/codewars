function checkRoot(string){
  let arr = string.split(',');
  
  if(arr.some(val => Number.isNaN(Number(val))) || arr.length !== 4){
    return 'incorrect input'
  }
  
  for(let i = 0; i < arr.length - 1; i++){
    if(Number(arr[i] )+ 1 !== Number(arr[i + 1])){
      return 'not consecutive'
    }
  }
  
   let perfectSq = arr.reduce((acc,curr)=> acc * Number(curr), 1) + 1;
   let sqrt = Math.sqrt(perfectSq);
    
  return `${perfectSq}, ${sqrt}`
}