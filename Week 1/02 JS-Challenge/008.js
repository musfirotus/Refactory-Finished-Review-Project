class Str {
    // constructor(lower, upper, capital) {
    //     this._lower = lower;
    //     this._upper = upper;
    //     this._capital = capital;
    // }

    static lower(str) {
        console.log(str.toLowerCase());
    }

    static upper(str) {
        console.log(str.toUpperCase());
    }

    static capitalize(str) {
        console.log(
            str.split(' ')
               .map((e) => e.toLowerCase().replace(e.charAt(0), e.charAt(0).toUpperCase()))
               .join(' ')
        );
    }

    static reverse(str) {
        console.log(str.split("").reverse().join(""));
    }

    static contains(str, key) {
        if (typeof key === "string") {
            return console.log(str.includes(key));
        }

        if (Array.isArray(key)) {
            return console.log(key.some((value) => str.includes(value)));
        }
    }

    static random(length = 16) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(result);
    }

    static slug(text, hubung = '-') {
        const slugged =  text.toString().toLowerCase().replace(/\s+/g, hubung) // Ganti spasi dengan -
            .replace(/[^\w\-]+/g, '') // Hapus semua karakter non-word
            .replace(/\-\-+/g, hubung)
            .replace(/^-+/, '')
            .replace(/-+$/, '');
        console.log(slugged);
    }

    static count(str) {
        console.log(str.length);
    }

    static countWords(str) {
        const string =  str.split(' ')
            .filter(function (n) {
                return n != ''
            })
            .length;
        console.log(string);
    }

    static trim(str, end = 100 - 1, con = '...') {
        if (str != text) console.log(str.substring(str, end));
        else console.log(str.substring(str, end) + con);
    }

    static trimWords(str, end = 31 - 1, con = '...') {
        if (str != text) console.log(str.split(" ").splice(0, end).join(" "));
        else console.log(str.split(" ").splice(0, end).join(" ") + con);
    }
}

const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

Str.lower('MAKAN')
Str.upper('malam');
Str.capitalize('saya ingin makan');
Str.reverse('kasur');
Str.contains('Saya ingin makan sate', 'makan');
Str.contains('Saya ingin makan sate', 'rujak');
Str.contains('Saya ingin makan sate', ['sate', 'rujak']);
Str.random();
Str.random(6);
Str.random(32);
Str.slug(title);
Str.slug(title, '_');
Str.count('lorem ipsum');
Str.countWords('lorem ipsum');
Str.trim('Less than 100 characters');
Str.trim(text);
Str.trim(text, 20);
Str.trim(text, 20, '·····');
Str.trimWords('Less than 30 characters');
Str.trimWords(text);
Str.trimWords(text, 3);
Str.trimWords(text, 3, '·····');