const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const questionModel = require('./database/Question')
const answerModel = require('./database/Answer')

connection.authenticate().then(() => console.log('Authenticated')).catch(erro => console.error(erro))

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',async (req, res) => {
    const questions = await questionModel.findAll({ raw: true, order: [
        ['id','DESC']
    ] })
    res.render('index', { questions })
})

app.get('/ask', (req, res) => {
    res.render('ask')
})

app.post('/sending', async (req,res) => {
    const { title, question, author } = req.body

    await questionModel.create({ title, question, author })

    res.redirect('/')
})

app.get('/question/:id', async (req,res) => {
    const question = await questionModel.findOne({ raw: true, where: { 'id': req.params.id }})
    if(!question) return res.redirect('/')

    const answers = await answerModel.findAll({ raw: true, where: { 'questionId': req.params.id } })

    res.render('question', { question, answers })
})

app.post('/reply', async (req,res) => {
    let { questionId, answer, author } = req.body

    await answerModel.create({ questionId, answer, author })

    res.redirect(`/question/${questionId}`)
})

app.listen(3000, erro => {
    if(erro) throw new Error(erro)
    console.log('Started')
})