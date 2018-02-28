import config from '../../configuration'
import request from 'superagent'
import events from '../events'
import state from '../state'
import bitcoindZmq from './bitcoindZmq'
import bitcoindRpc from './bitcoindRpc'
import { currentAccounts } from './currentAccounts'

// check on new blocks
bitcoindZmq.hashblockStream
    .log('block found')
    .onValue(checkForPayments)

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

function recordMemberPayment(btcAmount, address){
    let memberId = getMemberIdFromAddress(address)
    let paid = (state.pubState.cash.spot * btcAmount).toFixed(6).toString()
    let isCash = false
    let notes = 'dctrl-admin' // txid ?
    console.log({memberId, paid})
    if (memberId && paid){
        events.memberPaid(memberId, paid, isCash, notes)
    }

     // bring in the transaction ID, instead of this.
}

function getMemberIdFromAddress(address){
  let memberId
  state.pubState.members.forEach( member => {
      if (member.address == address){
          memberId = member.memberId
      }
  })
  return memberId
}

function recordResourcePayment(btcAmount, address){
    console.log("TODO: recordResourcePayment:", {btcAmount, address})
    let resourceId = getResourceIdFromAddress(address)
    let notes = 'dctrl-admin' // bring in the transaction ID, instead of this.
    let amount = (state.pubState.cash.spot * btcAmount).toFixed(6).toString()

    // events.resourcePaid(resourceId, amount, isCash, notes)
}

function getResourceIdFromAddress(address, callback){
  let resourceId
  state.pubState.resources.forEach( resource => {
      if (resource.address == address){
          resourceId = resource.resourceId
      }
  })
  return resourceId
}
