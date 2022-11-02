require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const router = require('./controller/router')

app.use(express.json())


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  
app.use('/quizzes', router)

app.use(express.static(path.join(__dirname, 'Quiz_App-Frontend', 'build')))


app.listen(process.env.PORT, () => {
    console.log("I am alive port " + process.env.PORT)
  })