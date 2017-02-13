<template lang='jade'>

#bounties
		h2 Available Bounties:
		.border
				bounty(v-for='b in bounties', :x='b')

</template>

<script>
import _ from 'lodash'
import Bounty from './Bounty'


export default {
  beforeMount(){
      this.$store.commit('setHeader', 'Available Bounties:')
  },
  components: {
      Bounty,
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

h2
		text-transform:uppercase
		background:mainDark
		color:accent2
		margin:0
		padding-top:50px
		font-family:monospace
		font-weight:100
		border-bottom-style:solid
		border-color:accent2
		border-width:1px
		margin-bottom:1em

.border
		border-style:solid
		border-color:accent2
		padding:0em
		border-width:0px


</style>
