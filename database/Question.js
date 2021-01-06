const Sequelize = require('sequelize')
const connection = require('./database')

const Question = connection.define('questions', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Question.sync({ force: false }).then(() => {}).catch(erro => console.log(erro))

module.exports = Question