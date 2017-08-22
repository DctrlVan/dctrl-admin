const request = require('superagent')
const uuidV1 = require('uuid/v1')
const addressManager = require('../bitcoinSrc/addressManager')
const config = require('../conf')

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

function boostBounty(bountyId, amount, notes, callback){
    let newEvent = {
        action: {
            type: "bounty-boosted",
            'bounty-id':bountyId,
            amount,
            notes
        }
    }
    bountyPost(newEvent, callback)
}

function memberCreate(name, email, fob, callback) {
    addressManager.getNewAddress( (err, addr)=> {
        let newEvent = {
            action: {
                'member-id': uuidV1(),
                type: "member-created",
                address: addr,
                fob: fob,
                active: 1,
                balance: "0",
                name: name,
                email: email
            }
        }
        memberPost(newEvent, callback)
    })
}

function memberPaid(id, amount, notes, callback) {
  let newEvent = {
    action: {
      type: "member-paid",
      "member-id": id,
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

function memberCharged(id, amount, notes, callback) {
  let newEvent = {
    action: {
      type: "member-charged",
      "member-id":id,
      amount,
      notes
    }
  }
  memberPost(newEvent, callback)
}

function memberDeactivate(id, callback) {
  let newEvent = {
    action: {
      type: "member-deactivated",
      "member-id": id
    }
  }
  memberPost(newEvent, callback)
}

function memberActivate(id, callback) {
  let newEvent = {
    action: {
      type: "member-activated",
      "member-id": id
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
      'last-claimed': parseInt(Date.now() / 1000).toString(),
      notes: "dctrl-admin",
      cap,
      boost: '0'
    }
  }
  console.log("sending:", newEvent)
  bountyPost(newEvent, callback)
}

function bountyClaim(bountyId, memberId, callback){
  // TODO: Check the previous timestamp on the claim
  let newEvent = {
    action: {
      type: "bounty-claimed",
      'bounty-id': bountyId,
      'member-id': memberId,
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

module.exports = {
    memberCreate,
    memberPaid,
    memberCharged,
    memberDeactivate,
    editBounty,
    boostBounty,
    bountyCreate,
    bountyClaim,
    cashReceived,
    cashExpense,
    stockSupplies,
}
