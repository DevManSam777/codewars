function replace(str) {
    // takes a string
    // initial a variable and convert to array
    let arr = str.split("");
    // console.log(arr);
    // create a vowel regex
    let vowelRegEx = /[aeiou]/i;
    
​
    // iterate through array and see if the character is a vowel
    for (let i = 0; i < arr.length; i++) {
    
    // if the character is a vowel
    if (vowelRegEx.test(arr[i])) {
        
    // replace the character with a "!"
        arr[i] = "!";
    }
    // convert array back to string
    // return string
    } return arr.join("");
}