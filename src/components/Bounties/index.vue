<template lang='jade'>

#bounties
		shared-title(title="Bounties")
				label active
				.blist
						bounty(v-for='b in activeBounties', :x='b')
				label claimed
				.blist
						bounty(v-for='b in claimedBounties', :x='b')
				label paid
				/*bounty(v-for='b in payedBounties', :x='b')*/

</template>

<script>
import _ from 'lodash'
import Bounty from './Bounty'
import SharedTitle from '../slotUtils/SharedTitle'

export default {
	created(){
			if (!this.$store.state.bounties.list.length){
				this.$store.dispatch('GET_ACTIVE_BOUNTIES')
			}
	},
  components: {
      Bounty, SharedTitle
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

.blist
		padding-left: 2em
		margin-bottom:2em
</style>
