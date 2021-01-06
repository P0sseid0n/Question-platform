const Sequelize = require('sequelize')

const connection = new Sequelize('questiontable','root','PASSWORD', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection