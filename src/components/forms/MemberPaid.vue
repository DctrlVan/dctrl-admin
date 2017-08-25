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
        let memberId = this.$router.currentRoute.path.split('/')[2]
        if (memberId){
          this.member.memberId = memberId
        }
    },
    data(){
        return {
            member: {
                memberId: '',
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
            this.$store.state.members.forEach( member => {
                if (member['member-id'] === this.member.memberId){
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
