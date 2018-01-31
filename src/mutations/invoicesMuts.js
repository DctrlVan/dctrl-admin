import _ from 'lodash'

module.exports = (invoices, ev) => {
	switch (ev.type) {
		case "invoice-created":
			invoices.push(ev)
			break
		case "invoice-paid":
			invoices.forEach(invoice => {
				if (invoice.r_hash === ev.r_hash) {
						invoice.settled = true
				}
			})
			break
	}
}
