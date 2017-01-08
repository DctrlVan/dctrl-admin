<template lang="jade">

modal(:visible='visible', :close='closeModal')
    label CLAIM BOUNTY
        alias-input
        address-input
        button(@click='CLAIM_BOUNTY()') CLAIM BOUNTY

</template>

<script>
import Modal from '../../generics/utils/Modal'
import AddressInput from './AddressInput'
import AliasInput from './AliasInput'

export default {
    computed: {
        visible(){
            return this.$store.state.bounties.isUserClaiming
        },
    },
    methods:{
      CLAIM_BOUNTY(){
          let info = null
          this.$store.dispatch('CLAIM_BOUNTY')
      },
      closeModal(){
          this.$store.commit('setIsUserClaiming', false)
      },
    },
    components: {
        Modal, AddressInput, AliasInput
    }
}

</script>

<style lang="stylus" scoped>

button
    background:silver
    color:black
    width:100%

</style>
