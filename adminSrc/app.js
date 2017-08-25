// Admin Server
// require("../bitcoinSrc") // initialize address watching
let PORT = process.env.PORT || 8003

const express = require('express')
const path = require("path")
const app = express()
const socketIo = require('socket.io')

app.use(express.static(path.join(__dirname, '../dist')));

const applyRouter = require('./router')
applyRouter(app)

const server = app.listen(PORT, err => {
    console.log("Listening on port", PORT)
})

const io = socketIo(server)

io.on('connection', function(socket){
    console.log('a user connected');

});
