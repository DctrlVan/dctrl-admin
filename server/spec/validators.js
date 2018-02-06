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
  isId(val, errRes){
      //XXX not in use
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
      state.pubState.members.forEach(member =>{
          if (val === member.memberId){
            result = true
          }
      })
      if (!result) {
          errRes.push('invalid member')
      }
      return result
  },
  isTaskId(val, errRes){
      let result = false
      state.pubState.tasks.forEach(task =>{
          if (val == task.taskId){
            result = true
          }
      })
      if (!result) {
          errRes.push('invalid task')
      }
      return result
  },
  isResourceId(val, errRes){
      let result = false
      state.pubState.resources.forEach(resource =>{
          if (val == resource.resourceId){
            result = true
          }
      })
      if (!result) {
          errRes.push('invalid resource')
      }
      return result
  },
  isNewResourceId(val, errRes){
      let isNew = true
      state.pubState.resources.forEach(resource =>{
          if (val == resource.resourceId){
            isNew = false
          }
      })
      if (!isNew){
          errRes.push('resourceId exists')
      }
      return isNew
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
