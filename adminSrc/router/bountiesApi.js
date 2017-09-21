const config = require('../../configuration')
const events = require('../events')
const state = require('../state')
const bodyParser = require('body-parser')
const calculations = require('../calculations')
const utils = require('./utils')

module.exports = function eventApi(app){
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({
          extended: true
      }))

      app.get('/state/bounties', (req, res) => {
        res.json(state.getState().bounties)
      })

      app.post('/events/bounty_create', (req, res) => {
          let name = req.body.name
          let description = req.body.description
          let monthlyValue = req.body.monthlyValue || 0
          let boost = req.body.boost
          let cap = req.body.cap
          let fob = req.body.fob
          let oneTime = req.body.oneTime
          console.log('bounty_create', req.body)
          events.bountyCreate(name, description, monthlyValue, cap, boost, fob, oneTime, utils.buildResCallback(res) )
      })

      app.post('/events/bounty_claim', (req, res) => {
          // required: (member)fob, bountyId, notes?
          let memberId = utils.memberIdFromFob(req.body.fob)
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
          events.bountyClaim( bountyId, memberId, paid, utils.buildResCallback(res) )
      })

      app.post('/events/bounty_monthly_update', (req,res)=> {
          let bountyId = req.body.bountyId
          let amount = req.body.amount
          let notes = req.body.notes
          events.bountyMonthlyUpdate(bountyId, amount, notes, utils.buildResCallback(res))
      })

      app.post('/events/bounty_boost', (req,res)=> {
          let bountyId = req.body.bountyId
          let amount = req.body.amount
          let notes = req.body.notes
          events.bountyBoost(bountyId, amount, notes, utils.buildResCallback(res))
      })

}
