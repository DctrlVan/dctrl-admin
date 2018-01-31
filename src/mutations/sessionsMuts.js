import _ from 'lodash'

module.exports = (sessions, ev) => {
	switch (ev.type) {
		case "session-created":
			sessions.push(ev)
			break
	}
}
