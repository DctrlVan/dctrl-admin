import _ from 'lodash'

module.exports = (bounties, ev) => {
	switch (ev.type) {
		case "bounty-created":
			bounties.push(ev)
			break
		case "bounty-claimed":
			bounties.forEach(bounty => {
				if (bounty.bountyId === ev.bountyId) {
					if (bounty.oneTime) {
						_.remove(bounties, function(bounty) {
							return (bounty.bountyId === ev.bountyId)
						})
					} else {
						bounty.lastClaimed = Date.now()
						bounty.boost = 0
					}
				}
			})
			break
		case "bounty-monthly-updated":
			bounties.forEach(bounty => {
				if (bounty.bountyId === ev.bountyId) {
					bounty.monthlyValue = parseFloat(ev.amount)
				}
			})
			break
		case "bounty-boosted":
			bounties.forEach(bounty => {
				if (bounty.bountyId === ev.bountyId) {
					bounty.boost = parseFloat(ev.amount)
				}
			})
			break
	}
}
