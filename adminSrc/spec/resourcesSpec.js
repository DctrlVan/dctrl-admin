import utils from './utils'
import validators from './validators'
import events from '../events'
import state from '../state'
import calculations from '../calculations'

module.exports = function(req,res, next){
  switch (req.body.type){
      case 'resource-created':
          specResourceCreated(req, res, next)
          break
      case 'resource-used':
          specResourceUsed(req, res, next)
          break
      default:
          next()
  }
}

function specResourceCreated(req, res, next){
  let errRes = ''
  if (
    validators.isName(req.body.name, errRes) &&
    validators.isNotes(req.body.location, errRes) &&
    validators.isNotes(req.body.howTo, errRes)
  ){
    events.resourceCreated(
			req.body.name,
			req.body.location,
			req.body.howTo,
			utils.buildResCallback(res)
    )
  } else {
    res.status(500).send(errRes)
  }
}

function specResourceUsed(req, res, next){
  let errRes = ''
  let memberId = utils.memberIdFromFob(req.body.fob)
  if (
    validators.isMemberId(memberId, errRes) &&
    validators.isResourceId(req.body.resourceId, errRes) &&
    validators.isNotes(req.body.location, errRes) &&
    validators.isNotes(req.body.howTo, errRes)
  ){
    events.resourceUsed(
      req.body.resourceId,
      memberId,
      utils.buildResCallback(res)
    )
  } else {
    res.status(500).send(errRes)
  }
}
