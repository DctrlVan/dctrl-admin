<template lang='pug'>

.membersummary
    shared-title(:title='calcTitle')
    calendar

</template>

<script>
import request from 'superagent'
import Calendar from './SummaryCalendar'
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    data(){
        return {
            memberId: '',
        }
    },
    computed: {
        totalCharged(){
            return 'todo'
        },
        calcTitle(){
            let title = 'none'
            this.$store.state.members.forEach( member => {
                if (member.memberId === this.memberId){
                    title = member.name
                }
            })
            return title
        }
    },
    components:{
        SharedTitle, Calendar
    },
    mounted(){
        let component = this
        let memberId = this.$router.currentRoute.path.split('/')[2]
        this.memberId = memberId
        console.log('component mounted')
        this.$store.dispatch('getMemberHistory', memberId)
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
