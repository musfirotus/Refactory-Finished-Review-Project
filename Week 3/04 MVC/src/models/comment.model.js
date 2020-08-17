module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comment', {
        content: {
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
        },
        email: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        post_id: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
    });
    return Comment;
}