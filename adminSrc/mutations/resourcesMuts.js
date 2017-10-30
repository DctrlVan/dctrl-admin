module.exports = (resources, ev) => {
	switch (ev.type) {
		case "resource-created":
			resources.push(ev)
			break
		case "resource-used":
			resources.forEach( resource => {
				if (resource.resourceId == ev.resourceId){
					resource.stock -= parseFloat(ev.amount)
					resource.current.push( ev.memberId )
				}
			})
			break
		case "resource-stocked":
			resources.forEach( resource => {
				if (resource.resourceId == ev.resourceId){
					resource.stock += parseFloat(ev.amount)
				}
			})
			break
	}
}
