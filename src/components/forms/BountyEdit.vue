<template lang='pug'>

#editbounty
    shared-title(:title='getTitle')
    form-box(btntxt="Edit Bounty" endpoint='/bounty_monthly_update' v-bind:data="info")
        label New Monthly Amount
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
            this.$store.state.bounties.forEach(b => {
                if (b.bountyId == this.info.bountyId){
                    title = "Set monthly value for " + b.name + " !"
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
