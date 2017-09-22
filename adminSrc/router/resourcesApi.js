const state = require('../state')
const dbQueries = require('../dbQueries')
const utils = require('./utils')
const events = require('../events')

module.exports = (app) => {
	app.get('/state/resources', (req, res) => {
    res.json(state.getState().resources)
  })

	app.get('/db/resource/:resourceId', (req, res) => {
		dbQueries.getEventsForResource(req.params.resourceId, (err, resourceHistory) => {
			res.json(resourceHistory)
		})
	})

	app.post('/events/resource_create', (req, res) => {
		let memberId = utils.memberIdFromFob(req.body.fob)
		events.resourceCreate(
				req.body.name,
				req.body.location,
				req.body.howTo,
				utils.buildResCallback(res)
		)
	})

	app.post('/events/resource_use', (req, res) => {
		let memberId = utils.memberIdFromFob(req.body.fob)
		events.resourceUse(
				req.body.resourceId,
				memberId,
				utils.buildResCallback(res)
		)
	})
}
