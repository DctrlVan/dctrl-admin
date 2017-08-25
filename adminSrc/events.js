const request = require('superagent')
const uuidV1 = require('uuid/v1')
const dctrlDb = require('./dctrlDb')
// const addressManager = require('../bitcoinSrc/addressManager')
const config = require('../conf')

function boostBounty(bountyId, amount, notes, callback) {
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
  addressManager.getNewAddress((err, addr) => {
    let newEvent = {
        'member-id': uuidV1(),
        type: "member-created",
        address: addr,
        fob: fob,
        active: 1,
        balance: "0",
        name: name,
        email: email
    }
    dctrlDb.insertEvent(newEvent, callback)
  })
}

function memberPaid(id, amount, notes, callback) {
  let newEvent = {
    action: {
      type: "member-paid",
      "member-id": id,
      amount,
      "cash?": true,
      notes
    }
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function cashReceived(amount, notes, callback) {
  let newEvent = {
      type: "cash-increase",
      amount,
      notes,
      timestamp: Date.now()
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function cashExpense(amount, notes, callback) {
  let newEvent = {
    type: "cash-decrease",
    amount: amount.toString(),
    notes,
    timestamp: Date.now()
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function suppliesStock(amount, notes, callback) {
  let newEvent = {
      type: 'supplies-stocked',
      amount,
      supplyType: 'bitpepsi',
      notes,
      timestamp: Date.now()
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberCharged(id, amount, notes, callback) {
  let newEvent = {
    type: "member-charged",
    "member-id": id,
    amount,
    notes,
    timestamp: Date.now()
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberDeactivate(id, callback) {
  let newEvent = {
    type: "member-deactivated",
    memberId,
    timestamp: Date.now()
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberActivate(memberId, callback) {
  let newEvent = {
    type: "member-activated",
    memberId,
    timestamp: Date.now()
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
  dctrlDb.insertEvent(newEvent, callback)
}

function bountyClaim(bountyId, memberId, callback) {
  let newEvent = {
    type: "bounty-claimed",
    bountyId,
    memberId,
    notes: "dctrl-admin",
    timestamp: Date.now()
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function stockSupplies(amount, notes, callback){
    let newEvent = {
            type: 'supplies-stocked',
            amount,
            'supply-type': 'bitpepsi',
            notes
    }
    dctrlDb.insertEvent(newEvent, callback)
}

function editBounty(bountyId, amount, notes, callback) {
  let newEvent = {
    type: "bounty-update-value",
    value: amount,
    bountyId,
    notes,
    timestamp: Date.now()
  }
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
