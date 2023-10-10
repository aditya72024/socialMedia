const Sequelize = require('sequelize');
const sequelize = new Sequelize('posthandler','root','root',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;

