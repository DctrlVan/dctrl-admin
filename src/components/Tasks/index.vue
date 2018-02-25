<template lang='pug'>

#tasks
    crazy-btn(to='/TASK_CREATE' text='New Task')
    shared-title(title='Active tasks')
    .list(v-if='loggedIn')
        table
            tbody
                active-tasks(v-for="b in tasks", :b="b")
    .padding(v-else)
        h5 dctrl task
        ol
            li Essential task to maintain community resource.
            li Need of skill, tool, or energy.
            li Collaboration & cooperation.
        p
            strong visit a node to find out more

</template>

<script>
import ActiveTasks from "./ActiveTasks"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import CrazyBtn from '../slotUtils/CrazyBtn'

export default {
  computed: {
      tasks(){
          return this.$store.state.tasks
      },
      loggedIn(){
          return this.$store.getters.isLoggedIn
      }
  },
    components:{
        SharedTitle,
        ActiveTasks,
        CrazyBtn
    },
}

</script>

<style lang="stylus" scoped>

@import '../../styles/colours'

#tasks
    width: 100%

tr
    border-color: accent4
    border-top-style: solid
    border-bottom-style: solid
    border-width: 3px
    vertical-align:middle

thead
    tr
        text-align: center

td
    vertical-align: middle
    color: accent2
    font-size: 1.34em
    text-align: center

li
    text-align: left


img
    height: 3.9em

table
    text-align:center
    width: 100%
th
    font-family: sans-serif
    font-weight: lighter
    font-size: 1.1em
    color: accent1
    border-color: accent1

td
    color: accent3

.padding
    padding: 1.987654321em

li
    margin-left: 1em

</style>
