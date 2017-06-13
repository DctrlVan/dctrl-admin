<template lang='jade'>

#createbounty
    shared-title(title='Create Bounty')
    form-box
        label name
        input(v-model='bounty.name' type='text')
        label description
        input(v-model='bounty.description' type='text')
        label value
        input(v-model='bounty.value' type='text')
        label fob
        input(v-model='bounty.fob' type='text')
        label Submit
        button(@click.prevent='create') Cash Placed in Safe

</template>

<script>
import request from 'superagent'
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    data(){
        return {
            bounty: {
                name: "",
                description: '',
                value: "",
                fob: '',
            }
        }
    },
    methods:{
        create(){
            console.log("to backend::", this.bounty)
            request
                .post('/create_bounty')
                .send({
                    name: this.bounty.name,
                    description: this.bounty.description,
                    value: this.bounty.value,
                    fob: this.bounty.fob
                })
                .end((err,res)=>{
                    console.log({err,res})
                    this.bounty.name = ''
                    this.bounty.description = ''
                    this.bounty.value = ''
                    this.bounty.fob = ''
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
