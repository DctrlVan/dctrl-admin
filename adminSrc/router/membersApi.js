const state = require('../state')
const dbQueries = require('../dbQueries')


module.exports = (app) => {
		app.get('/db/member/:memberId', (req, res) => {
			dbQueries.getEventsForMember(req.params.memberId, (err, memberHistory) => {
				res.json(memberHistory)
			})
		})

		app.get('/state/members', (req, res) => {
			// clean
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

    app.post('/events/member_create', (req, res) => {
      events.memberCreate(
          req.body.name,
          req.body.email,
          req.body.fob,
          buildResCallback(res)
      )
    })

    app.post('/events/member_pay', (req, res) => {
      events.memberPaid(
        req.body.memberId,
        req.body.paid,
        req.body.isCash,
        req.body.notes,
        buildResCallback(res)
      )
    })

    app.post('/events/member_charge', (req, res) => {
      events.memberCharged(
        req.body.memberId,
        req.body.amount,
        req.body.notes,
        buildResCallback(res)
      )
    })

    app.post('/events/member_deactivate', (req, res) => {
        let memberId = req.body.memberId
        events.memberDeactivate( memberId, buildResCallback(res) )
    })

    app.post('/events/member_activate', (req, res) => {
        let memberId = req.body.memberId
        events.memberActivate( memberId, buildResCallback(res) )
    })
}
