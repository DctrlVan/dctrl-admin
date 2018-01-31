const state = require('../state')
const dbQueries = require('../dbQueries')

module.exports = (app) => {
		app.post('/db/member/:memberId', (req, res) => {
			dbQueries.getEventsForMember(req.params.memberId, (err, memberHistory) => {
				console.log('get db/member:', {memberHistory})
				res.json(memberHistory)
			})
		})

		app.post('/state/members', (req, res) => {
			res.json(state.getState().members)
		})

		app.post('/state/members/:id', (req, res) => {
			let id = req.params.id
			let responseMember = false
			state.getState().members.forEach(member => {
				if (member.fob == id || member.memberId == id) {
					responseMember = member
				}
			})

			if (!responseMember) {
				return res.status(404).send('no match')
			}
			res.json(responseMember)
		})

}
