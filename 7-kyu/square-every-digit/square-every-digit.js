function squareDigits(num){
// initialize a variable and convert number to string
    let arrOfNums = num.toString()
// create array using split method to make each index an individual string within array
    .split("");
// initialize an empty array to store the squares
    let squareArr = [];
// loop through the array
    for (let i = 0; i < arrOfNums.length; i++){
// convert the string digit at the current index to a number, square it, and push the result to squareArr
    squareArr.push(Number(arrOfNums[i]) ** 2);
// join the squared digits back into a string, convert to a number, and return it
    } return Number(squareArr.join(""));
}