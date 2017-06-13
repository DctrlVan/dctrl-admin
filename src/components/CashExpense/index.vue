<template lang='jade'>

#cashexpense
    shared-title(title='Cash Expense')
    form-box(btntxt="Cash Taken From Safe"  endpoint='/cash_expense' v-bind:data='details')
        label amount
        input(v-model='details.amount' type='text')
        label notes
        input(v-model='details.notes' type='text')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

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
