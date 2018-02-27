<template lang='pug'>

#resource
    shared-title(title='Invoices')
    .list(v-if='isLoggedIn')
        row(v-for="i in invoices", :i="i")
    .padding(v-else)
        h5 dctrl invoices
        ol
            li lightning network payment requests to account or resource

</template>

<script>

import request from "superagent"
import Row from "./Row"
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    computed: {
        invoices(){
            let ownerId = this.$router.currentRoute.path.split('/')[2]
            if ( !ownerId ){
                ownerId = this.$store.getters.memberId
            }
            return this.$store.state.invoices.filter(i => {
                return i.ownerId === ownerId
            })
        },
        isLoggedIn(){
            return this.$store.getters.isLoggedIn
        },
    },
    components:{
        SharedTitle,
        Row,
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
