<template lang='pug'>

#member
    crazy-btn(to='/MEMBER_CREATE' text='New Member')
    shared-title(title='List of Members')
    tab
        row(v-for="m in members", :m="m")


</template>

<script>
import Row from "./Row"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import Tab from './Tab'
import CrazyBtn from '../slotUtils/CrazyBtn'

export default {
    computed: {
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
@import '../../styles/crazybtn'

#member
    width: 100%


.left
    float: left

</style>
