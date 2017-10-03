<template lang='pug'>

#createbounty
    shared-title(title='Create Bounty')
    form-box(btntxt="Create New Bounty" event='bounty-created' v-bind:data="bounty")
        label One time bounty?
        input(v-model='bounty.oneTime' type='checkbox')
        label title
        input(v-model='bounty.name' type='text')
        label description
        input(v-model='bounty.description' type='text')
        span(v-if="bounty.oneTime")
            label Value
            input(v-model='bounty.boost' type='text')
        span(v-else)
            label Monthly Value
            input(v-model='bounty.monthlyValue' type='text')
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
                monthlyValue: 0,
                cap: '',
                oneTime: false,
                boost: 0
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

.onetime
    display: inline

</style>
