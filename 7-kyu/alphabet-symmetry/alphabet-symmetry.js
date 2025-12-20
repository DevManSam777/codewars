function solve(words) {
    // get the charcode of 'a' so we can create an array of the alphabet in ascending order
    let a = 'a'.charCodeAt(0); // 97
    
    // use a (97) variable to create an alphabet array with String.fromCharCode()
    const alpha = Array.from({length: 26}, (_,i) => String.fromCharCode(i + a))
    console.log(alpha);
​
    // words is an array of strings
    // initialize a variable to map over each string to convert into an array of individual lowercase strings
    let arrayOfArrays = words.map(word => word.toLowerCase().split(''))
    console.log(arrayOfArrays)
​
    // we want to map over each of the arrays in the arrayOfArrays  
    // we want to initialize a count variable and set it's value to 0
    // inside of the map function we want to see if the index of each character is the same as the index of
    // of the corresponding letter in the alphabet array
    // if they are we should increment the count
    // return the count outside of the for each loop
    // we want to return the arrayOfArrays outside of the map
​
    return arrayOfArrays.map(x => {
        let count = 0;
        x.forEach((x, i) => {
            if (i === alpha.indexOf(x)){
                count++
            }
        }); return count;
    })
}
​
​