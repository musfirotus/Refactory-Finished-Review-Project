const db = require('../models');
const Post = db.posts;
const Op = db.Sequelize.Op;

class PostController {

    // Create new Post
    static async create(req, res) {
        const post = {
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags,
            status: req.body.status,
            createdAt: new Date(),
            updatedAt: new Date(),
            author_id: req.body.author_id
        }

        Post.create(post)
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

module.exports = PostController;