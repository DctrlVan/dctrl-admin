module.exports = (cash, ev) => {
	switch (ev.type) {
		case "cash-increased":
			cash.cash += parseFloat(ev.amount)
			break
		case "cash-decreased":
			cash.cash -= parseFloat(ev.amount)
			break
		case "member-paid":
			if (ev.isCash) {
				cash.cash += parseFloat(ev.paid)
			}
			break
		case "spot-updated":
			cash.spot = ev.spot
			break
		case "currency-switched":
			cash.currency = ev.currency
			break
	}
}
