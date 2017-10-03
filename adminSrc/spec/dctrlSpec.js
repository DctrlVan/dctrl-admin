import utils from './utils'
import validators from './validators'
import events from '../events'
import state from '../state'
import calculations from '../calculations'

module.exports = function(req,res, next){
  switch (req.body.type){
      case 'cash-increased':
           specCashIncreased(req, res, next)
           break
      case 'cash-decreased':
          specCashDecreased(req, res, next)
          break
      case 'supplies-used':
          specSuppliesUsed(req, res, next)
          break
      case 'supplies-stocked':
          specSuppliesStocked(req, res, next)
          break
      default:
          next()
  }
}

function specCashIncreased(req, res, next){
  let errRes = ''
  if (
    validators.isAmount(req.body.amount, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.cashIncreased(
      req.body.amount,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    res.status(500).send(errRes)
  }
}

function specCashDecreased(req, res, next){
  let errRes = ''
  if (
    validators.isAmount(req.body.amount, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.cashDecreased(
      req.body.amount,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    res.status(500).send(errRes)
  }
}

function specSuppliesUsed(req, res, next){
  let errRes = ''
  let memberId = utils.memberIdFromFob(req.body.fob)
  if (
    validators.isMemberId(memberId, errRes) &&
    validators.isSupplyType(req.body.supplyType, errRes) &&
    validators.isAmount(req.body.amount, errRes) &&
    validators.isAmount(req.body.charged, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.suppliesUsed(
      memberId,
      req.body.supplyType,
      req.body.amount,
      req.body.charged,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    res.status(500).send(errRes)
  }
}

function specSuppliesStocked(req, res, next){
  let errRes = ''
  let memberId = utils.memberIdFromFob(req.body.fob)
  if (
    validators.isMemberId(memberId, errRes) &&
    validators.isSupplyType(req.body.supplyType, errRes) &&
    validators.isAmount(req.body.amount, errRes) &&
    validators.isAmount(req.body.paid, errRes) &&
    validators.isNotes(req.body.notes, errRes)
  ){
    events.suppliesStocked(
      memberId,
      req.body.supplyType,
      req.body.amount,
      req.body.paid,
      req.body.notes,
      utils.buildResCallback(res)
    )
  } else {
    res.status(500).send(errRes)
  }
}
