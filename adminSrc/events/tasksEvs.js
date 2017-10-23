const uuidV1 = require('uuid/v1')
const dctrlDb = require('../dctrlDb')

module.exports = {
  taskRateUpdated,
  taskBoosted,
  taskCreated,
  taskClaimed,
}

function taskCreated(name, instructions, monthlyValue, cap, boost, fob, oneTime, callback) {
  let newEvent = {
    type: "task-created",
    taskId: uuidV1(),
    lastClaimed: Date.now(),
    name,
    instructions,
    monthlyValue,
    fob,
    cap,
    boost,
    oneTime: !!oneTime
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function taskClaimed(taskId, memberId, paid, notes, callback) {
  let newEvent = {
    type: "task-claimed",
    taskId,
    memberId,
    paid,
    notes,
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function taskBoosted(taskId, amount, notes, callback) {
  let newEvent = {
      type: "task-boosted",
      taskId,
      amount,
      notes
  }
  dctrlDb.insertEvent(newEvent, callback)
}

function taskRateUpdated(taskId, amount, notes, callback) {
  let newEvent = {
    type: "task-rate-updated",
    amount,
    taskId,
    notes,
  }
  dctrlDb.insertEvent(newEvent, callback)
}
