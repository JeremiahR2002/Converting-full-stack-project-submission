require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const router = require('./controllers/router')


 app.use('/router', router)

app.get('/', (req, res) => {
    res.render('SUP G')
})

app.get('*', (req, res) => {
    res.render()
})

app.get('*', (req, res) => {
    res.render('<h1>404 Page </h1>')
})

app.listen(process.env.PORT, () => {
    console.log("I am alive port " + process.env.PORT)
  })