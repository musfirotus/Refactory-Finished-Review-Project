const { Sequelize } = require('sequelize');
const log = () => { console.log('Connected!\n') }
const db = new Sequelize('todolist', 'root', '200801', {
  host: 'localhost',
  dialect: 'mysql',
  logging: log()
});

module.exports = db;