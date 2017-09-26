const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const state = require('../state')

const membersApi = require('./membersApi')
const resourcesApi = require('./resourcesApi')
const bountiesApi = require('./bountiesApi')
const dctrlApi = require('./dctrlApi')

module.exports = function applyRouter(app){
    app.use(express.static(path.join(__dirname, '../../dist')));

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    // dctrlApi(app)
    // bountiesApi(app)
    // membersApi(app)
    // resourcesApi(app)

    // TODO: clean/ remove ?
    app.get('/state', (req, res) => {
      res.json(state.getState())
    })

    // all other get requests serve the bundled app
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    })
}
