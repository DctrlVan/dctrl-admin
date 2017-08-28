<template lang='jade'>

#createbounty
    shared-title(title='Create Bounty')
    form-box(btntxt="Create New Bounty" endpoint='/bounty_create' v-bind:data="bounty")
        label name
        input(v-model='bounty.name' type='text')
        label description
        input(v-model='bounty.description' type='text')
        label Monthly Value
        input(v-model='bounty.value' type='text')
        label Maximum Payout
        input(v-model='bounty.cap' type='text')
        label Bounty Fob! (tap it)
        input(v-model='bounty.fob' type='text')

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    data(){
        return {
            bounty: {
                name: '',
                description: '',
                value: '',
                cap: ''
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
