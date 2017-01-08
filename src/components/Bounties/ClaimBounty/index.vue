<template lang="jade">

modal(:visible='visible', :close='closeModal')
    label CLAIM BOUNTY
        alias-input
        address-input
        confirm-btn

</template>

<script>
import Modal from '../../generics/utils/Modal'
import AddressInput from './AddressInput'
import AliasInput from './AliasInput'
import ConfirmBtn from './ConfirmBtn'

export default {
    computed: {
        visible(){
            return this.$store.state.bounties.isUserClaiming
        },
    },
    methods:{
      closeModal(){
          this.$store.commit('setIsUserClaiming', false)
      },
    },
    components: {
        Modal, AddressInput, AliasInput, ConfirmBtn
    }
}

</script>

<style lang="stylus" scoped>

</style>
