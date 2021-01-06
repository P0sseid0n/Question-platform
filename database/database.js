const Sequelize = require('sequelize')

const connection = new Sequelize('questiontale','root','PASSWORD', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection