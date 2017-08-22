<template lang='jade'>

#newmember
    shared-title(title='Member Charged')
    form-box(btntxt="Credit Member Account"  endpoint='/member_charged' v-bind:data='member')
        label address
        input(v-model='member.address' type='text')
        label amount
        input(autofocus="autofocus" v-model='member.amount' type='text')
        label notes
        input(v-model='member.notes' type='text')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    mounted(){
        let address = this.$router.currentRoute.path.split('/')[2]
        if (address){
          this.member.address = address
        }
    },
    data(){
        return {
            member: {
                address: '',
                amount: '',
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
