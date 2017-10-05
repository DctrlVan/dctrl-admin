const state = require('../state')
const utils = require('../spec/utils')
const events = require('../events')
const calculations = require('../calculations')

var activeBounty = false

module.exports = function(req, res, next){
  console.log('bountyCheck', req.body)
  if (activeBounty){
    let memberId = utils.memberIdFromFob(req.body.fob)
    if (memberId){
        let paid = calculations.calculateBountyPayout(activeBounty)
        events.bountyClaimed(
          activeBounty.bountyId,
          memberId,
          paid,
          utils.buildResCallback(res)
        )
    }
    // Either way tried so reset the active bounty, (don't call next?)
    activeBounty = false
  } else {
      activeBounty = utils.bountyFromFob(req.body.fob)
      // don't have an active bounty and wasnt a bounty, check vend
      if (!activeBounty) return next();
  }
}
