module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        tags: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        author_id: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
    });
    return Post;
}