const uuidV1 = require('uuid/v1')
const dctrlDb = require('../dctrlDb')

module.exports = {
  sessionCreated
}

function sessionCreated(ownerId, session, token, callback) {
    let newEvent = {
        type: "session-created",
        session,
        token,
        ownerId
    }
    dctrlDb.insertEvent(newEvent, callback)
}
