<template>
<modal :visible="visible" :close="closeModal">
    <label>
      Reserve this shit
    </label>
    <alias-input></alias-input>
    <confirm-btn></confirm-btn>
</modal>

</template>

<script>
import Modal from '../../slotUtils/Modal'
import AliasInput from './AliasInput'
import ConfirmBtn from './ConfirmBtn'

export default {
    computed: {
        visible(){
            return this.$store.state.bounties.reserveId
        },
    },
    methods:{
      closeModal(){
          this.$store.commit('setReserveId', false)
      },
    },
    components: {
        Modal, AliasInput, ConfirmBtn
    }
}

</script>

<style lang="stylus" scoped>

</style>
