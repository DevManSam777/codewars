function past(h, m, s){
  // 1 s = 1000 ms, 60s = 1 m , 60 m = 1 h
  const hoursToMilliseconds = 3600000 * h;
  const minutesToMilliseconds = 60000 * m;
  const secondsToMilliseconds = 1000 * s;
  
  // return sum of variables
  return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds
}