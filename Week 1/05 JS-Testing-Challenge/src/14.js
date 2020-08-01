const isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);

console.log(isIsogram('gelas'));
console.log(isIsogram('makan'));
module.exports = isIsogram;