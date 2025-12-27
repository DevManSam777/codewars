function encryptThis(text) {
  return text.split(' ').map(word => {
    let arr = word.split('');
    // Convert first char to charCode
    let first = arr[0].charCodeAt(0);
    // Swap 2nd and last characters
    [arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[1]];
    // Combine: charCode + rest of word
    return first + arr.slice(1).join('');
  }).join(' ');
}