import uuidV1 from 'uuid/v1'
import dctrlDb from '../dctrlDb'

module.exports = {
    resourceCreated,
    resourceUsed,
    resourceStocked,
}

function resourceCreated(resourceId, name, charged, callback) {
    let newEvent = {
        type: "resource-created",
        resourceId,
        charged,
        stock: 0,
        current: [],
        info: {}
    }
    dctrlDb.insertEvent(newEvent, callback)
}

function resourceStocked(resourceId, memberId, amount, paid, notes, callback) {
  let newEvent = {
      type: 'resource-stocked',
      resourceId,
      memberId,
      amount,
      paid,
      notes,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function resourceUsed(resourceId, memberId, amount, charged, notes, callback) {
  let newEvent = {
      type: 'resource-used',
      resourceId,
      memberId,
      amount,
      charged,
      notes
  }
  dctrlDb.insertEvent(newEvent, callback)
}
