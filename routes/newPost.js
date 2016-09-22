'use strict'

const { Router } = require('express')

const newPost = require('../controllers/newPost')

const router = Router()

router.get('/newPost', newPost.new)
router.post('/newPost', newPost.create)

module.exports = router
