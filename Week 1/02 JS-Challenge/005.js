const number = [...Array(1000 + 1).keys()];
const evens = number.filter(x => x % 2 === 0);
const odds = number.filter(x => x % 2 === 1);
const multiply5 = number.map(x => x * 5);
const prime = (number = 0) => {
    if (number < 2) {
      return false
    }
  
    for (let index = 2; index < number; index++) {
      if (number % index == 0) {
        return false;
      } else {
        continue;
      }
    }
    return true;
}

console.log('Bilangan Genap :\n' + evens);
console.log('Bilangan Ganjil :\n' + odds);
console.log('Bilangan multiply5 :\n' + multiply5);
console.log("Bilangan prima :\n" + (number.filter((value) => prime(value))));
console.log("Bilangan prima kurang dari 100 :\n" + (number.filter((value) => prime(value) && value < 100)));