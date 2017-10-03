const config = require('../../configuration')
const events = require('../events')
const state = require('../state')
const bodyParser = require('body-parser')
const calculations = require('../calculations')

module.exports = function eventApi(app){
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({
          extended: true
      }))

      app.get('/state/bounties', (req, res) => {
        res.json(state.getState().bounties)
      })
      
}
