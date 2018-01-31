const uuidV1 = require('uuid/v1')
const dctrlDb = require('../dctrlDb')

module.exports = {
  sessionCreated
}

function sessionCreated(id, session, token, callback) {
    let newEvent = {
        type: "session-created",
        session,
        token,
    }
    dctrlDb.insertEvent(newEvent, callback)
}
