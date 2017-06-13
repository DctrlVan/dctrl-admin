<template lang='jade'>

#createbounty
    shared-title(title='Create Bounty')
    form-box(btntxt="Create New Bounty" endpoint='/create_bounty' v-bind:data="bounty")
        label name
        input(v-model='bounty.name' type='text')
        label description
        input(v-model='bounty.description' type='text')
        label value
        input(v-model='bounty.value' type='text')
        label fob
        input(v-model='bounty.fob' type='text')

</template>

<script>

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
    components: {
        SharedTitle, FormBox
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'


</style>
