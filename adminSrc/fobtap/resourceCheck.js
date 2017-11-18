const state = require('../state')
const utils = require('../spec/utils')
const validators = require('../spec/validators')
const events = require('../events')

module.exports = function(req, res, next){
    let memberId = utils.memberIdFromFob(req.body.fob)
    let resource = utils.getResource(req.body.resourceId)
    if (memberId && resource){
        events.resourceUsed(
          req.body.resourceId,
          memberId,
          resource.amount || 0,
          resource.charged || 0,
          req.body.notes || '~ resourceCheck',
          utils.buildResCallback(res)
        )
    } else {
        next()
    }
}
