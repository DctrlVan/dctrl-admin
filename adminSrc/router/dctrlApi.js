const config = require('../../configuration')
const events = require('../events')
const state = require('../state')
const calculations = require('../calculations')
const utils = require('./utils')

module.exports = (app) => {
  app.get('/state/dctrl', (req, res) => {
    res.json(state.getState().dctrl)
  })

  app.post('/events/cash_expense', (req, res) => {
    let amount = req.body.amount
    let notes = req.body.notes
    events.cashExpense(amount, notes, utils.buildResCallback(res))
  })

  app.post('/events/cash_received', (req, res) => {
    let amount = req.body.amount
    let notes = req.body.notes
    events.cashReceived(amount, notes, utils.buildResCallback(res))
  })

  app.post('/events/supplies_stock', (req, res) => {
    let memberId = utils.memberIdFromFob(req.body.fob)
    if (!memberId) return res.status(401).send('invalid fob')
    let supplyType = req.body.supplyType
    let amount = req.body.amount
    let paid = req.body.paid
    let notes = req.body.notes
    events.suppliesStock(memberId, supplyType, amount, paid, notes, utils.buildResCallback(res))
  })

  app.post('/events/supplies_use', (req, res) => {
    let memberId = req.body.memberId
    let charged = req.body.charged
    let supplyType = req.body.supplyType
    let notes = req.body.notes
    let amount = req.body.amount
    events.suppliesUse(memberId, supplyType, amount, charged, notes, utils.buildResCallback(res))
  })
  
}
