const express = require('express')
const router = express.Router()

const blog = require('./blog.route')

router.use('/', blog)

module.exports = router