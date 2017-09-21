module.exports = (resources, ev) => {
	switch (ev.type) {
		case "resource-created":
			resources.push(ev)
			break
	}
}
