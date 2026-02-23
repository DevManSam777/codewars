function HQ9(code) {
  let bottles = 99
  let str = ''
  let endStr = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
  
  if(code === 'H'){
    return 'Hello World!'
  } 
  
  if(code === 'Q'){
    return code
  }
  
  if(code === '9'){
    while(bottles > 2){
      str += `${bottles} bottles of beer on the wall, ${bottles--} bottles of beer.\nTake one down and pass it around, ${bottles} bottles of beer on the wall.\n`
    } return str + endStr
  }
}