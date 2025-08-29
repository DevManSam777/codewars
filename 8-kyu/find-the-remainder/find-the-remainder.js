function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  if (n > m) {
    return n % m;
  } else if(n < m) {
    return m % n;
  } else if ((n && m) < 0 ){
    return 0;
  } else {
    return NaN;
  }
}