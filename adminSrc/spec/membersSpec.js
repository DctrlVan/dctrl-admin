import utils from '../utils'
import validators from '../validators'

// export single middleware for each type
module.exports = (req,res, next){
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
  let {valid, err} = ()

  if (
    validators.isName(req.body.name) &&
    validators.isMultisigAddress(req.body.address) &&
    validators.isFob(req.body.fob)
  ){
    events.memberCreate(
      req.body.name,
      req.body.address,
      req.body.fob,
      utils.buildResCallback(res)
    )
  } else {
    res.status(500).send('validation failed for member memberCreate')
  }
}

    app.post('/events/member_pay', (req, res) => {
      events.memberPaid(
        req.body.memberId,
        req.body.paid,
        req.body.isCash,
        req.body.notes,
        utils.buildResCallback(res)
      )
    })

    app.post('/events/member_charge', (req, res) => {
      events.memberCharged(
        req.body.memberId,
        req.body.amount,
        req.body.notes,
        utils.buildResCallback(res)
      )
    })

    app.post('/events/member_deactivate', (req, res) => {
        let memberId = req.body.memberId
        events.memberDeactivate( memberId, utils.buildResCallback(res) )
    })

    app.post('/events/member_activate', (req, res) => {
        let memberId = req.body.memberId
        events.memberActivate( memberId, utils.buildResCallback(res) )
    })
