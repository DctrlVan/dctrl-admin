<template lang='jade'>

#newmember
    shared-title(title='Member Charged')
    form-box
        label address
        input(v-model='member.address' type='text')
        label amount
        input(v-model='member.amount' type='text')
        label notes
        input(v-model='member.notes' type='text')
        label Submit
        button(@click.prevent='charge') Credit Member Account

</template>

<script>
import request from 'superagent'
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    data(){
        return {
            member: {
                address: '',
                amount: 0,
                notes: ''
            }
        }
    },
    methods:{
        charge(){
            console.log("to backend::", this.member)
            request
                .post('/member_charged')
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
