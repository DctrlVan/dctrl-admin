<template lang='jade'>

#member
    shared-title(title='Member List')
    mli(v-for="m in members", :m="m")


</template>

<script>
import Mli from "./Mli"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    data(){
        return {
            members: []
        }
    },
    mounted(){
        request
            .get('/current_state')
            .end( (err, res)=> {
                console.log("response from /current_state::")
                console.log(res.body)
                res.body.members.forEach(member => {
                    this.members.push(member)
                })
            })
    },
    components:{
        SharedTitle,
        Mli
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

</style>
