const { Op } = require('sequelize')
const { program } = require('@caporal/core')
const { Todo, sequelize } = require('./models');
const db = require('./config/db')
const prompt = require('prompt-sync')({sigint: true});

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
        await Todo.create({ item: args.item, cek: "Undone" }, error);
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
        }, error);
        await listTodo();
    })

    // Hapus semua data todo list
    // How to run : node index.js todo clear
    .command("todo clear", "Hapus semua todo list")
    .action(async () => {
        const answer = prompt('Apakah Anda yakin menghapus semua todo list? (y/N) : ');
        if (answer == 'y' || answer == 'Y') {
            await Todo.destroy({
                where: {},
                truncate: true
            }, error);
            console.log('Data berhasil dihapus!');
            await listTodo();
        } else if(answer == 'n' || answer == 'N') {
            console.log('Batal menghapus!');
            await listTodo();
        } else {
            console.log(`Error : ${error}`);
            mongoose.disconnect();
        }
    })

    // Edit todo list menjadi 'Done'
    // How to run : node index.js todo done <id>
    .command("todo done", "Edit todo list menjadi 'Done'")
    .argument("<id>", "Id yang ingin diubah")
    .action(async ({ args }) => {
        await Todo.update({ cek: 'Done' }, {
            where: { id: args.id }
        }, error);
        await listTodo();
    })

    // Edit todo list menjadi 'Undone'
    // How to run : node index.js todo undone <id>
    .command("todo undone", "Edit todo list menjadi 'Undone'")
    .argument("<id>", "Id yang ingin diubah")
    .action(async ({ args }) => {
        await Todo.update({ cek: "Undone" }, {
            where: { id: args.id }
        }, error);
        await listTodo();
    })

program.run()