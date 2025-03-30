function distinct(a) {
  return a.filter((num, index) => {
    return a.indexOf(num) === index;
  });
}