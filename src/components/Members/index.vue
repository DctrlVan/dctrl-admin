<template lang='pug'>

#member
    crazy-btn(to='/MEMBER_CREATE' text='New Member')
    shared-title(title='Illuminati Hit List')
    tab
        label active
        row(v-for="m in active", :m="m")
        label pending
        row(v-for="m in pending", :m="m")
        label inactive
        row(v-for="m in inactive", :m="m")

</template>

<script>
import Row from "./Row"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import Tab from './Tab'
import CrazyBtn from '../slotUtils/CrazyBtn'

export default {
    computed: {
        active(){
            return this.$store.state.members.filter(m => (m.balance >= 0))
        },
        pending(){
            return this.$store.state.members.filter(m => (m.balance < 0 && m.active >= 0))
        },
        inactive(){
            return this.$store.state.members.filter(m => (m.balance < 0 && m.active < 0))
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

.left
    float: left

</style>
