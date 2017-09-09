const request = require('superagent')
const config = require('../configuration')
const bitcoindRpc = require('./bitcoindRpc')
const addressManager = require('./addressManager')
const state = require('../adminSrc/state')

const currentAccounts = []

function initializeWatchedMembersAddresses(){
    state.getState().members.forEach( member => {
        checkInitial(member.address, 'member')
    })
}

function initializeWatchedResourcesAddresses(){
  state.getState().resources.forEach( resource => {
      checkInitial(resource.address, 'resource')
  })
}

function checkInitial(address, group){
    if (!address) return console.log('address required')
    bitcoindRpc.getBalance(address, (err, balance)=> {
        if (err) return console.log('getbalance err:', err);
        currentAccounts.push({
            address,
            balance,
            group
        })
    })
}
// TODO: 
initializeWatchedMembersAddresses() //
module.exports = currentAccounts
