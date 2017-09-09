const config = require('../../configuration')
const events = require('../events')
const state = require('../state')
const bodyParser = require('body-parser')

function buildResCallback(res){
    return (err, dbResponse) => {
        if (err || !dbResponse) {
            console.log({err})
            res.status(500).send('error')
        } else {
            console.log({dbResponse})
            res.send(dbResponse)
        }
    }
}

module.exports = function eventApi(app){

      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({
          extended: true
      }))

      app.post('/events/member_create', (req, res) => {
        events.memberCreate(
            req.body.name,
            req.body.email,
            req.body.fob,
            buildResCallback(res)
        )
      })

      app.post('/events/member_pay', (req, res) => {
        events.memberPaid(
          req.body.memberId,
          req.body.paid,
          req.body.isCash,
          req.body.notes,
          buildResCallback(res)
        )
      })

      app.post('/events/member_charge', (req, res) => {
        events.memberCharged(
          req.body.memberId,
          req.body.amount,
          req.body.notes,
          buildResCallback(res)
        )
      })

      app.post('/events/member_deactivate', (req, res) => {
          let memberId = req.body.memberId
          events.memberDeactivate( memberId, buildResCallback(res) )
      })

      app.post('/events/member_activate', (req, res) => {
          let memberId = req.body.memberId
          events.memberActivate( memberId, buildResCallback(res) )
      })

      app.post('/events/bounty_create', (req, res) => {
          let name = req.body.name
          let description = req.body.description
          let value = req.body.value
          let boost = req.body.boost
          let cap = req.body.cap
          let fob = req.body.fob
          events.bountyCreate(name, description, value, cap, boost, fob, buildResCallback(res) )
      })

      app.post('events/bounty_claim', (req, res) => {
          let memberId = req.body.memberId
          let bountyId = req.body.bountyId
          let paid = req.body.paid
          bountyClaim( bountyId, memberId, paid, buildResCallback(res) )
      })

      app.post('/events/bounty_edit', (req,res)=> {
          let bountyId = req.body.bountyId
          let amount = req.body.amount
          let notes = req.body.notes
          events.bountyEdit(bountyId, amount, notes, buildResCallback(res))
      })

      app.post('/events/bounty_boost', (req,res)=> {
          let bountyId = req.body.bountyId
          let amount = req.body.amount
          let notes = req.body.notes
          events.bountyBoost(bountyId, amount, notes, buildResCallback(res))
      })

      app.post('/events/cash_expense', (req, res) => {
          let amount = req.body.amount
          let notes = req.body.notes
          events.cashExpense(amount, notes, buildResCallback(res))
      })

      app.post('/events/cash_received', (req, res) => {
          let amount = req.body.amount
          let notes = req.body.notes
          events.cashReceived(amount, notes, buildResCallback(res) )
      })

      app.post('/events/supplies_stock', (req, res) => {
          let memberId = false
          state.getState().members.forEach(member => {
              if (member.fob == req.body.fob){
                  memberId = member.memberId
              }
          })
          if (!memberId) return res.status(401).send('invalid fob')
          console.log('member id found success, now create event')
          let supplyType = req.body.supplyType
          let amount = req.body.amount
          let paid = req.body.paid
          let notes = req.body.notes
          events.suppliesStock(memberId, supplyType, amount, paid,  notes, buildResCallback(res))
      })

      app.post('/events/supplies_use', (req, res) => {
          let memberId = req.body.memberId
          let charged = req.body.charged
          let supplyType = req.body.supplyType
          let notes = req.body.notes
          events.suppliesUse(memberId, supplyType, charged,  notes, buildResCallback(res))
      })

      app.post('/events/resource_create', (req, res) => {
        events.resourceCreate(
            req.body.name,
            req.body.location,
            req.body.howTo,
            buildResCallback(res)
        )
      })

}
