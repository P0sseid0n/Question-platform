const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const questionModel = require('./database/Question')

connection
    .authenticate()
    .then(() => {
        console.log('Authenticated')
    })
    .catch(erro => {
        console.error(erro)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/question', (req, res) => {
    res.render('perguntar')
})

app.post('/sending', async (req,res) => {
    const { title, question, author } = req.body

    await questionModel.create({ title, question, author })

    res.redirect('/')
})



app.listen(3000, erro => {
    if(erro) throw new Error(erro)
    console.log('Started')
})