
import cashEvs from './cashEvs'
import membersEvs from './membersEvs'
import tasksEvs from './tasksEvs'
import resourcesEvs from './resourcesEvs'
import invoicesEvs from './invoicesEvs'
import sessionsEvs from './sessionsEvs'

// expose all of the events in a single object
module.exports = Object.assign({},
    cashEvs,
    membersEvs,
    tasksEvs,
    resourcesEvs,
    invoicesEvs,
    sessionsEvs,
)
