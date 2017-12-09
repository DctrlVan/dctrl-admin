import config from '../configuration'
import request from 'superagent'
import bitcoindZmq from './bitcoindZmq'
import bitcoindRpc from './bitcoindRpc'
import exchangeRate from './exchangeRate'
import events from '../adminSrc/events'
import state from '../adminSrc/state'
import currentAccounts from './currentAccounts'

// check on new blocks
bitcoindZmq.hashblockStream
    .log('block found')
    .onValue( checkForPayments )

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
            events.memberPaid(memberId, amount, isCash, notes)
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
