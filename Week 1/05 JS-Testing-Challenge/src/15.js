const roman = (val) => {
    const myMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    return val
        .split("")
        .map((rmn) => myMap[rmn])
        .reduce((acc, val) => acc + val);
};
module.exports = roman;
// console.log(roman('I'));
// console.log(roman('II'));
// console.log(roman('III'));
// console.log(roman('V'));
// console.log(roman('VI'));
// console.log(roman('X'));
// console.log(roman('L'));
// console.log(roman('C'));
// console.log(roman('D'));
// console.log(roman('M'));
// console.log(roman('MMXVIII'));