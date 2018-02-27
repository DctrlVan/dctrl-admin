const dctrlDb = require('../dctrlDb')

module.exports = {
  cashIncreased,
  cashDecreased,
  spotUpdated
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

function spotUpdated(spot, callback) {
  let newEvent = {
      type: "spot-updated",
      spot
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function currencySwitched(currency, callback) {
  let newEvent = {
      type: "currency-switched",
      currency
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function forex(currency, callback) {
  let newEvent = {
      type: "forexed",
      currency
  }
  dctrlDb.insertEvent(newEvent, callback)
}
