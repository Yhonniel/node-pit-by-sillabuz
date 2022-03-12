const serviceServer = require('./server.service')

const start = async ()  => {
    try {
        await serviceServer.initialize()
    }catch (err) {
        console.log(`An error has happend: ${err}`)
    }
}

module.exports = {start}