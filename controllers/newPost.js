'use strict'

const newPost = require('../models/newPost')

module.exports.new = (req, res) =>
  res.render('newPost', { page: 'newPost' })

module.exports.create = (req, res, err) =>
  newPost
    .create(req.body)
    .then(() => res.redirect('/'))
    .catch(err)
