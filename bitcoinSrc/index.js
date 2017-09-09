const config = require('../configuration')
const request = require('superagent')
const bitcoindZmq = require('./bitcoindZmq')
const bitcoindRpc = require('./bitcoindRpc')
const exchangeRate = require('./exchangeRate')
const events = require('../adminSrc/events')
const state = require('../adminSrc/state')
const currentAccounts = require('./currentAccounts')

// check on new blocks
bitcoindZmq.hashblockStream.onValue( checkForPayments )

function checkForPayments(){
    console.log("CHECKING FOR PAYMENTS.")
    currentAccounts.forEach( watchedAddress => {
        bitcoindRpc.getBalance(watchedAddress.address, (err, balance)=> {
            if (err) return console.log('getbalance err:', {err})

            if (watchedAddress.balance !== balance){
                let amount = parseFloat(balance) - parseFloat(watchedAddress.balance)
                watchedAddress.balance = balance
                switch(watchedAddress.group){
                    case 'member':
                        recordMemberPayment(amount, watchedAddress.address)
                        break
                    case 'resource':
                        recordResourcePayment(amount, watchedAddress.address)
                        break
                }
            } else {
                console.log('no payment received', watchedAddress)
            }
        })
    })
}

function recordMemberPayment(amount, address){
    console.log("TODO: recordMemberPayment:", {amount, address})
    let memberId = getMemberIdFromAddress(address)
    exchangeRate.getCadPrice( (err, exchangeRate)=> {
            let amount = (exchangeRate * amount).toFixed(6).toString()
            let isCash = false
            let notes = 'dctrl-admin' // bring in the transaction ID, instead of this.
            events.memberPaid(memberId, amount, isCash, notes, (err, res)=>{
                //
            })
    })
}

function getMemberIdFromAddress(address){
  let memberId
  state.getState().members.forEach( member => {
      if (member.address == address){
          memberId = member.memberId
      }
  })
  return memberId
}

function recordResourcePayment(amount, address){
    console.log("TODO: recordResourcePayment:", {amount, address})
    let resourceId = getResourceIdFromAddress(address)
    exchangeRate.getCadPrice( (err, exchangeRate)=> {
            let notes = 'dctrl-admin' // bring in the transaction ID, instead of this.
            let amount = (exchangeRate * amount).toFixed(6).toString()
            events.resourcePaid(resourceId, amount, isCash, notes, (err, res)=>{
                // get the things from resource here, instead of the member stuff
            })
    })
}


function getResourceIdFromAddress(address, callback){
  let resourceId
  state.getState().resources.forEach( resource => {
      if (resource.address == address){
          resourceId = resource.resourceId
      }
  })
  return resourceId
}


function removeWatch(){
    // TODO: _.pullAllWith(array, values, [comparator]) ??
}
