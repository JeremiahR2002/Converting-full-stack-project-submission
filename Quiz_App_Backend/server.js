require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  

app.get('/', (req, res) => {
    res.send('SUP G')
})

app.listen(process.env.PORT, () => {
    console.log("I am alive port " + process.env.PORT)
  })