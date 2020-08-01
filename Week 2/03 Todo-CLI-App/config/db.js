const { Sequelize } = require('sequelize');

const koneksi = new Sequelize('todo', 'root', '200801', {
    host: 'localhost',
    dialect: 'mysql'
  });

(async () => {
    koneksi.authenticate()
        .then(() => console.log('Database connected.'))
        .catch(err => console.log('Koneksi Eror : ' + err))
})()

module.exports = koneksi;