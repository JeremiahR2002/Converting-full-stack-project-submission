const express = require('express')
const router = express.Router()

const { BlogPost } = require('../models')


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




module.exports = router