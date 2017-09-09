const state = require('../state')
const dbQueries = require('../dbQueries')


module.exports = function resourceApi(app) {
	app.get('/db/member/:memberId', (req, res) => {
		dbQueries.getEventsForMember(req.params.memberId, (err, memberHistory) => {
			res.json(memberHistory)
		})
	})

	app.get('/db/bounty/:bountyId', (req, res) => {
		dbQueries.getEventsForBounty(req.params.bountyId, (err, bountyHistory) => {
			res.json(bountyHistory)
		})
	})

	app.get('/db/resource/:resourceId', (req, res) => {
		dbQueries.getEventsForResource(req.params.resourceId, (err, resourceHistory) => {
			res.json(resourceHistory)
		})
	})

	app.get('/state', (req, res) => {
		res.json(state.getState())
	})

	app.get('/state/dctrl', (req, res) => {
		res.json(state.getState().dctrl)
	})

	app.get('/state/bounties', (req, res) => {
		res.json(state.getState().bounties)
	})

	app.get('/state/bounties/:id', (req, res) => {
		let id = req.params.id
		let responseBounty = false
		state.getState().bounties.forEach(bounty => {
			if (bounty.fob == id || bounty.bountyId == id) {
				responseBounty = bounty
			}
		})
		if (!responseBounty) {
			return res.status(401).send('no match')
		}
		res.json(responseBounty)
	})

	app.get('/state/members', (req, res) => {
		res.json(state.getState().members)
	})

	app.get('/state/members/:id', (req, res) => {
		let id = req.params.id
		let responseMember = false
		state.getState().members.forEach(member => {
			if (member.fob == id || member.memberId == id) {
				responseMember = member
			}
		})

		if (!responseMember) {
			return res.send('no match')
		}
		res.json(responseMember)
	})

	app.get('/state/resources', (req, res) => {
		res.json(state.getState().resources)
	})

	app.get('/state/resources/:id', (req, res) => {
		let id = req.params.id
		let responseResource = false
		state.getState().resources.forEach(resource => {
			// RFID tag instead of fob?
			if (resource.fob == id || resource.resourceId == id) {
				responseResource = resource
			}
		})

		if (!responseResource) {
			return res.send('no match')
		}
		res.json(responseResource)
	})
}
