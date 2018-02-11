const state = require('../state')
const utils = require('../spec/utils')
const validators = require('../spec/validators')
const events = require('../events')

module.exports = function(req, res, next){
    console.log('resource check middleware')
    let memberId = utils.memberIdFromFob(req.body.fob)
    let resource = utils.getResource(req.body.resourceId)
    if (memberId && resource){
        events.resourceUsed(
          req.body.resourceId,
          memberId,
          req.body.amount || 1,
          resource.charged || 0,
          req.body.notes || '~ resourceCheck',
          utils.buildResCallback(res)
        )
    } else {
        next()
    }
}
