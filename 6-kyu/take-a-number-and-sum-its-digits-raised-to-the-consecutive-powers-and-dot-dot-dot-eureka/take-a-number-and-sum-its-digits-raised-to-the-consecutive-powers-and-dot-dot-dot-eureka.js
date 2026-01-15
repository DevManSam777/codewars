function sumDigPow(a, b) {
  return Array.from({length: (b - a) + 1}, (_, i) => i + a)
    .filter(num => num === String(num)
            .split('')
            .reduce((acc, curr, i) => acc + curr**(i + 1), 0)
  );
}