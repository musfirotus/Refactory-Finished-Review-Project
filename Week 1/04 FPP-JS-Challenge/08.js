class Str {
  static lower(str) {
    console.log(str.toLowerCase());
  }

  static upper(str) {
    console.log(str.toUpperCase());
  }

  static capitalize(str) {
    console.log(str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '));
  }

  static reverse(str) {
    console.log(str.split("").reverse().join(""));
  }

  static contains(str, key) {
    if (typeof key === "string") {
      console.log(str.includes(key));
    }

    if (Array.isArray(key)) {
      console.log(key.some((value) => str.includes(value)));
    }
  }

  static random(length = 16) {
    const r = Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    console.log("random", r);
  }

  static slug(text, hubung = '-') {
    const h = text.toString().toLowerCase().replace(/\s+/g, hubung) // Ganti spasi dengan -
      .replace(/[^\w\-]+/g, '') // Hapus semua karakter non-word
      .replace(/\-\-+/g, hubung)
      .replace(/^-+/, '')
      .replace(/-+$/, '');
    console.log(h);
  }

  static count(str) {
    console.log(str.length);
  }

  static countWords(str) {
    const h = str.split(' ')
      .filter(function (n) {
        return n != ''
      })
      .length;
    console.log(h);
  }

  static trim(str, end = 100 - 1, con = '...') {
    if (str != text) console.log(str.substring(0, end));
    else console.log(str.substring(str, end) + con);
  }

  static trimWords(str, end = 31 - 1, con = '...') {
    if (str != text) console.log(str.split(" ").splice(0, end).join(" "));
    else console.log(str.split(" ").splice(0, end).join(" ") + con);
  }
}

const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

Str.lower('MAKAN');
Str.upper('malam')
Str.capitalize('saya ingin makan')
Str.reverse('kasur')
Str.contains('Saya ingin makan sate', 'makan')
Str.contains('Saya ingin makan sate', 'rujak')
Str.contains('Saya ingin makan sate', ['sate', 'rujak'])
Str.random()
Str.random(6)
Str.random(32)
Str.slug(title)
Str.slug(title, '_')
Str.count('lorem ipsum')
Str.countWords('lorem ipsum')
Str.trim('Less than 100 characters')
Str.trim(text)
Str.trim(text, 20)
Str.trim(text, 20, '·····')
Str.trimWords('Less than 30 characters')
Str.trimWords(text)
Str.trimWords(text, 3)
Str.trimWords(text, 3, '·····')