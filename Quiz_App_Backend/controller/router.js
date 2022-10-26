const { urlencoded } = require('express');
const express = require('express')
const router = express.Router()

const MongoNames = require('../models/Names');
const MongoQuestion = require('../models/Question');

router.fetch(url)
});

router.get('/', (req, res) => {
    db.Router.find()
    .then((router) => {
      res.render('router/index', { router })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Router.create(req.body)
    .then(() => {
        res.redirect('/router')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

  router.get('/Name', (req, res) => {
    res.render('models/Name')
  })

  router.get('/result', (req, res) => {
    res.render('result')
  });
  
  router.get('/Question', (req, res) => {
    res.render('models/Question')
  })
  

module.exports = router