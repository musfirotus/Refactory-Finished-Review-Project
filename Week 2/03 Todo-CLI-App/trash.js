const { Sequelize } = require('sequelize');
const koneksi = require('../config/db');

const Todo = koneksi.define('todo', {
    item: Sequelize.TEXT,
    status: Sequelize.STRING
  });

module.exports = Todo;

program
    .command('todo clear', 'Delete all item')
    .action((args, option, logger) => {
        async function deleteRow() {
            
            let n = await List.destroy({ 
                where: {},
                truncate: true
            });
            logger.info(`Deleted all item`)
            koneksi.close();
        }
        const prompt = new Confirm('Are you sure want to delete?');
        prompt.ask(function(answer) {
            if (answer == true) {
                deleteRow();
            }
          });
        
    })