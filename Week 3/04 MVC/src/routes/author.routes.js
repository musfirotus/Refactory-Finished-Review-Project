module.exports = app => {
    const authors = require('../controllers/author.controller.js');
    let router = require('express').Router();

    // Create a new author
    router.post('/', authors.create);
    
    app.use('/author', router);
}