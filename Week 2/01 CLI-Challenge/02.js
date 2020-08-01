// Code by Musfirotus Sa'adah
const { program } = require("@caporal/core");

program.version("1.0.0").description("Arithmetic");

program
    // Add Command
    .command("add", "Penjumlahan")
    .argument("<add...>", "Isi angka yang ingin dijumlahkan.")
    .action(({ args }) => {
        const s = args.add.reduce((acc, val) => acc + val);
        console.log(`Hasil Penjumlahan [${args.add}] =  ${s}`)
    })

    // Subtract 10 2 4 = 4
    .command("subtract", "Pengurangan")
    .argument("<subtract...>", "Isi angka yang ingin dikurangkan.")
    .action(({ args }) => {
        const s = args.subtract.reduce((acc, val) => acc - val);
        console.log(`Hasil Pengurangan [${args.subtract}] =  ${s}`)
    })

    // Multiply 3 5 8 = 120
    .command("multiply", "Perkalian")
    .argument("<multiply...>", "Isi angka yang ingin dikalikan.")
    .action(({ args }) => {
        const s = args.multiply.reduce((acc, val) => acc * val);
        console.log(`Hasil Perkalian [${args.multiply}] =  ${s}`)
    })

    // Divide 100 5 2 = 10
    .command("divide", "Pembagian")
    .argument("<divide...>", "Isi angka yang ingin dibagi.")
    .action(({ args }) => {
        const s = args.divide.reduce((acc, val) => acc / val);
        console.log(`Hasil Pembagian [${args.divide}] =  ${s}`)
    })

program.run();

// How to run in my Windows 10 :

// node 02.js add 1 4 5 2 3
// Hasil Penjumlahan [1,4,5,2,3] =  15

// node 02.js subtract 10 2 4
// Hasil Pengurangan [10,2,4] =  4

// node 02.js multiply 3 5 8
// Hasil Perkalian [3,5,8] =  120

// node 02.js divide 100 5 2
// Hasil Pembagian [100,5,2] =  10