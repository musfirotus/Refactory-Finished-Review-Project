const db = require('../models');
const Comment = db.comments;
const Op = db.Sequelize.Op;

class CommentController {

    // Create new Comment
    static async create(req, res) {
        const comment = {
            content: req.body.content,
            status: req.body.status,
            createdAt: new Date(),
            updatedAt: new Date(),
            author_id: req.body.author_id,
            email: req.body.email,
            url: req.body.url,
            post_id: req.body.post_id
        }

        Comment.create(comment)
            .then((data) => {
                res.json({"data": data});
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || "Some error has uccured while creating post"
                });
            });
    }
    static async findAll(req, res) {
        
    }
    static async findOne(req, res) {
        
    }
    static async update(req, res) {
        
    }
    static async delete(req, res) {
        
    }
}

module.exports = CommentController;