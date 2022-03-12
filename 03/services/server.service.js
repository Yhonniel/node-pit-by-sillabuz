const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Imports

const routeWeb = require('../routes')
const routeAPI = require('../routes/api')

const app = express()
const server = http.createServer(app)

// cors
app.use(cors())

// Middleware
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

// routes
app.use('/', routeWeb)
app.use('/api', routeAPI)


const initialize = async () => {
    const promise = new Promise((resolve, reject) => {
        app.listen(process.env.PORT || 3000)
            .on('listening', () => {
                console.log(`Server is running on port ${process.env.PORT || '3000'} `)
                resolve()
            })
            .on('error', (err) => {
                console.log(`Error in server ${err}`)
                reject(err)
            })

        server.listen()
        Promise.resolve()
    })

    await promise

}

module.exports = {initialize, app}

