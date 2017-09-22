const dctrlDb = require('../dctrlDb')

module.exports = {
  cashReceived,
  cashExpense,
  suppliesStock,
  suppliesUse,
}

function cashReceived(amount, notes, callback) {
  let newEvent = {
      type: "cash-increase",
      amount,
      notes,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function cashExpense(amount, notes, callback) {
  let newEvent = {
    type: "cash-decrease",
    amount,
    notes,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function suppliesStock(memberId, supplyType, amount, paid,  notes, callback) {
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

function suppliesUse(memberId, supplyType, amount, charged, notes, callback) {
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
