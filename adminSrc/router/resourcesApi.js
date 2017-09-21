const state = require('../state')
const dbQueries = require('../dbQueries')

module.exports = (app) => {
	app.get('/state/resources', (req, res) => {
    res.json(state.getState().resources)
  })

	app.get('/db/resource/:resourceId', (req, res) => {
		dbQueries.getEventsForResource(req.params.resourceId, (err, resourceHistory) => {
			res.json(resourceHistory)
		})
	})

}
