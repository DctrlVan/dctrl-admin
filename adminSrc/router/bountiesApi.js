const config = require('../../configuration')
const events = require('../events')
const state = require('../state')
const bodyParser = require('body-parser')
const calculations = require('../calculations')

module.exports = function eventApi(app){
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({
          extended: true
      }))

      app.get('/state/bounties', (req, res) => {
        res.json(state.getState().bounties)
      })

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
          let monthlyValue = req.body.monthlyValue
          let boost = req.body.boost
          let cap = req.body.cap
          let fob = req.body.fob
          let oneTime = req.body.oneTime
          events.bountyCreate(name, description, monthlyValue, cap, boost, fob, oneTime, buildResCallback(res) )
      })

      app.post('/events/bounty_claim', (req, res) => {
          // required: (member)fob, bountyId, notes?
          let memberId = memberIdFromFob(req.body.fob)
          if (!memberId) return res.status(401).send('invalid fob')
          let bountyId = req.body.bountyId
          // This type of logic may not belong here, getting messy?
          let thisBounty
          state.getState().bounties.forEach( bounty => {
            if (bounty.bountyId == bountyId){
                thisBounty = bounty
            }
          })
          let paid = calculations.calculateBountyPayout(thisBounty)
          events.bountyClaim( bountyId, memberId, paid, buildResCallback(res) )
      })

      app.post('/events/bounty_monthly_update', (req,res)=> {
          let bountyId = req.body.bountyId
          let amount = req.body.amount
          let notes = req.body.notes
          events.bountyMonthlyUpdate(bountyId, amount, notes, buildResCallback(res))
      })

      app.post('/events/bounty_boost', (req,res)=> {
          let bountyId = req.body.bountyId
          let amount = req.body.amount
          let notes = req.body.notes
          events.bountyBoost(bountyId, amount, notes, buildResCallback(res))
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
