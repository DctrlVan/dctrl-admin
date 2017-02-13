<template lang='jade'>


.claimbounty
    h2 CLAIM BOUNTY
    .box
        span This task is complete:
            li.box {{ title }}
        label alias
        alias-input
        label bitcoin address
        address-input
        confirm-btn

</template>

<script>

import AddressInput from './AddressInput'
import AliasInput from './AliasInput'
import ConfirmBtn from './ConfirmBtn'

export default {
  components: {
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

h5
		text-transform:uppercase
		border-color:accent2
		border-width:1px
		margin-bottom:1em


</style>
