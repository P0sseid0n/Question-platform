const Sequelize = require('sequelize')

const connection = new Sequelize('questionplatform','root','PASSWORD', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection