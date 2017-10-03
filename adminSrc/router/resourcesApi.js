const state = require('../state')
const dbQueries = require('../dbQueries')
const events = require('../events')

module.exports = (app) => {
	app.get('/state/resources', (req, res) => {
    res.json(state.getState().resources)
  })
}
