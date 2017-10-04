const state = require('../state')

// we use this function to build a callback that can be passed
// to the
function buildResCallback(res){
    return (err, dbResponse) => {
        if (err) {
            res.status(500).send('db err')
        } else {
            res.send(dbResponse)
        }
    }
}

function memberIdFromFob(fob){
  let memberId
  // TODO: hide fob in server side state
  state.getState().members.forEach(member => {
      if (member.fob == fob){
          memberId = member.memberId
      }
  })
  return memberId
}

function bountyFromFob(fob){
  let memberId
  // TODO: hide fob in server side state
  state.getState().bounties.forEach(bounty => {
      if (bounty.fob == fob){
          bounty = bounty
      }
  })
  return bounty
}

// TODO, smarter addressManager

module.exports = {
  buildResCallback,
  memberIdFromFob,
}
