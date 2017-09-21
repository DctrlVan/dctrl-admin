module.exports = (dctrl, ev) => {
	switch (ev.type) {
		case "cash-increase":
			dctrl.cash += parseFloat(ev.amount)
			break
		case "cash-decrease":
			dctrl.cash -= parseFloat(ev.amount)
			break
		case "supplies-stocked":
			dctrl.supplies[ev.supplyType] += parseFloat(ev.amount)
			break
		case "supplies-used":
			dctrl.supplies[ev.supplyType] -= parseFloat(ev.amount)
			break
		case "member-paid":
			if (ev.isCash) {
				dctrl.cash += parseFloat(ev.paid)
			}
			break
	}
}
