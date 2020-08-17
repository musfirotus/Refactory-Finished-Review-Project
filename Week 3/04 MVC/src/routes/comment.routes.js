module.exports = app => {
    const comments = require('../controllers/comment.controller.js');
    let router = require('express').Router();

    // Create a new comment
    router.post('/', comments.create);
    
    app.use('/comment', router);
}