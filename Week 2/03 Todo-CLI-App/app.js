'use strict'
const { Sequelize } = require('sequelize');
const koneksi = require('./config/db');
const Todo = require('./models/Todo');
const { program } = require('@caporal/core');

program.version("1.0.0").description("ToDoList-CLI-APP");

program
    .command('todo list', 'Show all todo list in Database')
    .action(() => {
        (async () => {
            let todolist = await Todo.findAll({ raw: true });
            todolist.forEach(todo => {
                console.log(`${todo.id}. ${todo.item}. (${todo.status})`)
            })
            koneksi.close();
        })()
    })
    

program.run();