function sameCase(a, b){
  if (!a.match(/[a-z]/i) || !b.match(/[a-z]/i)){
    return -1;
  }
  else if (a.match(/[a-z]/) && b.match(/[a-z]/) || a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
    return 1;
  } else {
    return 0;
  }
}