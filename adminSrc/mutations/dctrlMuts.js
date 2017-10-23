module.exports = (dctrl, ev) => {
	switch (ev.type) {
		case "cash-increased":
			dctrl.cash += parseFloat(ev.amount)
			break
		case "cash-decreased":
			dctrl.cash -= parseFloat(ev.amount)
			break
		case "member-paid":
			if (ev.isCash) {
				dctrl.cash += parseFloat(ev.paid)
			}
			break
	}
}
