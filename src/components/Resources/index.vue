<template lang='pug'>

#resource
    crazy-btn(to='/RESOURCE_CREATE' text='New Resource')
    shared-title(title='Resources')
    tab
        row(v-for="r in resources", :r="r")

</template>

<script>
import Row from "./Row"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import Tab from './Tab'
import CrazyBtn from '../slotUtils/CrazyBtn'

export default {
    computed: {
        resources(){
            return this.$store.state.resources
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

#resource
    width: 100%

img
    height: 40px
    float:right

.left
    float: left
</style>
