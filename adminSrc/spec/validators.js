import state from '../state'
import _ from 'lodash'

module.exports = {
  isName(val, errRes){
      return true
  },
  isAmount(val, errRes){
      if (val < 0){
        errRes.push('amount must be positive number')
        return false
      }
      return true
  },
  isFob(val, errRes){
      let regex = /^[0-9]{10}$/
      let result = regex.test(val)
      if (!result){
        errRes.push('invalid fob format')
      }
      return result
  },
  isMultisigAddress(val, errRes){
      return true
  },
  isAddress(val, errRes){
      return true
  },
  isMemberId(val, errRes){
      let result = false
      state.getState().members.forEach(member =>{
          if (val == member.memberId){
            result = true
          }
      })
      return result
  },
  isBountyId(val, errRes){
      let result = false
      state.getState().tasks.forEach(task =>{
          if (val == task.taskId){
            result = true
          }
      })
      return result
  },
  isResourceId(val, errRes){
      let result = false
      state.getState().resources.forEach(resource =>{
          if (val == resource.resourceId){
            result = true
          }
      })
      return result
  },
  isBool(val, errRes){
      let isBool = (typeof val === 'boolean')
      if (!isBool){
          errRes.push('field requires boolean')
      }
      return isBool
  },
  isNotes(val, errRes){
      return true
  },
  isSupplyType(val, errRes){
      return true
  }
}
