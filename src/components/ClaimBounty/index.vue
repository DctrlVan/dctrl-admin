<template lang='jade'>

#newmember
    shared-title(title='Claim Bounty')
    form-box
        label amount
        input(v-model='bounty.amount' type='text')
        label notes
        input(v-model='bounty.notes' type='text')
        label Submit
        button(@click.prevent='claim') Claim

</template>

<script>
import request from 'superagent'
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    data(){
        return {
            bounty: {
                amount: 0,
                notes: ''
            }
        }
    },
    methods:{
        claim(){
            console.log("to backend::", this.bounty)
            request
                .post('/claim_bounty')
                .send(this.bounty)
                .end((err,res)=>{
                    console.log("res")
                })
        }
    },
    components: {
        SharedTitle, FormBox
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'


</style>
