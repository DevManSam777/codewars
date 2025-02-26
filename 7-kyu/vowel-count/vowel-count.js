function getCount(str){
// make a regex for vowels
    const vowels = /[aeiou]/g;
// return and use match string method
//find number of vowels by appending with .length
    return str.match(vowels) ? str.match(vowels).length : 0
}