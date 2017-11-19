import request from 'superagent'
import { tasksMuts } from '../../mutations'

const state = []

const mutations = {
    setCurrentTasks(tasks, current){
        current.forEach( task => {
            tasks.push(task)
        })
    },
    applyEvent: tasksMuts
}

const actions = {

}

module.exports = {
  state,
  mutations,
  actions
}
