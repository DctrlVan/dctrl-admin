
let PORT = process.env.PORT || 8003

const express = require('express')
const path = require("path")
const socketIo = require('socket.io')
const dctrlDb = require('./dctrlDb')
const state = require('./state')

import socketProtector from 'socketio-auth'

const applyRouter = require('./router')

import { socketAuth } from './auth'

const app = express()
applyRouter(app)

dctrlDb.startDb( (err, conn) => {

    state.initialize( err => {
        console.log('State initialized server', state.serverState)
        console.log('public', state.pubState)

        // now we listen on the changefeed and keep the state up to date
        const evStream = dctrlDb.changeFeed.onValue( ev => {
            state.applyEvent(state.serverState, ev)
        }) // updates server state

        const server = app.listen(PORT, err => {
            console.log("Listening on port", PORT)

            const io = socketIo(server)
            socketProtector(io, {
                authenticate: socketAuth,
                // TODO
                // postAuthenticate:
                // disconnect:
                // timeout:
            })

            const filteredStream = evStream
                .map(state.removeSensitive)
                .onValue( ev => {
                    state.applyEvent(state.pubState, ev)
                    io.emit('eventstream', ev)
                })

        })
    })
})


// seperate ioConfig
