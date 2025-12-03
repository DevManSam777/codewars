function multipleOfIndex(array) {
  let newArray = [];
 for (let i = 0; i < array.length; i++){
   if (array[i] % i === 0){
     newArray.push(array[i]);
   } else if (array[i] === 0) {
     newArray.push(0);
   }
 } return newArray;
}