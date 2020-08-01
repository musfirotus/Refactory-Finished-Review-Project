const censor = (text, censoredWords, censorSymbol = '#') => {
    return text.split(' ')
        .map(txt => {
            if (censoredWords.includes(txt.toLowerCase())) {
                return txt.split('')
                    .map(no => censorSymbol)
                    .join('')
            } else {
                return txt;
            }
        })
        .join(" ")
}
console.log(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi']));
console.log(censor('Pada hari Minggu saya tidur siang.', ['minggu', 'tidur'], '*'));
module.exports = censor;