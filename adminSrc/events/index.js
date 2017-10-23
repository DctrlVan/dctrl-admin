
import dctrlEvs from './dctrlEvs'
import tasksEvs from './tasksEvs'
import membersEvs from './membersEvs'
import resourcesEvs from './resourcesEvs'

// expose all of the events in a single object
module.exports = Object.assign({},
  dctrlEvs,
  resourcesEvs,
  membersEvs,
  tasksEvs
)
