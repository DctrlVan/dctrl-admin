const uuidV1 = require('uuid/v1')
const dctrlDb = require('../dctrlDb')

module.exports = {
  memberCreated,
  memberPaid,
  memberCharged,
  memberDeactivated,
  memberActivated,
  memberAddressUpdated,
  memberFieldUpdated,
  badgeAdded,
  badgeRemoved
}

function memberCreated(name, fob, secret, callback) {
    let newEvent = {
        type: "member-created",
        memberId: uuidV1(),
        fob,
        name,
        secret,
        address: '',
        active: 1,
        balance: 0,
        badges: [],
        info: {}
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

function memberDeactivated(memberId, callback) {
  let newEvent = {
    type: "member-deactivated",
    memberId,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberActivated(memberId, callback) {
  let newEvent = {
    type: "member-activated",
    memberId,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberAddressUpdated(memberId, address, proof, callback){
  let newEvent = {
    type: "member-address-updated",
    memberId,
    address,
    proof,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function memberFieldUpdated(memberId, field, newfield, callback){
  let newEvent = {
    type: "member-field-updated",
    memberId,
    field,
    newfield,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function badgeAdded(memberId, badge, callback) {
  let newEvent = {
      type: "badge-added",
      memberId,
      badge,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function badgeRemoved(memberId, badge, callback) {
  let newEvent = {
      type: "badge-removed",
      memberId,
      badge,
  }
  dctrlDb.insertEvent(newEvent, callback)
}
