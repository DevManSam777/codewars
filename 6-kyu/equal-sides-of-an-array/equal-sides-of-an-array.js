function findEvenIndex(arr) {
  let index = -1
  const array = [...arr];
        
        if(array.length < 1 || (arr.length === 2 && (arr[0] !== 0 && arr[1] !== 0 ))){
          return -1
        }
        if(array.length === 2 && array[0] === 0) {
          return 1;
        }
         if((array.length === 2 && array[1] === 0) || array.length === 1) {
          return 0;
        }
  
      for(let i = 0; i < array.length; i++){
        let left = array.slice(0,i).reduce((acc,curr)=> acc + curr, 0);
        let right = array.slice(i+1).reduce((acc,curr)=> acc + curr, 0);
        if(left === 'undefined' && right === 0 || right === 'undefined' && left === 0){
          index = i;
          break;
        }
        if(left === right){
          index = i;
          break;
        }
      } return index
}