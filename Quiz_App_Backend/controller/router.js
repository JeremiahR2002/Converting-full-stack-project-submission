const router = require('express').Router()

router.get('/', (req, res) => {
    db.Place.find()
    .then((router) => {
      res.render('router/index', { router })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/router')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

module.exports = router