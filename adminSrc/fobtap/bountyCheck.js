const state = require('../state')
const utils = require('../spec/utils')
const events = require('../events')
const calculations = require('../calculations')

var bountyCheck = {
  active: false,
  bounty: {},
}

module.exports = function(req, res, next){
  console.log('bountyCheck start', req.body)
  if (bountyCheck.active){
    let memberId = utils.memberIdFromFob(req.body.fob)
    if (memberId){
        let paid = calculations.calculateBountyPayout(bountyCheck.bounty)
        events.bountyClaimed(
          bountyCheck.bounty.bountyId,
          memberId,
          paid,
          utils.buildResCallback(res)
        )
    }
    // Either way tried so reset the active bounty, (don't call next?)
    bountyCheck.active = false
  } else {
      let bounty = utils.bountyFromFob(req.body.fob)
      if (bounty){
        bountyCheck.active = true
        bountyCheck.bounty = bounty
        console.log('bountycheck active; vend should not check')
      } else {
        console.log('pass to vend')
        next()
      }
  }
}
