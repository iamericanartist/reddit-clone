'use strict'

const { Router } = require('express')
const router = Router()

const newPost = require('../models/newPost')

router.get('/', (req, res) =>
  res.render('index')
)

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
