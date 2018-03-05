<template lang='pug'>

tr(class="")
    td
        img(v-if='isLoggedIn', src='../../assets/images/loggedIn.svg')
        img(v-else, src='../../assets/images/loggedOut.svg')
    td
        router-link(:to='\'/member_paid/\' + this.m.memberId')
            img(src='../../assets/images/cash1.svg')
        label {{ m.balance.toFixed(2) }}
    td
        dctrl-active(:m='m')
    td
        span {{ m.name }}
    td
        badges(:m='m')
    td
        router-link(:to='\'/calendar/\' + this.m.memberId')
            img(src='../../assets/images/calendar.svg')

</template>


<script>

import DctrlActive from './DctrlActive'
import Badges from './Badges'

export default {
    props: ['m'],
    components: {DctrlActive, Badges},
    computed:{
        isLoggedIn(){
            let isLoggedIn
            this.$store.state.sessions.forEach( s => {
                if ( s.ownerId === this.m.memberId ){
                    isLoggedIn = true
                }
            })
            return isLoggedIn
        }
    }
}

</script>

<style lang="stylus" scoped>
@import '../../styles/colours'

.or
    font-size: 1.3em

.pad
    margin-right: 5px

span
    color: accent1
    font-size: 1.4em
    text-align: center
    margin: 10px
    width:100%
    padding:1em

.small
    font-size: .5em

button
    background: accent2
    color: black
    border: none

img
    height: 4em
    padding-left: .2345em
    padding-right: .2345em

tr
    border-left-color: accent2
    border-bottom-color: accent5
    border-top-color: accent5
    border-style: dotted
    border-right-style: none
    border-left-style: none
    border-width: 2px
    vertical-align:middle

td
    padding: .3em

</style>
