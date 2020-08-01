// Code by Musfirotus Sa'adah
const { program } = require("@caporal/core");

program.version("1.0.0").description("");

program
    // Randon Alphanumeric
    .command("random", "Random Alpanumeric")
    .option("--leng <number>", "Random with Length", { default:32 })
    .option("--letters <boolean>", "Random with Letters", { default:true })
    .option("--numbers <boolean>", "Ranodm with Numbers", { default:true })
    .option("--uppercase <boolean>", "Random with Uppercase", { default:false })
    .option("--lowercase <boolean>", "Ranodm with Lowercase", { default:false })
    .action(({ options }) => {
        let c = "abcdefghijklmnopqestuvwxyz1234567890";
        if(!options.letters) c = c.replace(/[A-Za-z]/g,"");
        if(!options.numbers) c = c.replace(/[0-9]/g,"");
        c = c.split('')
        let output = "";
        // console.log(options.length)
        while (output.length < options.leng) {
            let sizeRandom = options.uppercase ? "toUpperCase" : options.lowercase ? "toLowerCase" : Math.floor(Math.random() * 2) === 1 ? "toUpperCase" : "toLowerCase";
            output += c[Math.floor(Math.random() * c.length)][sizeRandom]();
        }
        // console.log(options.letters)
        console.log(output)
    });

program.run();

// ./app.js random --numbers=false --lowercase --length=20
// # Output ljmuoyopwxcvhycowqqi

// How to run in my Windows 10 : Example :

// node 05.js random
// KNEywlHnc0UeCLQmKg1x7jVb21JMbzIC

// node 05.js random --leng 10
// Sl5P8YPD3V

// node 05.js random --letters false
// 05792273606248734996506976356164

// node 05.js random --numbers false
// VtjdPvpUlvAjAJKzGcHVLGxJWPefUUPS

// node 05.js random --uppercase
// QD9L9CW8EI0DEBQ8VDG2X4UU3OLAQA43

// node 05.js random --numbers false --lowercase --leng 20
// gdppmqumqyqvvulvwwgg