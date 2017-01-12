<template>
<modal :visible="visible" :close="closeModal">
    <label>
      Reserve this shit
    </label>
    <alias-input></alias-input>
    <address-input></address-input>
    <confirm-btn></confirm-btn>
</modal>

</template>

<script>
import Modal from '../../generics/utils/Modal'
import AddressInput from './AddressInput'
import AliasInput from './AliasInput'
import ConfirmBtn from './ConfirmBtn'

export default {
    computed: {
        visible(){
            return this.$store.state.bounties.isUserReserving
        },
    },
    methods:{
      closeModal(){
          this.$store.commit('setIsUserReserving', false)
      },
    },
    components: {
        Modal, AddressInput, AliasInput, ConfirmBtn
    }
}

</script>

<style lang="stylus" scoped>

</style>
