const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const state = require('../state')

const membersApi = require('./membersApi')
const resourcesApi = require('./resourcesApi')
const tasksApi = require('./tasksApi')

const spec = require('../spec')
const fobtap = require('../fobtap')

const auth = require('../auth')

module.exports = function applyRouter(app){

    app.use(express.static(path.join(__dirname, '../../dist')))

    app.get('/state', (req, res) => {
        // TODO: split public / server state
        res.json(state.state)
    })

    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../dist/index.html'))
    })

    app.use(auth)

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(spec)   // handles event creation
    app.use(fobtap) // handles rfid scan devices 

    // TODO: replace with more generic db & state access
    membersApi(app)
    tasksApi(app)
    resourcesApi(app)

    app.post('/state', (req, res) => {
        res.json(state.state)
    })

}
