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
    data(){
        return {
            bounties: []
        }
    },
    mounted(){
        request
            .get('/current_state')
            .end( (err, res)=> {
                console.log("response from /current_state::")
                console.log(res.body)
                res.body.bounties.forEach(bounty => {
                    this.bounties.push(bounty)
                })
            })
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
