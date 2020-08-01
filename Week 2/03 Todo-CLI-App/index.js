const { Op } = require('sequelize')
const { program } = require('@caporal/core')
const { Todo, sequelize } = require('./models');
const db = require('./config/db')

program.version("1.0.0").description("ToDoList-CLI-APP");

const listTodo = async () => {
    const todoList = await Todo.findAll({raw:true});
    console.log("Todo List :");
    Object.values(todoList).forEach((lis) => {
        if(lis.cek == 'Done') console.log(`${lis.id}. ${lis.item}. (${lis.cek})`);
        else if(lis.cek == 'Undone' || lis.cek == '') console.log(`${lis.id}. ${lis.item}.`);
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
    // Show all todo list
    // How to run : node index.js todo list
    .command("todo list","show list")
    .action(async () => {
        await listTodo();
    })

    // Tambah data todo list
    // How to run : node index.js todo add <item>
    .command("todo add", "Tambah todo list")
    .argument("<item>", "list yang ingin ditambahkan")
    .action(async ({ args }) => {
        await Todo.create({ item: args.item, cek:"" });
        await listTodo();
    })

    // Edit data todo list
    // How to run : node index.js todo update <id> <item>
    .command("todo update", "Edit todo list")
    .argument("<id>", "Id yang ingin diubah")
    .argument("<item>", "Todo list baru")
    .action(async ({ args }) => {
        await Todo.update({ item: args.item }, {
            where: {
                id: args.id
            }
        });
        await listTodo();
    })

    // Hapus todo list
    // How to run : node index.js todo del <id>
    .command("todo del", "Hapus data todo list")
    .argument("<id>", "Id yang ingin dihapus")
    .action(async ({ args }) => {
        await Todo.destroy({
            where: { id: args.id }
        });
        await listTodo();
    })

program.run()