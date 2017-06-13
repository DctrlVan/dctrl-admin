<template lang='jade'>

#cashexpense
    shared-title(title='Cash Expense')
    form-box(btntxt="test btntxt"  endpoint='/cash_expense' v-bind:data='details')
        label amount
        input(v-model='details.amount' type='text')
        label notes
        input(v-model='details.notes' type='text')

//- form-box(, :btntxt="Cash Taken")


</template>

<script>
import request from 'superagent'
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBoxx'

export default {
    data(){
        return {
            details: {
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
