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
        console.log({err,brainResponse})
        if (err || !brainResponse) {
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
  memberCharged(
    req.body.address,
    req.body.amount,
    req.body.notes,
    buildResCallback(res)
  )
})

app.post('/member_deactivate', (req, res) => {
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
    let name = req.body.name
    let description = req.body.description
    let value = req.body.value
    let boost = req.body.boost
    let cap = req.body.cap
    let fob = req.body.fob
    bountyCreate(name, description, value, cap, boost, fob, buildResCallback(res) )
})

// app.post('/claim_bounty', (req, res) => {
//     console.log("resbody", res.body)
//     //TODO finish
//     let bountyId = "4f37e360-4caf-11e7-ae6e-e9ad780f3651"
//     let address = "3EerW4nQeMRJUTjM8UBbsdQPZxDA3VKdGX"
//     bountyClaim( bountyId, address, buildResCallback(res) )
// })

app.post('/stock_supplies', (req, res) => {
    // need to expand types
    let amount = req.body.amount
    let notes = req.body.notes
    stockSupplies(amount, notes, buildResCallback(res))
})

app.post('/edit_bounty', (req,res)=> {
    let bountyId = req.body.bountyId
    let amount = req.body.amount
    let notes = req.body.notes
    editBounty(bountyId, amount, notes, buildResCallback(res))
})

app.get('/current_state', (req, res) => {
  request
    .get(config.brainLocation)
    .end((err, res2) => {
      if (err) {
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


function editBounty(bountyId, amount, notes, callback){
    let newEvent = {
        action: {
            type: "bounty-update-value",
            value: amount,
            'bounty-id':bountyId,
            notes
        }
    }
    bountyPost(newEvent, callback)
}

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
  dctrlPost(newEvent, callback)
}

function cashExpense(amount, notes, callback) {
  let newEvent = {
    action: {
      type: "cash-decrease",
      amount: amount.toString(),
      notes
    }
  }
  dctrlPost(newEvent, callback)
}

function stockSupplies(amount, notes, callback){
    let newEvent = {
        action: {
            type: 'supplies-stocked',
            amount,
            'supply-type': 'bitpepsi',
            notes
        }
    }
    console.log("sending:", newEvent)
    dctrlPost(newEvent, callback)
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

function bountyCreate(name, description, value, cap, boost, fob, callback) {
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
      notes: "dctrl-admin",
      cap,
      boost
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

function dctrlPost(data, callback) {
  request
    .post(config.brainLocation + "dctrl")
    .send(data)
    .end(callback)
}
