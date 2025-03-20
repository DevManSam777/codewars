function smallEnough(a, limit){
  let counter = 0;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      counter = a[i]
    }
  } return counter < limit;
}