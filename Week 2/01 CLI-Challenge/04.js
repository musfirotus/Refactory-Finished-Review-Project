const { program } = require('@caporal/core');

program
    // Use this command to obfuscate your input
    .command("obfuscate", "Meng-Obfuscate inputan.")
    .argument("<obfuscate>", "Isi inputan yang ingin di-obfuscate.")
    .action(({args}) =>{
        const obs = args.obfuscate
                        .split('')
                        .map(x => `&#${x.charCodeAt(0)};`)
                        .join('');
        console.log(obs);
    })

    // Use this command to check the ASCII is correct
    .command("defuscate")
    .argument("<defuscate>")
    .action(({args}) => {
        const defs = args.defuscate
                        .replace(/&#/g,'')
                        .split(';')
                        .map(x => String.fromCharCode(x))
                        .join('');
        console.log(defs)
    })

program.run()

// How to run in my Windows 10 :

// Obfuscate
// node 04.js obfuscate "email@example.com"
// &#101;&#109;&#97;&#105;&#108;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;

// Defuscate
// node 04.js defuscate "&#101;&#109;&#97;&#105;&#108;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;"
// email@example.com