const Sequelize = require('sequelize')
const connection = require('./database')

const Answer = connection.define('answers', {
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    answer: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Answer.sync({ force: false })

module.exports = Answer