<template lang='jade'>

#member
    shared-title(title='Member List')
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

#member
    width: 100%

</style>
