<template lang='pug'>

.resourcesummary
    //- img(src='../../assets/images/decent_logo_alpha_no_text.svg')
    //- .padding
    //-     input(v-model='search')
    //-     span search by name of resource/member/task
    //- button(@click='load')
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
            search: '',
            id: ''
        }
    },
    mounted(){
        this.load()
    },
    methods: {
        load(){
            let id
            let session = this.$store.state.loader.session

            console.log('loader session?',this.$store.state.loader.session)
            console.log('loading for', {session})

            this.$store.state.sessions.forEach( s => {
              if (s.session === session){
                id = s.ownerId
              }
            })
            console.log('mounted loading', {id})
            this.id = id
            console.log('loading.... id:', this.id)
            this.$store.dispatch('loadEvents', { memberId: this.id })
        }
    },
    computed: {
        calcTitle(){
            let name
            this.$store.state.members.forEach( m => {
                if (this.id === m.memberId){
                    name = m.name
                }
            })
            return name
        },
    },
    components:{
        SharedTitle, Calendar
    },
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

.padding
    display: inline
    padding: 3em
    height: 200px

p
    font-size:1.3em
    color:white
    font-family: 'Open Sans', light, sans-serif;

a
    color: accent2

img
    display:inline

h3
    text-align: left
    color:accent1
    font-family: 'Open Sans', light, sans-serif;


</style>
