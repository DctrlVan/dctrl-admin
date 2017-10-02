import utils from './utils'
import validators from './validators'

// export single middleware for each type
module.exports = function(req,res, next){
  switch (req.body.type){
      case 'member-created':
           specMemberCreate(req, res, next)
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
  let errRes = ''
  if (
    validators.isName(req.body.name, errRes) &&
    validators.isMultisigAddress(req.body.address, errRes) &&
    validators.isFob(req.body.fob, errRes)
  ){
    events.memberCreate(
      req.body.name,
      req.body.address,
      req.body.fob,
      utils.buildResCallback(res)
    )
  } else {
    res.status(500).send(errRes)
  }
}

function specMemberPay(req, res, next){
  let errRes = ''
  if (
    validators.isName(req.body.name, errRes) &&
    validators.isMultisigAddress(req.body.address, errRes) &&
    validators.isFob(req.body.fob, errRes)
  ){
    events.memberCreate(
      req.body.name,
      req.body.address,
      req.body.fob,
      utils.buildResCallback(res)
    )
  } else {
    res.status(500).send(errRes)
  }
}
    //
    // app.post('/events/member_pay', (req, res) => {
    //   events.memberPaid(
    //     req.body.memberId,
    //     req.body.paid,
    //     req.body.isCash,
    //     req.body.notes,
    //     utils.buildResCallback(res)
    //   )
    // })
    //
    // app.post('/events/member_charge', (req, res) => {
    //   events.memberCharged(
    //     req.body.memberId,
    //     req.body.amount,
    //     req.body.notes,
    //     utils.buildResCallback(res)
    //   )
    // })
    //
    // app.post('/events/member_deactivate', (req, res) => {
    //     let memberId = req.body.memberId
    //     events.memberDeactivate( memberId, utils.buildResCallback(res) )
    // })
    //
    // app.post('/events/member_activate', (req, res) => {
    //     let memberId = req.body.memberId
    //     events.memberActivate( memberId, utils.buildResCallback(res) )
    // })
