function bubblesortOnce(a) {
   let arr = [...a]
  for(let i = 0; i < a.length; i++){
    let temp;
    if(arr[i] > arr[i + 1]){
      temp = arr[i + 1];
      arr[i+1] = arr[i];
      arr[i] = temp;
    }
  } return arr
}