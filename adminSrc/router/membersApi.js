const state = require('../state')
const dbQueries = require('../dbQueries')

module.exports = (app) => {
		app.get('/db/member/:memberId', (req, res) => {
			dbQueries.getEventsForMember(req.params.memberId, (err, memberHistory) => {
				console.log('get db/member:', {memberHistory})
				res.json(memberHistory)
			})
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

}
