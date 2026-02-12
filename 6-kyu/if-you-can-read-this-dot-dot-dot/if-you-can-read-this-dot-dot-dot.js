function toNato(words) {
    // you can access the preloaded NATO dictionary
    // NATO['A'] === 'Alfa', etc.
    return words.split('').map(x=> /[a-z]/i.test(x) ? ` ${NATO[x.toUpperCase()]}` : /\s+/.test(x) ? '' : ` ${x}`).join('').trim();
}