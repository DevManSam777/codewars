function lettersToNumbers(s) {
    const dictionary = Object.fromEntries(
        Array.from({length: 62}, (_, i) =>
            i < 26 ? [String.fromCharCode(i + 65), 2 * i + 2] :
            i < 52 ? [String.fromCharCode(i - 26 + 97), i - 26 + 1] :
            [i - 52, i - 52]
        )
    )
    return s.split("").reduce((acc, cur) => acc + (dictionary[cur] ?? 0), 0)
}