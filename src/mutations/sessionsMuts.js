import _ from 'lodash'

module.exports = (sessions, ev) => {
	switch (ev.type) {
		case "session-created":
			let idHasSession = sessions.some(session => {
					// replace that sessions creds,
					let match = false
					if (session.ownerId === ev.ownerId){
							match = true
							_.merge(session, ev)
					}
					return match // true terminates the some loop & idHasSession->true too
			})

			if (idHasSession){
				 // edited in session
			} else {
					// id didn't previously have session
					sessions.push(ev)
			}
			break
	}
}
