const { Op } = require('sequelize')
const { program } = require('@caporal/core')
const { Todo, sequelize } = require('./models');
const db = require('./config/db')

program.version("1.0.0").description("ToDoList-CLI-APP");

const listTodo = async () => {
    const todoList = await Todo.findAll({raw:true});
    console.log("Todo List :");
    Object.values(todoList).forEach(lis => {
        if(lis.cek == 'Done') console.log(`${lis.id}. ${lis.item}. (${lis.cek})`);
        else if(lis.cek == 'Undone') console.log(`${lis.id}. ${lis.item}.`);
        else console.log('Error!');
    })
    await sequelize.close()
    console.log('\nDisconnect!');
}

// Check if error
const error = (error, result)=>{
    console.log(error, result);
}

program
.command("todo list","show list")
.action(async () => {
    listTodo();
})

program.run()