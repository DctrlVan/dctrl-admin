const request = require('superagent')
const config = require('../../configuration')
const state = require('../state')
const bitcoindRpc = require('./bitcoindRpc')

const currentAccounts = []

function initializeWatchedMembersAddresses(){
    state.pubState.members.forEach( member => {
        checkInitial(member.address, 'member')
        bitcoindRpc.watchAddress(member.address, ()=>{})
    })
    console.log({currentAccounts})
}

function checkInitial(address, group){
    if (!address) return console.log('address required')

    bitcoindRpc.getBalance(address, (err, balance)=> {
        if (err) return console.log('getbalance err:', err);
        console.log({address, balance})
        currentAccounts.push({
            address,
            balance,
            group
        })
    })
}

module.exports = {currentAccounts, initializeWatchedMembersAddresses}
