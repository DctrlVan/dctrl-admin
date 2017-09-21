module.exports = {
    resourceCreate
}

function resourceCreate(name, location, howTo, callback) {
    let newEvent = {
        type: "resource-created",
        resourceId: uuidV1(),
        name,
        location,
        howTo,
        address: addr,
    }
    dctrlDb.insertEvent(newEvent, callback)
}
