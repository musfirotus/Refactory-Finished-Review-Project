// Code by Musfirotus Sa'adah
const { program } = require("@caporal/core");

program.version("1.0.0").description("Aplikasi String Transformation");

program
    // LowerCase Command
    .command("lowercase", "Konversi ke lowercase")
    .argument("<lowercase>", "Isi kalimat yang akan dikonversi.")
    .action(({ args }) => {
        console.log(`Konversi LowerCase "${args.lowercase}" = ${args.lowercase.toLowerCase()}`);
    })

    // UpperCase Command
    .command("uppercase", "Konversi ke uppercase")
    .argument("<uppercase>", "Isi kalimat yang akan dikonversi.")
    .action(({ args }) => {
        console.log(`Konversi Uppercase "${args.uppercase}" = ${args.uppercase.toUpperCase()}`);
    })

    // Capitalize Command
    .command("capitalize", "Konversi ke capital")
    .argument("<capital>", "Isi kalimat yang akan dikonversi.")
    .action(({ args}) => {
        const capital = (str) => {
            const capitalized = str
                                .toLowerCase()
                                .replace(/\w\S*/g, (x) => (x.replace(/^\w/, (y) => y.toUpperCase())));
            return capitalized;
        }
        console.log(`Konversi Capital "${args.capital}" = ${capital(args.capital)}`)
    });

program.run();

// How to run in my Windows 10 :

// node 01.js lowercase "I aM CrAzY TeXT"
// info: Konversi LowerCase I aM CrAzY TeXT = i am crazy text

// node 01.js uppercase "I aM CrAzY TeXT"
// info: Konversi Uppercase I aM CrAzY TeXT = I AM CRAZY TEXT

// node 01.js capitalize "I aM CrAzY TeXT"
// info: Konversi Capital I aM CrAzY TeXT = I Am Crazy Text