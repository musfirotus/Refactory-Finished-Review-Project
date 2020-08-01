let data = [{
        id: 1,
        name: "Fira",
        username: "HomeVase",
        pass: "111",
        user: true,
    },
    {
        id: 2,
        name: "Rara",
        username: "Cookies",
        pass: "222",
        user: false,
    },
];


class Auth {
    constructor(username, password, data) {
        this.data = data;
        this.username = username;
        this.password = password;
        this.status = false;
        this.current = "Tidak Ada Data";
        this.date = new Date().toLocaleString();
    }

    login() {
        for (let a in data) {
            if (this.username == data[a].username) {
                console.log(`Selamat datang ${data[a].username}`);
                this.status = true;
                this.current = data[a];
                return true;
            }
        }
        console.log("gagal login");
    }
    validate(name) {
        for (let a in data) {
            if (this.username == data[a].username) {
                console.log(`Tervalidasi! ${data[a].username} adalah user`);
                this.current = data[a];
                return true;
            }
        }
        console.log(true);
    }
    logout() {
        this.username = "";
        this.password = "";
        this.status = false;
        this.current = "Tidak ada data";
        console.log(`Anda Telah Logout`);
        this.date = new Date().toLocaleString();

    }
    user() {
        console.log(this.current);
    }

    id(id) {
        data.forEach((data) => {
            if (data.id === id) console.log(data);
        });
    }
    check() {
        let status =
            this.status === true ? "Akun tidak pernah Login" : "Akun pernah Login";
        console.log(status);
        return true;
    }
    guest() {
        console.log(this.status === false ? "Akun Sedang Logout" : "Akun Sedang Login");
        return false;
    }
    lastLogin() {
        console.log(`Login terakhir :`, this.status === true ? new Date().toLocaleString() : this.date);
    }
}
let auth = new Auth("HomeVase", "111", data);
auth.login();
auth.validate();
auth.logout();
auth.user();
auth.id(1);
auth.check();
auth.guest();
auth.lastLogin();
// auth.id(2);