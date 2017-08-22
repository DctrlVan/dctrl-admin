// Admin Server

const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const multer = require('multer')
const applyRouter = require('./router')

require("../bitcoinSrc") // initialize address watching
const app = express()
let PORT = process.env.PORT || 8003

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

applyRouter(app)

app.listen(PORT, err => {
  console.log("Listening on port", PORT);
});
