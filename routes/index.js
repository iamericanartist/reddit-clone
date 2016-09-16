'use strict'

const { Router } = require('express')
const router = Router()

const newPost = require('../models/newPost')

router.get('/', (req, res) => {
  newPost
  .find()
  .then((returnedData) => {
  // const returnedData = newPost.find({ title: / /}, {"title": "/ /", "link": "/ /", "image": "/ /", _id: 0 })
  // .then((returnedData) => console.log("returned data from above: ", returnedData))
    res.render('index', {returnedData})
  })
})

router.get('/newPost', (req, res) =>
  res.render('newPost', { page: 'New Post'})
)

router.post('/newPost', (req, res, err) =>
  newPost
    .create(req.body)
    .then(() => res.redirect('/'))
    .catch(err)
)

module.exports = router
