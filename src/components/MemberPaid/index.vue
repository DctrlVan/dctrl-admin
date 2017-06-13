<template lang='jade'>

#newmember
    shared-title(title='Member Paid')
    form-box(btntxt="Cash Placed in Safe"  endpoint='/member_paid' v-bind:data='member')
        label address
        input(v-model='member.address' type='text')
        label amount
        input(v-model='member.amount' type='text')
        label notes
        input(v-model='member.notes' type='text')

</template>

<script>
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
    components: {
        SharedTitle, FormBox
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'


</style>
