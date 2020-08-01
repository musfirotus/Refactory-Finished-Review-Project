// Contoh 1
// class User {
//     constructor(username, name, email, password) {
//         this.username = username
//         this.name = name
//         this.email = email
//         this.password = password
//     }
// }

// // Usage
// const user = new User('mul14', 'Mulia', 'email@example.com', 'S3cR3T')


// Contoh 2
class User {
    setUsername(username) {
        this.username = username
    }

    setName(name) {
        this.name = name
    }

    setEmail(email) {
        this.email = email
    }

    setPassword(password) {
        this.password = password
    }
}

// Usage
const user = new User()
user.setUsername('mul14')
user.setName('Mulia')
user.setEmail('email@example.com')
user.setPassword('S3cR3T')
console.log(user);