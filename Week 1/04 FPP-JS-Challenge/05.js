const number = [...Array(1001).keys()];
const evens = number.filter((x) => x % 2 === 0);
const odds = number.filter((x) => x % 2 === 1);
const multiply5 = number.map(x => x * 5);
const prime = number.filter((x) => {
    for (i = 2; x > i; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return x > 1;
});

console.log('Bilangan Genap :\n' + evens);
console.log('Bilangan Ganjil :\n' + odds);
console.log('Bilangan multiply5 :\n' + multiply5);
console.log('Bilangan Prima :\n' + prime);
const prime100 = prime.splice(24);
console.log('Bilangan Prima Kurang dari 100 :\n' + prime);