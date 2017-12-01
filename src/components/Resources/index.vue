<template lang='pug'>

#resource
    shared-title(title='Resources')
    row(v-for="r in resources", :r="r")

</template>

<script>

import Row from "./Row"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
// import CrazyBtn from '../slotUtils/CrazyBtn'

export default {
    computed: {
        resources(){
            return this.$store.state.resources
        }
    },
    components:{
        SharedTitle,
        Row,
        // CrazyBtn
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

#resource
    width: 100%

img
    height: 40px
    float:right

.left
    float: left

</style>
