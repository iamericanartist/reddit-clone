'use strict'
const newPost = require('../models/newPost')

module.exports.index = (req, res, cb) => {
  newPost
    .find()
    .then(returnedData => {
      res.render('index', {returnedData})
    })
    .catch(cb)
}
