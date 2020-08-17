const db = require('../models');
const Author = db.authors;
const Op = db.Sequelize.Op;

class AuthorController {

    // Create new author
    static async create(req, res) {
        const author = {
            username: req.body.username,
            password: req.body.password,
            salt: req.body.salt,
            email: req.body.email,
            profile: req.body.profile,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        Author.create(author)
            .then((data) => {
                res.send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || "Some error has uccured while creating author"
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

module.exports = AuthorController;