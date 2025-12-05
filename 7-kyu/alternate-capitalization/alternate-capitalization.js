function capitalize(s){
  let array = [s.split(" ").join('').split('')].flat();
//   console.log(array);
  let evenArray = array.map((val, index) => {
    if(index % 2 !== 0) {
        return val.toUpperCase();
    }  return val;
  });
    let oddArray = array.map((val, index) => {
        if(index % 2 === 0) {
            return val.toUpperCase();
        } return val;
    });
    let finalArray = [oddArray.join(''), evenArray.join('')]
    console.log(finalArray);
    return  finalArray;
};
​