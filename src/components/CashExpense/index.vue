<template lang='jade'>

#newmember
    shared-title(title='Cash Expense')
    form-box
        label amount
        input(v-model='member.amount' type='text')
        label notes
        input(v-model='member.notes' type='text')
        label Submit
        button(@click.prevent='pay') Cash Taken From Safe

</template>

<script>
import request from 'superagent'
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    data(){
        return {
            member: {
                amount: 0,
                notes: ''
            }
        }
    },
    methods:{
        pay(){
            console.log("to backend::", this.member)
            request
                .post('/cash_expense')
                .send(this.member)
                .end((err,res)=>{
                    console.log({err,res})
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
