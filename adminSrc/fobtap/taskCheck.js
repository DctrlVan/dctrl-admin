const state = require('../state')
const utils = require('../spec/utils')
const events = require('../events')
const calculations = require('../calculations')

var taskCheck = {
  active: false,
  task: {},
}

module.exports = function(req, res, next){
  console.log('taskCheck start', req.body)
  if (taskCheck.active){
    let memberId = utils.memberIdFromFob(req.body.fob)
    if (memberId){
        let paid = calculations.calculateBountyPayout(taskCheck.task)
        events.taskClaimed(
          taskCheck.task.taskId,
          memberId,
          paid,
          utils.buildResCallback(res)
        )
    }
    // Either way tried so reset the active task, (don't call next?)
    taskCheck.active = false
  } else {
      let task = utils.taskFromFob(req.body.fob)
      if (task){
        taskCheck.active = true
        taskCheck.task = task
        console.log('taskcheck active; vend should not check')
      } else {
        console.log('pass to vend')
        next()
      }
  }
}
