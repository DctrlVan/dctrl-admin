<template lang='jade'>

modal(visible='true')
    h5 {{title}}
    span Have you fulfilled the bounty requirements?:
    label bitcoin address
    address-input
    label Note:
    notes-input
    confirm-btn

</template>

<script>

import SharedTitle from '../../slotUtils/SharedTitle'
import FormBox from '../../slotUtils/FormBox'
import Modal from '../../slotUtils/Modal'
import AddressInput from './AddressInput'
import NotesInput from './NotesInput'
import ConfirmBtn from './ConfirmBtn'

export default {
  components: {
    SharedTitle,
    FormBox,
    AddressInput,
    NotesInput,
    ConfirmBtn,
    Modal
  },
  computed:{
    title(){
      let title = '...missing data'
      let id = this.$store.state.bounties.claimId
      this.$store.state.bounties.list.forEach(bounty => {
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
label
    color:white
span
    color:white
h5
    color:white
</style>
