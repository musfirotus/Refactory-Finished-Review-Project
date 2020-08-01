const data = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`

console.log("Aku ada " + data.match(/aku/gi).length)
console.log("Ingin ada " + data.match(/ingin/gi).length)
console.log("Dapat ada " + data.match(/dapat/gi).length)