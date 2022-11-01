const { urlencoded } = require('express');
const express = require('express')
const router = express.Router()

const MongoNames = require('../models/Names');
const MongoComments = require('../models/Comments');
// const { default: AllPosts } = require('../../Quiz_App-Frontend/src/Components/allPosts');



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
  });

  router.get('/comment', async (req,res) => {
    console.log('WE HIT /comments route!!!')
    const allComments = await MongoComments.find()
    res.json(allComments)
  });
  
  router.post('/comment', async (req,res) => {
    console.log('req.body!!', req.body);
    const savedComment = await MongoComments.create(req.body);
    res.json(savedComment)
  })

  router.delete('/comment', async (req,res) => {
    console.log('req.body!!', req.body);
    const deletedComment = await MongoComments.deleteOne(req.body);
    res.json(deletedComment)
  })

  router.get('/cat', (req, res) => {
    res.json('router/cat')
  })

  router.get('/dog', (req, res) => {
    res.json('router/dog')
  })

  router.get('/sad', (req, res) => {
    res.json('router/sad')
  })

module.exports = router