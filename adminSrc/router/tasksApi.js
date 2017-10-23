const state = require('../state')
const dbQueries = require('../dbQueries')


module.exports = function eventApi(app){

      app.get('/db/task/:taskId', (req, res) => {
        dbQueries.getEventsForTask(req.params.taskId, (err, taskHistory) => {
          console.log('returning', {taskHistory})
          res.json(taskHistory)
        })
      })

      app.get('/state/tasks', (req, res) => {
        res.json(state.getState().tasks)
      })

}
