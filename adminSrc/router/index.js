const express = require('express')
const path = require("path")

const eventApi = require('./eventApi')
const resourceApi = require('./resourceApi')

module.exports = function applyRouter(app){
    app.use(express.static(path.join(__dirname, '../../dist')));

    resourceApi(app)
    eventApi(app)

    // all other get requests serve the bundled app
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    })
}
