const state = require('../state')
const utils = require('../spec/utils')
const validators = require('../spec/validators')
const events = require('../events')


// bitpepsi handles the fob bounty claiming
module.exports = function(req, res, next){
    console.log('now trying to process vend', req.body)
    let memberId = utils.memberIdFromFob(req.body.fob)
    if (memberId && validators.isSupplyType(req.body.tapId, []) ){
        events.suppliesUsed(
          memberId,
          req.body.tapId,
          1, // amount
          3, // charged
          'vendCheck',
          utils.buildResCallback(res)
        )
    }
}
