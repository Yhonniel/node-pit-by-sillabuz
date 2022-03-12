const sericeServer = require('./server.service')

const start = async ()  => {
    try {
        await sericeServer.initialize()
    }catch (err) {
        console.log(`An error has happend: ${err}`)
    }
}

module.exports = {start}