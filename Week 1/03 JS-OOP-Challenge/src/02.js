// encryp dengan crypto
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

let arr = [{
        id: 1,
        name: "Fira",
        username: "HomeVase",
        password: "111",
        user: true,
    },
    {
        id: 2,
        name: "Rara",
        username: "Cookies",
        password: "222",
        user: false,
    },
];

class Cipher {
    constructor(username, password, name, status) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.status = status;
    }

    login() {
        for (let x in arr) {
            if (this.username == arr[x].username && this.password == arr[x].password) {
                this.status = true;
                if (this.status === true) {
                    console.log("Hai", arr[x].username, ", selamat datang kembali");
                }

            }

        }

    }
    encrypt(params) {
        let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
        let encrypted = cipher.update(params);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return {
            iv: iv.toString('hex'),
            encryptedData: encrypted.toString('hex')
        }
    }

    decrypt(params) {
        if (this.status === true) {
            let iv = Buffer.from(params.iv, 'hex');
            let encryptedText = Buffer.from(params.encryptedData, 'hex');
            let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            console.log("Secret message :", decrypted.toString());
        } else {
            console.log("Yah, login gagal! Coba lagi ya~");
            console.log("Coba cek username & password sesuai data user yaa~");
        }

    }
}

let data = "Ketika mimpimu yg begitu indah tak terwujud, yasudahlah~";
let user = new Cipher("HomeVase", "123", "Fira");

user.login();
data = user.encrypt(data);

user.decrypt(data);
console.log(data);