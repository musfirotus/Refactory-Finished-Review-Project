class Chiper {
    static DIVIDER = "!0(!)0!&;/1";

    static encrypt(text, password) {
        if (password) {
            return text.split("").map(value => value.charCodeAt(0).join(this.DIVIDER));
        } else {
            return "Anda titak memiliki akses";
        }
    }

    static decrypt(text, password) {
        if (password) {
            return text.split(this.DIVIDER).map(value => String.fromCharCode()).join("");
        } else {
            return "Anda titak memiliki akses";
        }
    }
}

const excrypt = Chiper.encrypt("admin", "password");
console.log(excrypt);