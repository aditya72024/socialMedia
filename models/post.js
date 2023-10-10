const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Posts = sequelize.define('posts',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },
    postImage: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    postDescription: {
        type: Sequelize.STRING,
        allowNull: false,

    }

    
});

module.exports = Posts;