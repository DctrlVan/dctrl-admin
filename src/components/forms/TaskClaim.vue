<template lang='pug'>

#newmember
    shared-title(:title='getTitle')
    form-box(btntxt="Claim task", v-bind:data="info", event='task-claimed')
        label Member Fob! (Tap it)
        input(v-model='info.fob' type='text')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    mounted(){
        let taskId = this.$router.currentRoute.path.split('/')[2]
        if (taskId){
          this.info.taskId = taskId
        }
    },
    computed: {
        getTitle(){
            let title = '...loadin'
            this.$store.state.tasks.forEach(t => {
                if (t.taskId == this.info.taskId){
                    title = "Claim " + b.name + "!"
                }
            })
            return title
        }
    },
    data(){
        return {
            info: {
                taskId: '',
                fob: ''
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


</style>
