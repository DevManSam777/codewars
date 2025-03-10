function multiTable(number) {
  // Initialize as an empty array
    let tableString = []; 
  // loop through 1 - 10 and push to tableString 
    for (let i = 1; i <= 10; i++) {
    tableString.push(`${i} * ${number} = ${i * number}`);
  }
  // return string with '\n' as seperator to put each iteration on differnt row
    return tableString.join('\n');
}