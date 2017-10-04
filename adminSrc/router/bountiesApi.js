const state = require('../state')
const dbQueries = require('../dbQueries')


module.exports = function eventApi(app){

      app.get('/db/bounty/:bountyId', (req, res) => {
        dbQueries.getEventsForBounty(req.params.bountyId, (err, bountyHistory) => {
          console.log('returning', {bountyHistory})
          res.json(bountyHistory)
        })
      })

      app.get('/state/bounties', (req, res) => {
        res.json(state.getState().bounties)
      })

}
