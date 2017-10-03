import state from '../state'
import _ from 'lodash'

module.exports = {
  isName(val, errRes){
      return true
  },
  isAmount(val, errRes){
      console.log('validating amount')
      if (val <= 0){
        console.log('')
        errRes.push('amount must be positive number')
        return false
      }
      return true
  },
  isFob(val, errRes){
      return true
  },
  isMultisigAddress(val, errRes){
      return true
  },
  isAddress(val, errRes){
      return true
  },
  isMemberId(val, errRes){
      return true
  },
  isBountyId(val, errRes){
      return true
  },
  isResourceId(val, errRes){
      return true
  },
  isBool(val, errRes){
      return true
  },
  isNotes(val, errRes){
      return true
  },
  isSupplyType(val, errRes){
      return true
  }
}
