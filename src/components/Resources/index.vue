<template lang='pug'>

#resource
    shared-title(title='Resources')
    .list(v-if='true')
        row(v-for="r in resources", :r="r")
    .padding(v-else)
        h5 dctrl resource
        ol
            li Raspberry pi running dctrl-fobtap rfid scan point.
            li Dctrl-admin compatible lightning point of sale service
            li Possible human, magical entity, fairy, cyborg or alien.

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
        },
        isLoggedIn(){
            return this.$store.getters.isLoggedIn
        },
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

.padding
    padding: 1.987654321em
li
    margin-left: 1em

</style>
