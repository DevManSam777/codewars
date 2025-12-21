function solve(arr) {
  let final = []
  for(let i = 0; i < arr.length; i++){
    if(i == arr.lastIndexOf(arr[i])){
      final.push(arr[i]);
    }
  } return final
}