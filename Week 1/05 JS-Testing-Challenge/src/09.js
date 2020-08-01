const symmetrical = sym => {
    const str = sym.toString();
    const strSym = sym.toString()
        .split('')
        .reverse()
        .join('');
    if (str === strSym) {
        return true
    } else {
        return false
    }
}
module.exports = symmetrical;