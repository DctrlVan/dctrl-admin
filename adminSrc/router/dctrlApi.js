const config = require('../../configuration')
const events = require('../events')
const state = require('../state')
const calculations = require('../../src/calculations')

module.exports = (app) => {
  app.get('/state/dctrl', (req, res) => {
    res.json(state.getState().dctrl)
  })
}
