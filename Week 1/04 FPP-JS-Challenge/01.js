const checkPalindrome = (str = "") => {
    const small = str.replace(/\W/g, "").toLowerCase()
    const reverse = small.split("").reverse().join("")

    if (small === reverse) {
        console.log(`Great!! "${str}" is a Palindrome sentence!`);
    } else {
        console.log(`Sorry.. "${str}" is not a Palindrome sentence`);
    }
}

console.log(checkPalindrome("ibu ratna antar ubi"));
console.log(checkPalindrome("kasur ini rusak"));
console.log(checkPalindrome("A nut for a jar of tuna."));
console.log(checkPalindrome("Borrow or rob?"));
console.log(checkPalindrome("Was it a car or a cat I saw?"));
console.log(checkPalindrome("Yo, banana boy!"));
console.log(checkPalindrome("UFO ria?"));