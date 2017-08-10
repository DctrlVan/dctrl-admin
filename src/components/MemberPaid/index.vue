<template lang='jade'>

#newmember
    shared-title(:title='calcTitle')
    form-box(btntxt="Cash Placed in Safe"  endpoint='/member_paid' v-bind:data='member')
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
    },
    computed: {
        calcTitle(){
            let name = 'nobodies'
            this.$store.state.brain.members.forEach( member => {
                if (member.address === this.member.address){
                    name = member.name
                }
            })
            return name + "'s paying cash: "
        }
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'


</style>
