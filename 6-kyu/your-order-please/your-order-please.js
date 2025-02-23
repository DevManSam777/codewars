function order(words) {
    // if 'words' is empty, return an empty string.
    if (words === "") {
        return "";
    } else {
        // split 'words' into an array called 'wordArray' using spaces.
        let wordArray = words.split(" ");
​
        // create an empty array called 'orderedArray'.
        let orderedArray = [];
​
        // for each 'word' in 'wordArray', do the following:
        for (let i = 0; i < wordArray.length; i++) {
            let word = wordArray[i];
            // find the first number in 'word' and store it in 'position'.
            let position = parseInt(word.match(/\d/)[0]);
            // place 'word' into 'orderedArray' at the index 'position - 1'.
            orderedArray[position - 1] = word;
        }
        // join 'orderedArray' into a string using spaces.
        return orderedArray.join(" ");
    }
    // 8. Return the resulting string.
}