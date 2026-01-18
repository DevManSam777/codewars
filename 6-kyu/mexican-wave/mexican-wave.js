function wave(str){
  let arr = str.split('');
  let wave = [];
  
    for(let i = 0; i < arr.length; i++){
      if(/[a-z]/.test(arr[i])){
        wave.push([arr.slice(0, i), arr[i].toUpperCase(), arr.slice(i + 1)].flat().join(''))
      }
    } return wave
}
​