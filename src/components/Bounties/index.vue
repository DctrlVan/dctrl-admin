<template lang='jade'>

#bounties
		shared-title(title="Bounties")
				bounty-modal(v-for='b in activeBounties', :x='b')
				bounty-modal(v-for='b in claimedBounties', :x='b')

</template>

<script>
import _ from 'lodash'
import BountyModal from './BountyModal'
import SharedTitle from '../slotUtils/SharedTitle'

export default {
	created(){
			if (!this.$store.state.bounties.list.length){
				this.$store.dispatch('GET_ACTIVE_BOUNTIES')
			}
	},
  components: {
      BountyModal, SharedTitle
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
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/framework'

@import '../../styles/colours'

#bounties
		padding-bottom:10em

label
		color: accent2

</style>
