import uuidV1 from 'uuid/v1'
import dctrlDb from '../dctrlDb'

module.exports = {
    resourceCreated,
    resourceUsed,
    resourceStocked,
}

function resourceCreated(name, location, instructions, charged, callback) {
    let newEvent = {
        type: "resource-created",
        resourceId: uuidV1(),
        name,
        location,
        instructions,
        charged,
        stock: 0,
        current: [], // array for recent memberIds
    }
    dctrlDb.insertEvent(newEvent, callback)
}

function resourceStocked(resourceId, memberId, amount, paid,  notes, callback) {
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
