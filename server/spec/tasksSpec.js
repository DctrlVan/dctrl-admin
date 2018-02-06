import utils from './utils'
import validators from './validators'
import events from '../events'
import state from '../state'
import calculations from '../../src/calculations'

module.exports = function(req,res, next){
  switch (req.body.type){
      case 'task-created':
           specTaskCreated(req, res, next)
           break
      case 'task-claimed':
          specTaskClaimed(req, res, next)
          break
      case 'task-boosted':
          specTaskBoosted(req, res, next)
          break
      case 'task-monthly-updated':
          specTaskRateUpdated(req, res, next)
          break
      default:
          next()
  }
}
//
function specTaskCreated(req, res, next){
  let errRes = []
  if (
    validators.isName(req.body.name, errRes) &&
    validators.isNotes(req.body.description, errRes) &&
    validators.isAmount(req.body.monthlyValue, errRes) &&
    validators.isAmount(req.body.boost, errRes) &&
    validators.isAmount(req.body.cap, errRes) &&
    validators.isBool(req.body.oneTime, errRes) &&
    validators.isFob(req.body.fob, errRes)
  ){
    events.taskCreated(
      req.body.name,
      req.body.description,
      req.body.monthlyValue,
      req.body.cap,
      req.body.boost,
      req.body.fob,
      req.body.oneTime,
      utils.buildResCallback(res)
    )
  } else {
    res.status(200).send(errRes)
  }
}

function specTaskClaimed(req, res, next){
  let errRes = []
  // TODO: this member-fob conversion in earlier middleware, (new name authFob?)
  let paid
  state.pubState.tasks.forEach( task => {
    if (task.taskId == req.body.taskId){
        paid = calculations.calculateTaskPayout(task)
    }
  })
  let memberId = utils.memberIdFromFob(req.body.fob)
  console.log('payout ready', paid, memberId)
  if (
    validators.isTaskId(req.body.taskId, errRes) &&
    validators.isMemberId(memberId, errRes) &&
    validators.isAmount(paid, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.taskClaimed(
      req.body.taskId,
      memberId,
      paid,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
      res.status(400).send(errRes)
  }
}

function specTaskRateUpdated(req, res, next){
  let errRes = []
  if (
    validators.isTaskId(req.body.taskId, errRes) &&
    validators.isAmount(req.body.amount, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.taskMonthlyUpdated(
      req.body.taskId,
      req.body.amount,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    res.status(200).send(errRes)
  }
}

function specTaskBoosted(req, res, next){
  let errRes = []
  if (
    validators.isTaskId(req.body.taskId, errRes) &&
    validators.isAmount(req.body.amount, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.taskBoosted(
      req.body.taskId,
      req.body.amount,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    res.status(200).send(errRes)
  }
}
