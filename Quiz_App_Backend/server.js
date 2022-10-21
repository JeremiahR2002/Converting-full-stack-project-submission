require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()


app.listen(process.env.PORT, () => {
    console.log("I am alive port " + process.env.PORT)
  })