<template lang='jade'>

#newmember
    shared-title(title='Member Paid Btc')
    h2 todo qr

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    mounted(){
        // this is boilerplate code that could probably be avoided with state
        // allows direct link to this page
        let address = this.$router.currentRoute.path.split('/')[2]
        if (address){
            this.member.address = address
        }
    },
    data(){
        return {
            member: {
                address: '',
            }
        }
    },
    components: {
        SharedTitle
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'


</style>
