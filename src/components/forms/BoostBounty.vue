<template lang='jade'>

#editbounty
    shared-title(:title='getTitle')
    form-box(btntxt="Edit Bounty" endpoint='/boost_bounty' v-bind:data="info")
        label Boost Amount
        input(v-model='info.amount' type='text')
        label notes
        input(v-model='info.notes' type='text')

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    mounted(){
        let bountyId = this.$router.currentRoute.path.split('/')[2]
        if (bountyId){
          this.info.bountyId = bountyId
        }
    },
    computed: {
        getTitle(){
            let title
            // todo how often?
            console.log('calc getTitle')
            this.$store.state.bounties.forEach(b => {
                if (b['bounty-id'] == this.info.bountyId){
                    title = "Boost " + b.name + " Bounty!"
                }
            })
            return title
        }
    },
    data(){
        return {
            info: {
                bountyId: '',
                amount:'',
                notes: ''
            }
        }
    },
    components:{
        SharedTitle, FormBox
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

p
    font-size:1.3em
    color:white
    font-family: 'Open Sans', light, sans-serif;

a
    color: accent2

h3
    text-align: left
    color:accent1
    font-family: 'Open Sans', light, sans-serif;


</style>
