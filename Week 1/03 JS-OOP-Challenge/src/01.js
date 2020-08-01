const crypto = require("crypto");

class Hash {
    static md5(text) {

        const md5 = crypto.createHash("md5");
        md5.update(text);
        console.log(md5.digest('hex'));
    }

    static sha1(text) {
        const sha1 = crypto.createHash("sha1");
        sha1.update(text);
        console.log(sha1.digest('hex'));
    }

    static sha256(text) {
        const sha256 = crypto.createHash("sha256");
        sha256.update(text);
        console.log(sha256.digest('hex'));
    }

    static sha512(text) {
        const sha512 = crypto.createHash("sha512");
        sha512.update(text);
        console.log(sha512.digest('hex'));
    }
}

Hash.md5('secret')
Hash.sha1('secret')
Hash.sha256('secret')
Hash.sha512('secret')