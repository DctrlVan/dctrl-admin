<template lang='pug'>

#member
    crazy-btn(to='/MEMBER_CREATE' text='New Member')
    shared-title(title='List of Members')
    tab
        label active
        row(v-for="m in active", :m="m")
        label pending
        row(v-for="m in pending", :m="m")

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
            return this.$store.state.members.filter(m => (m.balance < 0))
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
    border-color: accent2
    margin-bottom: -1px


#member
    width: 100%

.left
    float: left

</style>
