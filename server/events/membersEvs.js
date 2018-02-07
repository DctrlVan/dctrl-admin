const uuidV1 = require('uuid/v1')
const dctrlDb = require('../dctrlDb')

module.exports = {
  memberCreated,
  memberPaid,
  memberCharged,
  memberDeactivated,
  memberActivated,
  memberAddressUpdated
}

function memberCreated(name, fob, secret, callback) {
    let newEvent = {
        type: "member-created",
        memberId: uuidV1(),
        address: '',
        fob,
        active: 1,
        balance: 0,
        name,
        secret
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

function memberAddressUpdated(memberId, address, callback){
  let newEvent = {
    type: "member-address-updated",
    memberId,
    address,
  }
  dctrlDb.insertEvent(newEvent, callback)
}
