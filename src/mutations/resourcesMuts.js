import _ from 'lodash'

module.exports = (resources, ev) => {
	switch (ev.type) {
		case "resource-created":
			resources.push(ev)
			break
		case "resource-used":
			resources.forEach( resource => {
				if (resource.resourceId == ev.resourceId){
					resource.stock -= parseFloat(ev.amount)
					let isMemberCurrent = resource.current.some(curr => {
							// replace that sessions creds,
							let match = false
							if (curr.memberId === ev.memberId){
									match = true
									_.merge(curr, ev)
							}
							return match // true terminates the some loop & idHasSession->true too
					})
					if (isMemberCurrent){
						 // edited in array
					} else {
							resource.current.push(ev)
					}
				}
			})
			break
		case "resource-stocked":
			console.log('resource stocked mutation')
			resources.forEach( resource => {
				if (resource.resourceId == ev.resourceId){
					console.log('adjusting stock, ', ev.amount)
					resource.stock += parseFloat(ev.amount)
				}
			})
			break
	}
}
