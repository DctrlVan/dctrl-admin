<template lang='jade'>

#member
    shared-title(title='Bounty List')
    bli(v-for="b in bounties", :b="b")

</template>

<script>
import Bli from "./Bli"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    computed: {
        bounties(){
            return this.$store.state.bounties
        }
    },
    components:{
        SharedTitle,
        Bli
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

</style>
