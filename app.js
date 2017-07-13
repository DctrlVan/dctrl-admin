// Admin Server
const request = require('superagent')
const express = require('express')
const app = express()
const path = require("path")
const uuidV1 = require('uuid/v1')
const bodyParser = require('body-parser')
const multer = require('multer')
const config = require('./conf')
const dbQueries = require('./rethinkdbQueries')

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


function buildResCallback(res){
    return (err, brainResponse) => {
        if (err || res.body.error || !brainResponse) {
            console.log('returning error')
            res.send('brain error')
        } else {
          console.log("sending", {brainResponse: brainResponse.body})
          res.send(brainResponse.body)
        }
    }
}

app.get('/v1/member/:address', (req, res) => {
  dbQueries.getEventsForAddress(req.params.address, (err, history)=> {
      console.log('replying with:', history)
      res.json(history)
  })

})

app.post('/new_member', (req, res) => {
  console.log("/new_member", req.body)

  newMember(
    req.body.name,
    req.body.email,
    req.body.fob,
    req.body.address,
    buildResCallback(res)
  )
})

app.post('/member_paid', (req, res) => {
  console.log("/member_paid", req.body)
  memberPaid(
    req.body.address,
    req.body.amount,
    req.body.notes,
    buildResCallback(res)
  )
})

app.post('/member_charged', (req, res) => {
  console.log("/member_charged", req.body)
  memberCharged(
    req.body.address,
    req.body.amount,
    req.body.notes,
    buildResCallback(res)
  )
})

app.post('/member_deactivate', (req, res) => {
  console.log("/member_deactivate", req.body)
  let address = req.body.address
  memberDeactivate( address, buildResCallback(res) )
})

app.post('/cash_expense', (req, res) => {
  let amount = req.body.amount
  let notes = req.body.notes
  cashExpense(amount, notes, buildResCallback(res))
})

app.post('/cash_received', (req, res) => {
  let amount = req.body.amount
  let notes = req.body.notes
  cashReceived(amount, notes, buildResCallback(res) )
})

app.post('/create_bounty', (req, res) => {
    console.log("resbody", req.body)
    let name = req.body.name
    let description = req.body.description
    let value = req.body.value
    let fob = req.body.fob
    bountyCreate(name, description, value, fob, buildResCallback(res) )
})

app.post('/claim_bounty', (req, res) => {
    console.log("resbody", res.body)
    //TODO finish
    let bountyId = "4f37e360-4caf-11e7-ae6e-e9ad780f3651"
    let address = "3EerW4nQeMRJUTjM8UBbsdQPZxDA3VKdGX"
    bountyClaim( bountyId, address, buildResCallback(res) )
})

app.get('/current_state', (req, res) => {
  request
    .get(config.brainLocation)
    .end((err, res2) => {
      if (err) {
        console.log(err)
        return null
      }
      res.json(res2.body)
    })
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
})

let PORT = process.env.PORT || 8003
app.listen(PORT, err => {
  console.log("Listening on port", PORT);
});

function newMember(name, email, fob, address, callback) {
  let newEvent = {
    action: {
      type: "member-created",
      address: address,
      fob: fob,
      'active?': true,
      balance: "0",
      name: name,
      email: email
    }
  }
  memberPost(newEvent, callback)
}

function memberPaid(address, amount, notes, callback) {
  let newEvent = {
    action: {
      type: "member-paid",
      address,
      amount: amount.toString(),
      "cash?": true,
      notes
    }
  }
  memberPost(newEvent, callback)
}

function cashReceived(amount, notes, callback) {
  let newEvent = {
    action: {
      type: "cash-increase",
      amount: amount.toString(),
      notes
    }
  }
  cashPost(newEvent, callback)
}

function cashExpense(amount, notes, callback) {
  let newEvent = {
    action: {
      type: "cash-decrease",
      amount: amount.toString(),
      notes
    }
  }
  cashPost(newEvent, callback)
}

function memberCharged(address, amount, notes, callback) {
  let newEvent = {
    action: {
      type: "member-charged",
      address,
      amount,
      notes
    }
  }
  memberPost(newEvent, callback)
}

function memberDeactivate(address, callback) {
  let newEvent = {
    action: {
      type: "member-deactivated",
      address
    }
  }
  memberPost(newEvent, callback)
}

function bountyCreate(name, description, value, fob, callback) {
  let newEvent = {
    action: {
      type: "bounty-created",
      name,
      description,
      value,
      fob,
      'bounty-id': uuidV1(),
      'last-claimed': Date.now().toString(),
      address: "",
      notes: "dctrl-admin"
    }
  }
  console.log("sending:", newEvent)
  bountyPost(newEvent, callback)
}

function bountyClaim(bountyId, address, callback){
  // TODO: Check the previous timestamp on the claim
  let newEvent = {
    action: {
      type: "bounty-claimed",
      'bounty-id': bountyId,
      address,
      notes: "dctrl-admin"
    }
  }
  console.log("sending:", newEvent)
  bountyPost(newEvent, callback)
}


function memberPost(data, callback) {
  request
    .post(config.brainLocation + "members")
    .send(data)
    .end(callback)
}

function bountyPost(data, callback) {
  request
    .post(config.brainLocation + "bounties")
    .send(data)
    .end(callback)
}

function cashPost(data, callback) {
  request
    .post(config.brainLocation + "cash")
    .send(data)
    .end(callback)
}
