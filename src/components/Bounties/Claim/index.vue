<template lang='jade'>

shared-title(title='Claim Bounty')
    form-box
        span This task is complete:
            li.box {{ title }}
        label bitcoin address
        address-input
        label Note:
        alias-input
        confirm-btn

</template>

<script>

import SharedTitle from '../../slotUtils/SharedTitle'
import FormBox from '../../slotUtils/FormBox'
import AddressInput from './AddressInput'
import AliasInput from './AliasInput'
import ConfirmBtn from './ConfirmBtn'

export default {
  components: {
    SharedTitle,
    FormBox,
    AddressInput,
    AliasInput,
    ConfirmBtn,
  },
  computed:{
    title(){
      let title = '...missing data'
      let id = this.$store.state.bounties.claimId
      this.$store.state.bounties.active.forEach(bounty => {
          if (id === bounty._id){
              title = bounty.name
          }
      })
      return title
    }
  }
}

</script>

<style lang='stylus' scoped>

@import '../../../styles/colours'

h2
    margin:0
    margin-bottom:1em

.box
    background: accent1
    padding:1em


</style>
