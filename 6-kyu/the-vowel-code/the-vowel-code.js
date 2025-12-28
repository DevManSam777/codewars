​
const vowels = {
    a: '1', e: '2', i: '3', o: '4', u: '5', 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'
  }
function encode(string) { 
  return string.replace(/([aeiou])/g, (match) => vowels[match]);
}
​
function decode(string) {
  return string.replace(/([1-5])/g, (match)=> vowels[match]);
}