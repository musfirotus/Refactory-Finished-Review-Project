const arrayMirroring = (array) => [...array, ...array.reverse()];
console.log(arrayMirroring([1, 2, 3]));
module.exports = arrayMirroring;