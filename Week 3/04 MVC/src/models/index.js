const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASS, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// author models
db.authors = require('./author.model.js')(sequelize, Sequelize);

// post models
db.posts = require('./post.model.js')(sequelize, Sequelize);

// comment models
db.comments = require('./comment.model.js')(sequelize, Sequelize);

module.exports = db;