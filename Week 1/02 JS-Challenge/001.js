function checkPldr(sentence) {
    const reg = /[\W_]/g;

    const toSmall = sentence.toLowerCase().replace(reg, "");

    const reverse = toSmall.split("").reverse().join("");
    if (reverse === toSmall) {
        console.log(`Great!! "${sentence}" is a Palindrome sentence!`);
    } else {
        console.log(`Sorry.. "${sentence}" is not a Palindrome sentence`);
    }
}

checkPldr("Aku suka rajawali, bapak. Apabila wajar, aku suka.");
checkPldr("Anaknya beternak ayam.");
checkPldr("Kasur Nababan rusak.");
checkPldr("Dia mengirimi saya surat.");
checkPldr("Dia haid.");