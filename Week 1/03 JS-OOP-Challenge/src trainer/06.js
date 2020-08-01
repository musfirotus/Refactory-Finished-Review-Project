class Auth {
    static account;
    static login(auth) {
        if (auth.username && auth.password) {
            this.account = auth;
        } else {
            console.log("Username dan password tidak boleh kosong");
        }
    }
    static validate(auth) {
        if (auth.username && auth.password) {
            console.log("Akun ditemukan");
        } else {
            console.log("Akun tidak ditemukan");
        }
    }
    static logout() {
        this.account = undefined;
    }
    static
}