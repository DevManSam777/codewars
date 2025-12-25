function dashatize(num) {
    let arr = String(num).replace(/[13579]/g, (n)=> `-${n}-`).split('')
    console.log(arr);
​
    arr = arr.map((x, i) => {
        if((i === 0 && x === '-') || (i === arr.length -1 && x === '-')){
            return ''
        } else if (x === '-' && arr[i - 1] === '-' ){
            return ''
        } else {
            return x;
        }
    })
    console.log(arr.join(''));
    return arr.join('');
}
​