
let PORT = process.env.PORT || 8003

require('./onChain')
require('./reactions')

import express from 'express'
import path from "path"
import socketIo from 'socket.io'
import dctrlDb from './dctrlDb'
import state from './state'
import exchangeRate from './exchangeRate'
import { initializeWatchedMembersAddresses } from './onChain/currentAccounts'
import socketProtector from 'socketio-auth'

import reactions from './reactions'

import applyRouter from './router'
import { socketAuth } from './auth'

const app = express()
applyRouter(app)

dctrlDb.startDb( (err, conn) => {

    state.initialize( err => {
        if (err) return console.log('state initialize failed:', err)
        console.log('state initialized!', state.pubState )

        exchangeRate.watchSpot()
        initializeWatchedMembersAddresses()

        // now we listen on the changefeed and keep the state up to date
        const evStream = dctrlDb.changeFeed.onValue( ev => {
            state.applyEvent(state.serverState, ev)
        })
        .onValue(reactions)

        const server = app.listen(PORT, err => {
            console.log("Listening on port", PORT)

            const io = socketIo(server)

            socketProtector(io, {
                authenticate: socketAuth,
                // TODO:
                // postAuthenticate:
                // disconnect:
                // timeout:
            })

            const filteredStream = evStream
                .map(state.removeSensitive)
                .onValue( ev => {
                    state.applyEvent(state.pubState, ev)
                    console.log('emitting event')
                    io.emit('eventstream', ev)
                })

        })
    })
})
