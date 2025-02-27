function fakeBin(x){
  let binary = [];
  
  for (let i = 0; i < x.length; i++) {
    if(x[i] < 5) {
      binary.push("0")
    } else {
      binary.push("1")
    }
  } return binary.join("")
}