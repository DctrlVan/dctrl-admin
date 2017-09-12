<template lang='jade'>

#newmember
    shared-title(:title='getTitle')
    form-box(btntxt="Claim Bounty", v-bind:data="info", endpoint='/bounty_claim')
        label Member Fob! (Tap it)
        input(v-model='info.fob' type='text')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    mounted(){
        let bountyId = this.$router.currentRoute.path.split('/')[2]
        if (bountyId){
          this.info.bountyId = bountyId
        }
    },
    computed: {
        getTitle(){
            let title = '...loadin'
            this.$store.state.bounties.forEach(b => {
                if (b.bountyId == this.info.bountyId){
                    title = "Claim " + b.name + "!"
                }
            })
            return title
        }
    },
    data(){
        return {
            info: {
                bountyId: '',
                fob: ''
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
