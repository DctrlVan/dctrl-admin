<template lang='jade'>

#newmember
    shared-title(title='Member Charged')
    form-box(btntxt="Credit Member Account"  endpoint='/member_activated' v-bind:data='member')

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
