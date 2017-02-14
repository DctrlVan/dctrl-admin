<template lang='jade'>

#bounties
		shared-title(title="active bounties")
				.border
						bounty(v-for='b in bounties', :x='b')

</template>

<script>
import _ from 'lodash'
import Bounty from './Bounty'
import SharedTitle from '../slotUtils/SharedTitle'

export default {
	created(){
			this.$store.dispatch('GET_ACTIVE_BOUNTIES')
	},
  beforeMount(){
      this.$store.commit('setHeader', 'Available Bounties:')
  },
  components: {
      Bounty, SharedTitle
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
@import '../../styles/framework'

@import '../../styles/colours'

#bounties
		padding-bottom:10em

.border
		border-style:solid
		border-color:accent2
		padding:0em
		border-width:0px


</style>
