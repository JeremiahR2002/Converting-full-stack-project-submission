const { urlencoded } = require('express');
const express = require('express')
const router = express.Router()

const MongoNames = require('../models/Names');
const MongoQuestion = require('../models/Question');



router.get('/', async (req,res) => {
  console.log('WE HIT /quiz route!!!')
  const allNames = await MongoNames.find()
  res.json(allNames)
});

router.post('/', (req, res) => {
  console.log('WE SMACKED THE ROUTE!!!', req.body)
    MongoNames.create(req.body)
    .then((newNameCreated) => {
        res.json(newNameCreated)
    })
    .catch(err => {
        console.log('err', err)
        res.json(err)
    })
  })


  

module.exports = router