<template lang='jade'>

#bounties
		claim(v-show="claimingBounty")
		shared-title(title="Bounties")
		.full-width
				bounty-modal(v-for='b in activeBounties', :x='b')
				bounty-modal(v-for='b in claimedBounties', :x='b')

</template>

<script>
import _ from 'lodash'
import BountyModal from './BountyModal'
import SharedTitle from '../slotUtils/SharedTitle'
import Claim from './Claim'

export default {
	created(){
			if (!this.$store.state.bounties.list.length){
				this.$store.dispatch('GET_ACTIVE_BOUNTIES')
			}
	},
  components: {
      BountyModal, SharedTitle, Claim
  },
  computed: {
			activeBounties(){
				return this.bounties.filter(bounty => !bounty.isClaimed)
			},
			claimedBounties(){
				return this.bounties.filter(bounty => bounty.isClaimed)
			},
      bounties(){
          return _.sortBy( this.$store.state.bounties.list, bounty => {
							return -bounty.amount
          })
      },
			claimingBounty(){
				return this.$store.state.bounties.claimId
			}
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/framework'

@import '../../styles/colours'

#bounties
		padding-bottom:10em
		width:100%

label
		color: accent2

.full-width
		width:100%

</style>
