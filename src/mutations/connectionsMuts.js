import _ from 'lodash'

module.exports = (sessions, ev) => {
	switch (ev.type) {
		case "connection-created":
			sessions.push(ev)
			break
	}
}
