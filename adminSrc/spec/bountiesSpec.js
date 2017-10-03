import utils from './utils'
import validators from './validators'
import events from '../events'
import state from '../state'
import calculations from '../calculations'

module.exports = function(req,res, next){
  switch (req.body.type){
      case 'bounty-created':
           specBountyCreated(req, res, next)
           break
      case 'bounty-claimed':
          specBountyClaimed(req, res, next)
          break
      case 'bounty-boosted':
          specBountyBoosted(req, res, next)
          break
      case 'bounty-monthly-updated':
          specBountyMonthlyUpdated(req, res, next)
          break
      default:
          next()
  }
}
//
function specBountyCreated(req, res, next){
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
    events.bountyCreated(
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
    res.status(400).send(errRes)
  }
}

function specBountyClaimed(req, res, next){
  let errRes = []
  // TODO: this member-fob conversion in earlier middleware, (new name authFob?)
  let paid
  state.getState().bounties.forEach( bounty => {
    if (bounty.bountyId == req.body.bountyId){
        paid = calculations.calculateBountyPayout(bounty)
    }
  })
  let memberId = utils.memberIdFromFob(req.body.fob)
  if (
    validators.isBountyId(req.body.bountyId, errRes) &&
    validators.isMemberId(memberId, errRes) &&
    validators.isAmount(paid, errRes)
  ){
    events.bountyClaimed(
      req.body.bountyId,
      memberId,
      paid,
      utils.buildResCallback(res)
    )
  } else {
    res.status(400).send(errRes)
  }
}

function specBountyMonthlyUpdated(req, res, next){
  let errRes = []
  if (
    validators.isBountyId(req.body.bountyId, errRes) &&
    validators.isAmount(req.body.amount, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.bountyMonthlyUpdated(
      req.body.bountyId,
      req.body.amount,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    res.status(400).send(errRes)
  }
}

function specBountyBoosted(req, res, next){
  let errRes = []
  if (
    validators.isBountyId(req.body.bountyId, errRes) &&
    validators.isAmount(req.body.amount, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.bountyBoosted(
      req.body.bountyId,
      req.body.amount,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    res.status(400).send(errRes)
  }
}
