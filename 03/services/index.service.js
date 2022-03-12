const serviceServer = require('./server.service')
const databaseServer = require('./database.service')

const start = async ()  => {
    try {
        await serviceServer.initialize()
        await databaseServer.initialize()
    }catch (err) {
        console.log(`An error has happend: ${err}`)
    }
}

module.exports = {start}