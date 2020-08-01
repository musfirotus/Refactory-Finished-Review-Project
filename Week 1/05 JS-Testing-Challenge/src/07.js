repeatLetter = (str, n) => str.trim()
    .split("")
    .map((x, i) => x == " " ? " " : x.repeat(n)).join("");
console.log(repeatLetter('Hello World! ', 2));
module.exports = repeatLetter;