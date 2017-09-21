
import dctrlEvs from './dctrlEvs'
import bountiesEvs from './bountiesEvs'
import membersEvs from './membersEvs'
import resourcesEvs from './resourcesEvs'

// expose all of the events in a single object
module.exports = Object.assign({},
  dctrlEvs,
  bountiesEvs,
  membersEvs,
  resourcesEvs
)
