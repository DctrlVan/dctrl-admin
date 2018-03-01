<template lang='pug'>

#member
    crazy-btn(v-if='loggedIn' to='/member_create' text='new member')
    shared-title(title='Illuminati Hit List')
    .list(v-if='true')
        tab
            row(v-for="m in members", :m="m")
    .padding(v-else)
        h5 dctrl member
        ol
            li Believer in a transcendent future.
            li Possess dctrl rfid tag.
            li Possible human, magical entity, fairy, cyborg or alien.
        p
            strong visit a node to find out more

</template>

<script>

import Row from "./Row"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import Tab from './Tab'
import CrazyBtn from '../slotUtils/CrazyBtn'

export default {
    computed: {
        loggedIn(){
            return this.$store.getters.isLoggedIn
        },
        members(){
            return this.$store.state.members
        }
    },
    components:{
        SharedTitle,
        Row,
        Tab,
        CrazyBtn
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

label
    margin-top: 2em
    font-size: 1.4em
    border-bottom-style: solid
    border-left-style: solid
    border-color: accent2
    margin-bottom: -1px
    background: accent2
    color: main

#member
    width: 100%

li
    margin-left: 1em

.padding
    padding: 1.987654321em


</style>
