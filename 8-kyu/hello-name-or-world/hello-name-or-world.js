function hello(name) {
  if (!name) {
    return "Hello, World!"
  } else {
    let firstLetter = name[0].toUpperCase();
    let rest = name.slice(1).toLowerCase();
    return `Hello, ${firstLetter + rest}!`
  }
}
​