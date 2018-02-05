import request from 'superagent'
import { tasksMuts } from '../../mutations'

const state = []

const mutations = {
    setCurrent(tasks, current){
        tasks.length = 0
        current.tasks.forEach( task => {
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
