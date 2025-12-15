function dataReverse(data) {
  let chunks = [];
    for (let i = 0; i < data.length; i += 8){
        chunks.push(data.slice(i, i + 8))
    };
    finalArr = [];
    let reversed = chunks.forEach(x => finalArr.unshift(x))
    return finalArr.flat()
}