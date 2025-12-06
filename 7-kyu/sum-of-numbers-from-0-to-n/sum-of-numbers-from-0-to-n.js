var SequenceSum = (function() {
  function SequenceSum() {}
​
  SequenceSum.showSequence = function(count) {
    // handle negative numbers
    if (count < 0) {
      return `${count}<0`;
    }
​
    // handle zero
    if (count === 0) {
      return "0=0";
    }
​
    // handle positive numbers
    let array = Array.from({length: count + 1}, (_, i) => i);
    let sum = array.reduce((acc, current) => acc + current, 0);
    let string = array.join("+");
    return string.concat(` = ${sum}`);
  };
  
  return SequenceSum;
​
})();
​
console.log(SequenceSum.showSequence(5));