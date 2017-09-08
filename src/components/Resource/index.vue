<template lang='jade'>

.resourcesummary
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
            resourceId: '',
        }
    },
    computed: {
        totalCharged(){
            return 'todo'
        },
        calcTitle(){
            let title = 'none'
            this.$store.state.resources.forEach( resource => {
                if (resource.resourceId === this.resourceId){
                    title = resource.name
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
        let resourceId = this.$router.currentRoute.path.split('/')[2]
        this.resourceId = resourceId
        this.$store.dispatch('getResourceHistory', resourceId)
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
