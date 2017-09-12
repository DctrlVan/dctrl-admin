<template lang='jade'>

#member
    router-link(to='/MEMBER_CREATE').crazybtn
        span New Member
        img(src='../../assets/images/active10.svg')
    shared-title(title='List of Members')
    tab
        row(v-for="m in members", :m="m")


</template>

<script>
import Row from "./Row"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import Tab from './Tab'

export default {
    computed: {
        members(){
            return this.$store.state.members
        }
    },
    components:{
        SharedTitle,
        Row,
        Tab
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'
@import '../../styles/crazybtn'

#member
    width: 100%


</style>
