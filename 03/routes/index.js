
const express = require('express')
const router = express.Router()


router.get('/', index)
router.get('/ping', ping)


// 
function index(req, res){
    res.send('Is Running')
}

function ping(req, res){
    res.send('pong')
}

module.exports = router