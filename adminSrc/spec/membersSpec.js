import utils from './utils'
import validators from './validators'
import events from '../events'

// export single middleware for each type
module.exports = function(req,res, next){
  switch (req.body.type){
      case 'member-created':
           specMemberCreated(req, res, next)
           break
      case 'member-paid':
          specMemberPaid(req, res, next)
          break
      case 'member-charged':
          specMemberCharged(req, res, next)
          break
      case 'member-activated':
          specMemberActivated(req, res, next)
          break
      case 'member-deactivated':
          specMemberDeactivated(req, res, next)
          break
      default:
          next()
  }
}

function specMemberCreated(req, res, next){
  let errRes = []
  if (
    validators.isName(req.body.name, errRes) &&
    validators.isFob(req.body.fob, errRes)
  ){
    events.memberCreated(
      req.body.name,
      req.body.fob,
      utils.buildResCallback(res)
    )
  } else {
    res.status(400).send(errRes)
  }
}

function specMemberPaid(req, res, next){
  let errRes = []
  if (
    validators.isMemberId(req.body.memberId, errRes) &&
    validators.isAmount(req.body.paid, errRes) &&
    validators.isBool(req.body.isCash, errRes) &&
    validators.isNotes(req.body.fob, errRes)
  ){
    events.memberPaid(
      req.body.memberId,
      req.body.paid,
      req.body.isCash,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    console.log('specMemberPaid', {errRes})
    res.status(400).send(errRes)
  }
}

function specMemberCharged(req, res, next){
  let errRes = []
  if (
    validators.isMemberId(req.body.memberId, errRes) &&
    validators.isAmount(req.body.charged, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.memberCharged(
      req.body.memberId,
      req.body.charged,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    res.status(400).send(errRes)
  }
}

function specMemberDeactivated(req, res, next){
  let errRes = []
  if (
    validators.isMemberId(req.body.memberId, errRes)
  ){
    events.memberDeactivate(
      req.body.memberId,
      utils.buildResCallback(res)
    )
  } else {
    res.status(400).send(errRes)
  }
}

function specMemberActivated(req, res, next){
  let errRes = []
  if (
    validators.isMemberId(req.body.memberId, errRes)
  ){
    events.memberActivated(
      req.body.memberId,
      utils.buildResCallback(res)
    )
  } else {
    res.status(400).send(errRes)
  }
}
