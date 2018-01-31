// Admin Server
// require("../bitcoinSrc") // initialize
// address watching
let PORT = process.env.PORT || 8003

const express = require('express')
const path = require("path")
const app = express()
const socketIo = require('socket.io')
const dctrlDb = require('./dctrlDb')
const state = require('./state')

const applyRouter = require('./router')

applyRouter(app)


dctrlDb.startDb( (err, conn) => {

    state.initialize()

    const server = app.listen(PORT, err => {
        console.log("Listening on port", PORT)
    })

    const io = socketIo(server)

    io.sockets.on('connection', function(socket){
      console.log('socket keys', Object.keys(socket))

      dctrlDb.changeFeed
          // TODO filter private details // secure to sessions
          .onValue(ev => {
                socket.emit('eventstream', ev)
          })
    })
})
