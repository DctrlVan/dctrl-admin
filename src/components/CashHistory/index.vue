<template lang='pug'>

.tasksummary
    shared-title(title='Task: ')
    calendar

</template>

<script>
import request from 'superagent'
import Calendar from './SummaryCalendar'
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    data(){
        return {
            taskId: '',
        }
    },
    computed: {
        totalCharged(){
            return 'todo'
        }
    },
    components:{
        SharedTitle, Calendar
    },
    mounted(){
        let component = this
        let taskId = this.$router.currentRoute.path.split('/')[2]
        this.taskId = taskId
        this.$store.dispatch('getTaskHistory', taskId)
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

p
    font-size:1.3em
    color:white
    font-family: 'Open Sans', light, sans-serif;

a
    color: accent2

h3
    text-align: left
    color:accent1
    font-family: 'Open Sans', light, sans-serif;


</style>
