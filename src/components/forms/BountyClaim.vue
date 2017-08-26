<template lang='jade'>

#newmember
    shared-title(title='Claim Bounty')
    form-box(btntxt="Claim Bounty", v-bind:data="bounty", endpoint='/bounty_claim')
        label amount
        input(v-model='bounty.amount' type='text')
        label notes
        input(v-model='bounty.notes' type='text')

</template>

<script>
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
    components: {
        SharedTitle, FormBox
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'


</style>
