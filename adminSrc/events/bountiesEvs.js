const uuidV1 = require('uuid/v1')
const dctrlDb = require('../dctrlDb')

module.exports = {
  bountyMonthlyUpdated,
  bountyBoosted,
  bountyCreated,
  bountyClaimed,
}

function bountyCreated(name, description, monthlyValue, cap, boost, fob, oneTime, callback) {
  let newEvent = {
    type: "bounty-created",
    bountyId: uuidV1(),
    lastClaimed: Date.now(),
    name,
    description,
    monthlyValue,
    fob,
    cap,
    boost,
    oneTime: !!oneTime
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function bountyClaimed(bountyId, memberId, paid,  callback) {
  let newEvent = {
    type: "bounty-claimed",
    bountyId,
    memberId,
    paid,
    notes: "dctrl-admin",
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function bountyBoosted(bountyId, amount, notes, callback) {
  let newEvent = {
      type: "bounty-boosted",
      bountyId,
      amount,
      notes
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function bountyMonthlyUpdated(bountyId, amount, notes, callback) {
  let newEvent = {
    type: "bounty-monthly-updated",
    amount,
    bountyId,
    notes,
  }
  dctrlDb.insertEvent(newEvent, callback)
}
