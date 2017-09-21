const uuidV1 = require('uuid/v1')
const dctrlDb = require('./dctrlDb')
const addressManager = require('../bitcoinSrc/addressManager')

module.exports = {
  memberCreate,
  memberPaid,
  memberCharged,
  memberDeactivate,
  memberActivate,
}

function memberCreate(name, address, fob, callback) {
    let newEvent = {
        type: "member-created",
        memberId: uuidV1(),
        address,
        fob,
        active: 1,
        balance: 0,
        name,
    }
    dctrlDb.insertEvent(newEvent, callback)
}

function memberPaid(memberId, paid, isCash, notes, callback) {
  let newEvent = {
      type: "member-paid",
      memberId,
      paid,
      isCash,
      notes
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberCharged(memberId, charged, notes, callback) {
    let newEvent = {
        type: "member-charged",
        memberId,
        charged,
        notes,
    }
    dctrlDb.insertEvent(newEvent, callback)
}

function memberDeactivate(memberId, callback) {
  let newEvent = {
    type: "member-deactivated",
    memberId,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberActivate(memberId, callback) {
  let newEvent = {
    type: "member-activated",
    memberId,
  }
  dctrlDb.insertEvent(newEvent, callback)
}
