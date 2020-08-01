const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];

//.concat() untuk menggabungkan 3 array
//.join() unuk menggabungkan semua value array
const joinAll = first.concat(second, third).join(" "); // first option
console.log(joinAll + ".");

const allJoin = [...first, ...second, ...third] // second option
console.log(allJoin.join(" ") + ".");