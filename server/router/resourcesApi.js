const state = require('../state')
const dbQueries = require('../dbQueries')
const events = require('../events')

module.exports = (app) => {
	app.post('/state/resources', (req, res) => {
    res.json(state.getState().resources)
  })
}
