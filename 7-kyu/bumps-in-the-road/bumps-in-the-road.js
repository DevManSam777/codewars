function bump(x){
  let array = x.split('');
//   let bumps = 0;
  
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] === 'n'){
//       bumps += 1;
//     }
//   }
  
//   if(bumps <= 15) {
//     return 'Woohoo!';
//   } else {
//     return 'Car Dead';
//   }
  
  return array.filter(x => x === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead'
}