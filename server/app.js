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


dctrlDb.startDb( (err, conn) => {

    state.initialize( err => {
        console.log('State initialized', state.state)

        const evStream = dctrlDb.changeFeed.onValue( state.applyEvent ) // updates server state

        applyRouter(app)

        const server = app.listen(PORT, err => {
            console.log("Listening on port", PORT)

            const io = socketIo(server)

            const filteredStream = evStream.log('filtering of ev todo').onValue(ev => {
                console.log('broadcasting event?', ev)
                io.emit('eventstream', ev)
            })

            // TODO
            io.sockets.on('connection', function(socket){
              // TODO: record connections?
              console.log('connection found')

            })
        })
    })
})


// seperate ioConfig
