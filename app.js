// Server
const request = require('superagent')
const express = require('express')
const path = require("path")

// HTTP handlers
const bodyParser = require("body-parser")
const multer = require("multer")

const app = express()
const brainLocation = "http://192.168.0.127:3000/"

// outbound http client
app.use(express.static("dist"))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.post("/new_member", (req, res) => {
  console.log("/new_member")
  console.log("req body", req.body)
  newMember(
    req.body.name,
    req.body.email,
    req.body.fob,
    req.body.address,
    (err, data) => {
      console.log({ err, data })
      res.send( !!err )
    }
  )
})

app.get("/current_state", (req, res) =>
  request
    .get(brainLocation)
    .end((err, res2) => res.json(res2.body))
)

app.get("/*", (req,res) =>
  res.sendFile(
    path.join(__dirname, "/dist/index.html")
  )
)

let PORT = process.env.PORT || 8003

app.listen(
  PORT,
  err => console.log("Listening on port", PORT)
)

const chargeMember = (address, callback) =>
  memberPost(
    {
      action: {
        type: "member-charged",
        address,
        fob,
        'active?': true,
        balance: "0",
        name,
        email
      }
    },
    callback
  )

const newMember = (name, email, fob, address, callback) =>
  memberPost(
    {
      action: {
        type: "member-created",
        address,
        fob,
        'active?': true,
        balance: "0",
        name,
        email
      }
    },
    callback
  )

const memberPaid = (id, amount, currency, callback) =>
  memberPost(
    {
      action: {
        type: "member-created",
        address,
        fob,
        'active?': true,
        balance: "0",
        name,
        email
      }
    },
    callback
  )

const memberPost = (data, callback) =>
  request
    .post(brainLocation + "members")
    .send(data)
    .end(callback)
