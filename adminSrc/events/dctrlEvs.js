const dctrlDb = require('../dctrlDb')

module.exports = {
  cashIncreased,
  cashDecreased,
  suppliesStocked,
  suppliesUsed,
}

function cashIncreased(amount, notes, callback) {
  let newEvent = {
      type: "cash-increased",
      amount,
      notes,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function cashDecreased(amount, notes, callback) {
  let newEvent = {
    type: "cash-decreased",
    amount,
    notes,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function suppliesStocked(memberId, supplyType, amount, paid,  notes, callback) {
  let newEvent = {
      type: 'supplies-stocked',
      memberId,
      supplyType,
      amount,
      paid,
      notes,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function suppliesUsed(memberId, supplyType, amount, charged, notes, callback) {
  let newEvent = {
      type: 'supplies-used',
      memberId,
      supplyType,
      amount,
      charged,
      amount,
      notes
  }
  dctrlDb.insertEvent(newEvent, callback)
}
