// Code by Musfirotus Sa'adah
const { program } = require("@caporal/core");

program.version("1.0.0").description("");

program
    // Check Palindrome
    .command("palindrome", "Palindrome")
    .argument("<palindrome>", "Isi kalimat yang ingin dicek.")
    .action(({ args = "" }) => {
        const str = args.palindrome.replace(/\W/g, "").toLowerCase();
        const reversed = str.split("").reverse().join("");
        if (str == reversed) {
            console.log(`String: "${args.palindrome}"\nIs palindrome? Yes`);
        } else if(str != reversed){
            console.log(`String: "${args.palindrome}"\nIs palindrome? No`);
        }
    })

program.run();

// How to run in my Windows 10 :

// node 03.js palindrome "Saya ingin pergi ke pasar"
// String: "Saya ingin pergi ke pasar"
// Is palindrome? No

// node 03.js palindrome "Kasur ini rusak"
// String: "Kasur ini rusak"
// Is palindrome? Yes

// node 03.js palindrome "Ibu Ratna antar ubi"
// String: "Ibu Ratna antar ubi"
// Is palindrome? Yes

// node 03.js palindrome "Aku suka rajawali, bapak. Apabila wajar, aku suka."
// String: "Aku suka rajawali, bapak. Apabila wajar, aku suka."
// Is palindrome? Yes