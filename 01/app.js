// Vamos contruir nuestro primer servidor

// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hola mundo')
// }).listen(port)

// const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000

app.set('views', './' )
app.set('view engine', 'pug')
app.use(express.static('public'))

app.use('/static', express.static('public'))

// mongoose.connect('mongodb://localhost:27017/test')


app.get('/', (req, res) => {
   // res.send('Hello Silabuz!')
   res.render('index', { title: 'Hola Carnal', message: 'Que honda barrio!'})
})

app.get('/about', (req, res) => {
    res.send('Acerca de Nosotros')
})

app.get('/faq', (req, res) => {
    res.send('Preguntas Frecuentes')
})

app.get('/contact', (req, res) => {
    res.send('Contacto')
})

// RUTAS 
app.post('/user', function(req, res){
    res.send('USUARIO HTTP POST')
})
app.put('/user', function(req, res){
    res.send('USUARIO HTTP PUT')
})
app.delete('/user', function(req, res){
    res.send('USUARIO HTTP DELETE')
})


app.listen(port, () => {
    console.log(`Is running in port ${port}`)
})



 