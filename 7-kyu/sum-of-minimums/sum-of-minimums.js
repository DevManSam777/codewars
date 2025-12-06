 function sumOfMinimums(arr) {
    return arr.reduce((acc, currentVal) => {
      return acc + Math.min(...currentVal);
    }, 0);
  }