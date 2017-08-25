const request = require('superagent')
const uuidV1 = require('uuid/v1')
const dctrlDb = require('./dctrlDb')
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
    dctrlDb.insertEvent(newEvent, callback)
}

setTimeout(()=>{
    boostBounty('123', 1, 'notes', (err, r)=>{ console.log({err,r})})
}, 5000)

function boostBounty(bountyId, amount, notes, callback){
    let newEvent = {
        action: {
            type: "bounty-boosted",
            bountyId,
            amount,
            notes
        }
    }
    dctrlDb.insertEvent(newEvent, callback)
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
        dctrlDb.insertEvent(newEvent, callback)
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
  dctrlDb.insertEvent(newEvent, callback)
}

function cashReceived(amount, notes, callback) {
  let newEvent = {
    action: {
      type: "cash-increase",
      amount: amount.toString(),
      notes
    }
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function cashExpense(amount, notes, callback) {
  let newEvent = {
      type: "cash-decrease",
      amount: amount.toString(),
      notes
  }
  dctrlDb.insertEvent(newEvent, callback)
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
    dctrlDb.insertEvent(newEvent, callback)
}

function memberCharged(id, amount, notes, callback) {
  let newEvent = {
      type: "member-charged",
      "member-id":id,
      amount,
      notes
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberDeactivate(id, callback) {
  let newEvent = {
    action: {
      type: "member-deactivated",
      "member-id": id
    }
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberActivate(id, callback) {
  let newEvent = {
    action: {
      type: "member-activated",
      "member-id": id
    }
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function bountyCreate(name, description, value, cap, boost, fob, callback) {
  let newEvent = {
      type: "bounty-created",
      name,
      description,
      value,
      fob,
      bountyId: uuidV1(),
      lastClaimed: parseInt(Date.now() / 1000).toString(),
      notes: "dctrl-admin:",
      cap,
      boost: '0',
      timestamp: Date.now()
  }
  console.log("sending:", newEvent)
  dctrlDb.insertEvent(newEvent, callback)
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
  dctrlDb.insertEvent(newEvent, callback)
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
