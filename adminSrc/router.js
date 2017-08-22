const request = require('superagent')

const config = require('../conf')
const dbQueries = require('./rethinkdbQueries')

function buildResCallback(res){
    return (err, brainResponse) => {
        console.log({err,brainResponse})
        if (err || !brainResponse) {
            console.log('returning error')
            res.send('brain error')
        } else {
            console.log("sending", {brainResponse: brainResponse.body})
            res.send(brainResponse.body)
        }
    }
}

module.exports = function applyRouter(app){

    app.get('/db/member/:address', (req, res) => {
      dbQueries.getEventsForMember(req.params.address, (err, member)=> {
          res.json(member)
      })
    })

    app.get('/db/bounty/:bountyId', (req, res) => {
      dbQueries.getEventsForBounty(req.params.bountyId, (err, bounty)=> {
          res.json(bounty)
      })
    })

    app.post('/member_create', (req, res) => {
      console.log("/member_create", req.body)
      actions.memberCreate(
        req.body.name,
        req.body.email,
        req.body.fob,
        buildResCallback(res)
      )
    })

    app.post('/member_paid', (req, res) => {
      console.log("/member_paid", req.body)
      actions.memberPaid(
        req.body.memberId,
        req.body.amount,
        req.body.notes,
        buildResCallback(res)
      )
    })

    app.post('/member_charged', (req, res) => {
      actions.memberCharged(
        req.body.address,
        req.body.amount,
        req.body.notes,
        buildResCallback(res)
      )
    })

    app.post('/member_deactivate', (req, res) => {
        let address = req.body.address
        actions.memberDeactivate( address, buildResCallback(res) )
    })

    app.post('/cash_expense', (req, res) => {
        let amount = req.body.amount
        let notes = req.body.notes
        actions.cashExpense(amount, notes, buildResCallback(res))
    })

    app.post('/cash_received', (req, res) => {
        let amount = req.body.amount
        let notes = req.body.notes
        actions.cashReceived(amount, notes, buildResCallback(res) )
    })

    app.post('/create_bounty', (req, res) => {
        let name = req.body.name
        let description = req.body.description
        let value = req.body.value
        let boost = req.body.boost
        let cap = req.body.cap
        let fob = req.body.fob
        actions.bountyCreate(name, description, value, cap, boost, fob, buildResCallback(res) )
    })

    app.post('/stock_supplies', (req, res) => {
        // need to expand types
        let amount = req.body.amount
        let notes = req.body.notes
        actions.stockSupplies(amount, notes, buildResCallback(res))
    })

    app.post('/edit_bounty', (req,res)=> {
        let bountyId = req.body.bountyId
        let amount = req.body.amount
        let notes = req.body.notes
        actions.editBounty(bountyId, amount, notes, buildResCallback(res))
    })

    app.post('/boost_bounty', (req,res)=> {
        let bountyId = req.body.bountyId
        let amount = req.body.amount
        let notes = req.body.notes
        actions.boostBounty(bountyId, amount, notes, buildResCallback(res))
    })

    app.get('/current_state', (req, res) => {
      request
        .get(config.brainLocation)
        .end((err, res2) => {
          if (err) {
              return null
          }
          res.json(res2.body)
        })
    })
    //
    // app.post('/claim_bounty', (req, res) => {
    //     console.log("resbody", res.body)
    //     //TODO finish
    //     let bountyId = "4f37e360-4caf-11e7-ae6e-e9ad780f3651"
    //     let address = "3EerW4nQeMRJUTjM8UBbsdQPZxDA3VKdGX"
    //     bountyClaim( bountyId, address, buildResCallback(res) )
    // })

    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    })
}
