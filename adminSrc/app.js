// Admin Server
// require("../bitcoinSrc") // initialize address watching
let PORT = process.env.PORT || 8003

const express = require('express')
const path = require("path")
const app = express()
const socketIo = require('socket.io')
const dctrlDb = require('./dctrlDb')

const applyRouter = require('./router')

applyRouter(app)

const server = app.listen(PORT, err => {
    console.log("Listening on port", PORT)
})

const io = socketIo(server)
io.sockets.on('connection', function(socket){
    dctrlDb.changeFeed.onValue(ev => {
        socket.emit('eventstream', ev);
    })
})
