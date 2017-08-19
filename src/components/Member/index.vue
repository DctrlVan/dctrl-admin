<template lang='jade'>

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
            address: '',
        }
    },
    computed: {
        totalCharged(){
            return 'todo'
        },
        calcTitle(){
            let title
            this.$store.state.brain.members.forEach( member => {
                if (member['member-id'] === this.member.memberId){
                    title = this.member.name
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
        let address = this.$router.currentRoute.path.split('/')[2]
        this.address = address
        this.$store.dispatch('getHistory', address)
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
