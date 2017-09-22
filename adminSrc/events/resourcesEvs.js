import uuidV1 from 'uuid/v1'
import dctrlDb from '../dctrlDb'

module.exports = {
    resourceCreate,
    resourceUse
}

function resourceCreate(name, location, howTo, callback) {
    let newEvent = {
        type: "resource-created",
        resourceId: uuidV1(),
        name,
        location,
        howTo,
        current: []
    }
    dctrlDb.insertEvent(newEvent, callback)
}

function resourceUse(resourceId, memberId, callback) {
    let newEvent = {
        type: "resource-used",
        resourceId,
        memberId
    }
    dctrlDb.insertEvent(newEvent, callback)
}
