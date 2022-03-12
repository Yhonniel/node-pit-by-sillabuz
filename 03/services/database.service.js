require('dotenv').config()
const mongoose = require('mongoose')

let user = (process.env.DB_USER || 'demo')
let passwd = (process.env.DB_PASSWD || 'demo')
let host = (process.env.DB_HOST || '127.0.0.1')
let port = (process.env.DB_PORT || '27017')
let name = (process.env.DB_NAME || 'demo')

const MONGO_URI = `mongodb://${user}:${passwd}@${host}:${port}/${name}`

const initialize = async () => {
    const options = {}

    console.log(`MONGO URI ${MONGO_URI}`)
    mongoose.Promise = global.Promise
    mongoose.connect(MONGO_URI, options, callbackConnect)
}

function callbackConnect(err) {
    if (err)
        console.log(`Connection: ${err}`)
    else
        console.log(`Connection: Success!`)
}

module.exports = {initialize}
