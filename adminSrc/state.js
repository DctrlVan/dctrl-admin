// const db = require('./rethinkdbConnection')

const state = {
    members: [{name: 'test2'}],
    bounties: [],
    dctrl: {
        cash : {
            CAD: 0
        },
        supplies: {
            bitpepsi: 0
        }
    },
}

module.exports = state
