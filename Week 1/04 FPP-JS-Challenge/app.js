class Makhluk {
  constructor() {
    this.name = "Makhluk";
  }

  print() {
    console.log("HHHdhjbjbmnbk");
  }

  get alias() {
    return this.name;
  }
}

class MakhlukHidup extends Makhluk {
  static hello = "LL";

  static chaches;
  static get instance() {
    if (this.caches == undefined) {
      this.caches = new MakhlukHidup();
    }
    return this.caches;
  }

  constructor() {
    super();
    this.name = "Hidup";
  }
}

class MakhlukHidupNyata extends MakhlukHidup {
  constructor(name) {
    super();
    this.name = name;
  }
}

const makhlukHidupNyata = new MakhlukHidupNyata("Anggit");
const makhlukHidup = MakhlukHidup.instance;
const makhluk = new Makhluk();

if (makhlukHidup instanceof MakhlukHidupNyata) {
  console.log("Benar");
} else console.log("Salah");

console.log(makhlukHidupNyata.alias);
console.log(makhlukHidup.name);

console.log(
  "jkbjbjb"
    .split("")
    .map((value) => value.toUpperCase())
    .join("")
);

class Util {
  static char = "abcedfghijklmnopqrstuwxyz";
  static generetaToken(length = 16) {
    const data = [];

    for (let index = 0; index < length; index++) {
      data.push(this.char.charAt(Math.floor(Math.random() * this.char.length)));
    }

    return data.join("");
  }
}

const token = Util.generetaToken(128);

console.log(token);

class Account {
  setUsername(username) {
    this.username = username;
  }

  setPassword(password) {
    this.password = password;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  set accountPassword(password) {
    this.password = password;
  }

  set accountUsername(username) {
    this.username = username;
  }

  get accountPassword() {
    return this.password;
  }

  get accountUsername() {
    return this.username;
  }

  login() {
    if (this.username && this.password) {
      console.log("Anda berhasil login");
    } else {
      console.log("Username dan password tidak boleh kosong");
    }
  }
}

const account = new Account();

account.setPassword("");
account.password = "";
account.accountPassword = "";
account.setUsername("");
