<template lang='pug'>

#createtask
    shared-title(title='Create Task')
    form-box(btntxt="Create New Task" event='task-created' v-bind:data="task")
        label One time task?
        input(v-model='task.oneTime' type='checkbox')
        label title
        input(v-model='task.name' type='text')
        label description
        input(v-model='task.description' type='text')
        span(v-if="task.oneTime")
            label Value
            input(v-model='task.boost' type='text')
        span(v-else)
            label Monthly Value
            input(v-model='task.monthlyValue' type='text')
            label Maximum Payout
            input(v-model='task.cap' type='text')
        label Task Fob! (tap it)
        input(v-model='task.fob' type='text')


</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    data(){
        return {
            task: {
                name: '',
                description: '',
                monthlyValue: 0,
                cap: 0,
                oneTime: false,
                boost: 0
            }
        }
    },
    components: {
        SharedTitle, FormBox
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'

.onetime
    display: inline

</style>
