import request from 'superagent'
import { invoicesMuts } from '../../mutations'

const state = [] // aka resources (in this file):

const mutations = {
    setCurrent(invoices, current){
        invoices.length = 0
        current.invoices.forEach( invoice => {
            invoices.push(invoice)
        })
    },
    applyEvent: invoicesMuts
}

const actions = {}

module.exports = {
  state,
  mutations,
  actions
}
