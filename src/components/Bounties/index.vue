<template lang='jade'>

#bounties
		h2 Available Bounties:
		bounty(v-for='b in bounties', :x='b')
		new-bounty
		claim-bounty
		reserve-bounty

</template>

<script>
import _ from 'lodash'
import NewBounty from './NewBounty'
import ClaimBounty from './ClaimBounty'
import ReserveBounty from './ReserveBounty'
import Bounty from './Bounty'


export default {
  beforeMount(){
      this.$store.commit('setHeader', 'Available Bounties:')
  },
  components: {
      Bounty,
			NewBounty,
			ClaimBounty,
			ReserveBounty
  },
  computed: {
      bounties(){
          return _.sortBy( this.$store.state.bounties.active, bounty => {
							return -bounty.amount
          })
      }
  }
}
</script>

<style lang="stylus" scoped>

@import '../../styles/colours'

#bounties
		padding-bottom:10em

h2
		background:mainDark
		color:contentColour

</style>
